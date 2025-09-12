"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { strategyFormSchema, type StrategyFormData, salesTargetOptions, englishSpeakerOptions } from "@/lib/validations"
import { Loader2, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function StrategyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<StrategyFormData>({
    resolver: zodResolver(strategyFormSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      products: "",
      targetCountries: "",
      monthlySalesTarget: "",
      hasEnglishSpeaker: "",
    },
  })

  const onSubmit = async (data: StrategyFormData) => {
    setIsSubmitting(true)
    
    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Form submission failed')
      }

      // Store form data in sessionStorage for the thank you page
      sessionStorage.setItem('formData', JSON.stringify(data))
      
      // Store email results for display on thank you page
      if (result.emailResults) {
        sessionStorage.setItem('emailResults', JSON.stringify(result.emailResults))
      }

      // Show warning if emails failed but form was submitted
      if (result.warning) {
        console.warn('Email warning:', result.warning)
        // You could show a toast notification here
      }

      // Redirect to thank you page
      router.push('/tesekkurler')
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Set form-level error
      form.setError('root', {
        type: 'manual',
        message: error instanceof Error 
          ? error.message 
          : 'Bir hata oluştu. Lütfen tekrar deneyin.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Ad Soyad *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adınız ve soyadınız"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Şirket Adı *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Şirket adınız"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">İletişim Telefonu *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+90 5XX XXX XX XX"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">E-posta *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="ornek@firma.com"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="products"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-charcoal">
                Hangi ürünleri ihraç ediyorsunuz? *
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Örnek: Tekstil ürünleri, hazır giyim, kumaş..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="targetCountries"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-charcoal">
                Şu anda hangi ülkelere satış yapıyorsunuz? *
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Örnek: Almanya, Fransa, İtalya, ABD..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthlySalesTarget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-charcoal">
                Aylık hedef satış miktarınız nedir? *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white">
                    <SelectValue placeholder="Hedef satış miktarını seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {salesTargetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hasEnglishSpeaker"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-brand-charcoal">
                Ekibinizde İngilizce konuşabilen kimse var mı? *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white">
                    <SelectValue placeholder="Evet/Hayır seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {englishSpeakerOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Form Error Display */}
        {form.formState.errors.root && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">
              {form.formState.errors.root.message}
            </p>
          </div>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-brand-blue hover:bg-brand-charcoal text-white text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Strateji Dosyanız Hazırlanıyor...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                STRATEJİ DOSYAMI HAZIRLA
              </>
            )}
          </Button>
        </div>

        <div className="text-center text-sm text-brand-gray space-y-1">
          <p>✓ KVKK uyumlu, bilgileriniz güvende</p>
          <p>✓ 24 saat içinde hazır olacak</p>
          <p>✓ Hiçbir ücret yok</p>
        </div>
      </form>
    </Form>
  )
}
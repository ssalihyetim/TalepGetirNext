'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Send } from 'lucide-react';

const urgancıogluFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  title: z.string().min(2, 'Ünvan gerekli'),
  company: z.string().min(2, 'Şirket adı gerekli'),
  phone: z.string().min(10, 'Geçerli telefon numarası girin'),
  email: z.string().email('Geçerli email adresi girin'),
  packageType: z.enum(['pro', 'enterprise'], {
    required_error: 'Paket seçimi gerekli'
  }),
  targetMarkets: z.string().min(5, 'Hedef pazarlar hakkında bilgi verin'),
  currentChallenges: z.string().min(10, 'Mevcut satış zorluklarınızı açıklayın'),
  monthlyTarget: z.string().min(1, 'Aylık hedef seçin'),
  preferredStartDate: z.string().min(1, 'Başlama tarihi tercihi gerekli'),
  hasApprovedBudget: z.boolean(),
  additionalNotes: z.string().optional(),
  dataConsent: z.boolean().refine((val) => val === true, {
    message: 'Veri işleme onayı gerekli'
  }),
});

type UrgancıogluFormData = z.infer<typeof urgancıogluFormSchema>;

export function UrgancıogluForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<UrgancıogluFormData>({
    resolver: zodResolver(urgancıogluFormSchema),
    defaultValues: {
      hasApprovedBudget: false,
      dataConsent: false,
    },
  });

  const onSubmit = async (data: UrgancıogluFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'urgancioglu-offer',
          source: 'urgancioglu-offer-page'
        }),
      });

      if (!response.ok) {
        throw new Error('Form gönderimi başarısız');
      }

      // Track form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'urgancioglu_form_submit', {
          event_category: 'form',
          event_label: data.packageType,
          value: data.packageType === 'enterprise' ? 5000 : 3000
        });
      }

      router.push('/tesekkurler?source=urgancioglu');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-[#E2E8F0]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#1A2B4C]">
          Urgancıoğlu İçin Özel Teklif
        </CardTitle>
        <CardDescription className="text-[#6B7280]">
          Hiper-kişiselleştirilmiş outreach hizmeti için bilgilerinizi paylaşın
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-[#1A2B4C]">
                Ad Soyad *
              </Label>
              <Input
                {...form.register('name')}
                className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
                placeholder="Adınız ve soyadınız"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="title" className="text-[#1A2B4C]">
                Ünvan/Pozisyon *
              </Label>
              <Input
                {...form.register('title')}
                className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
                placeholder="Genel Müdür, Satış Direktörü, vb."
              />
              {form.formState.errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.title.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="company" className="text-[#1A2B4C]">
              Şirket Adı *
            </Label>
            <Input
              {...form.register('company')}
              className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
              placeholder="Urgancıoğlu Deri"
            />
            {form.formState.errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.company.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-[#1A2B4C]">
                Telefon *
              </Label>
              <Input
                {...form.register('phone')}
                type="tel"
                className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
                placeholder="+90 5XX XXX XX XX"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="text-[#1A2B4C]">
                E-posta *
              </Label>
              <Input
                {...form.register('email')}
                type="email"
                className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
                placeholder="email@urgancioglu.com"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Package Selection */}
          <div>
            <Label className="text-[#1A2B4C]">Paket Seçimi *</Label>
            <Select
              onValueChange={(value) => form.setValue('packageType', value as 'pro' | 'enterprise')}
            >
              <SelectTrigger className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]">
                <SelectValue placeholder="Bir paket seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pro">
                  Pro Paket - €3,000 kurulum + €800/ay (başarıya kadar)
                </SelectItem>
                <SelectItem value="enterprise">
                  Enterprise Paket - €5,000 kurulum + €1,000/ay (başarıya kadar)
                </SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.packageType && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.packageType.message}
              </p>
            )}
          </div>

          {/* Business Information */}
          <div>
            <Label htmlFor="targetMarkets" className="text-[#1A2B4C]">
              Hedef Pazarlar ve Müşteri Profili *
            </Label>
            <Textarea
              {...form.register('targetMarkets')}
              className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
              placeholder="Hangi pazarlarda ve müşteri segmentlerinde büyümek istiyorsunuz? (Premium ayakkabı markaları, lüks deri ürünleri, sürdürülebilirlik odaklı markalar, vb.)"
              rows={3}
            />
            {form.formState.errors.targetMarkets && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.targetMarkets.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="currentChallenges" className="text-[#1A2B4C]">
              Mevcut Satış Zorlukları *
            </Label>
            <Textarea
              {...form.register('currentChallenges')}
              className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
              placeholder="Şu anda yeni müşteri bulmada hangi zorluklarla karşılaşıyorsunuz? Mevcut satış sürecinizde hangi aşamalar en problemli?"
              rows={3}
            />
            {form.formState.errors.currentChallenges && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.currentChallenges.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="text-[#1A2B4C]">Aylık Hedef *</Label>
              <Select
                onValueChange={(value) => form.setValue('monthlyTarget', value)}
              >
                <SelectTrigger className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]">
                  <SelectValue placeholder="Aylık hedef seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-leads">10-20 nitelikli lead</SelectItem>
                  <SelectItem value="20-leads">20-30 nitelikli lead</SelectItem>
                  <SelectItem value="30-leads">30+ nitelikli lead</SelectItem>
                  <SelectItem value="meetings">10+ toplantı</SelectItem>
                  <SelectItem value="partnerships">5+ potansiyel ortaklık</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.monthlyTarget && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.monthlyTarget.message}
                </p>
              )}
            </div>
            <div>
              <Label className="text-[#1A2B4C]">Başlama Tarihi Tercihi *</Label>
              <Select
                onValueChange={(value) => form.setValue('preferredStartDate', value)}
              >
                <SelectTrigger className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]">
                  <SelectValue placeholder="Başlama tarihi seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Hemen</SelectItem>
                  <SelectItem value="1-week">1 hafta içinde</SelectItem>
                  <SelectItem value="2-weeks">2 hafta içinde</SelectItem>
                  <SelectItem value="1-month">1 ay içinde</SelectItem>
                  <SelectItem value="discuss">Görüşelim</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.preferredStartDate && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.preferredStartDate.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasApprovedBudget"
              checked={form.watch('hasApprovedBudget')}
              onCheckedChange={(checked) => 
                form.setValue('hasApprovedBudget', checked as boolean)
              }
            />
            <Label htmlFor="hasApprovedBudget" className="text-[#6B7280] text-sm">
              Bütçe onayı mevcut / Karar verme yetkisi var
            </Label>
          </div>

          <div>
            <Label htmlFor="additionalNotes" className="text-[#1A2B4C]">
              Ek Notlar
            </Label>
            <Textarea
              {...form.register('additionalNotes')}
              className="mt-1 border-[#E2E8F0] focus:border-[#1A2B4C]"
              placeholder="Özel istekleriniz, sorularınız veya eklemek istediğiniz bilgiler..."
              rows={3}
            />
          </div>

          {/* Data Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="dataConsent"
              checked={form.watch('dataConsent')}
              onCheckedChange={(checked) => 
                form.setValue('dataConsent', checked as boolean)
              }
            />
            <Label htmlFor="dataConsent" className="text-[#6B7280] text-sm leading-relaxed">
              Kişisel verilerimin işlenmesine, 359Partners tarafından iletişim kurulmasına ve 
              özel teklif hazırlanmasına onay veriyorum. *
            </Label>
          </div>
          {form.formState.errors.dataConsent && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.dataConsent.message}
            </p>
          )}

          {/* Submit Button */}
          {submitError && (
            <div className="text-red-500 text-sm text-center p-3 bg-red-50 rounded-lg">
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1A2B4C] hover:bg-[#0F172A] text-white py-3"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Özel Teklifimi İstiyorum
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
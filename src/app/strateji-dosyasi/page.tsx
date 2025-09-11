import { StrategyForm } from "@/components/forms/strategy-form"
import { ArrowLeft, Shield, Clock, Gift } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"

export const metadata = {
  title: 'Ücretsiz Strateji Dosyası - TalepGetir',
  description: 'Size özel ihracat strateji dosyanızı oluşturalım. 72 saat içinde hazır, tamamen ücretsiz.',
}

export default function StrategyFormPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              🎯 Son Adım: Bilgilerinizi Doldurun
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-brand-charcoal">
              Size özel ihracat <span className="text-brand-blue">strateji dosyanızı</span> hazırlayalım
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-gray mb-8 max-w-3xl mx-auto">
              Bu bilgiler ile <strong className="text-brand-blue">72 saat içinde</strong> size özel strateji dosyanızı hazırlıyoruz
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-green-50 p-4 rounded-xl border border-green-200">
                <Shield className="w-8 h-8 text-green-600" />
                <span className="font-semibold text-green-700">KVKK Uyumlu</span>
                <span className="text-xs text-green-600">Güvenli & Korumalı</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-blue-50 p-4 rounded-xl border border-blue-200">
                <Clock className="w-8 h-8 text-blue-600" />
                <span className="font-semibold text-blue-700">72 Saat İçinde</span>
                <span className="text-xs text-blue-600">Hızlı Teslimat</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-purple-50 p-4 rounded-xl border border-purple-200">
                <Gift className="w-8 h-8 text-purple-600" />
                <span className="font-semibold text-purple-700">Tamamen Ücretsiz</span>
                <span className="text-xs text-purple-600">Gizli Maliyet Yok</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardContent className="p-0">
                  <StrategyForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-brand-charcoal">
                    Strateji dosyanızda neler var?
                  </h3>
                  <ul className="space-y-3 text-sm text-brand-gray">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <span>Sektörünüze özel pazar analizi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <span>Rakip firmaların ihracat verileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <span>Hedef ülkelerdeki alıcı profilleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <span>Size özel lead generation stratejisi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <span>İlk 5 nitelikli lead listesi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="text-green-600 mb-2">
                    <Gift className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-800">
                    Tamamen Ücretsiz
                  </h3>
                  <p className="text-sm text-green-700 mb-3">
                    Bu strateji dosyası için herhangi bir ücret ödemeyeceksiniz. 
                    Sadece bilgilerinizi doldurun, biz size özel hazırlayalım.
                  </p>
                  <p className="text-xs text-green-600">
                    * Hiçbir gizli maliyet yok
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-2">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-800">
                    Güvenlik Garantisi
                  </h3>
                  <p className="text-sm text-blue-700">
                    Bilgileriniz KVKK kapsamında korunur ve asla 3. şahıslarla paylaşılmaz.
                    Sadece size özel strateji hazırlamak için kullanılır.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
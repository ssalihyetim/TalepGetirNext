import { CalendlyWidget } from "@/components/integrations/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Gift,
  ArrowLeft,
  Phone
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"

export const metadata = {
  title: 'Teşekkürler - Strateji Dosyanız Hazırlanıyor | TalepGetir',
  description: 'Strateji dosyanız 24 saat içinde hazır olacak. Şimdi bir toplantı rezervasyonu yaparak sürecimizi hızlandırın.',
}

export default function ThankYouPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905xxxxxxxxx'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, strateji dosyası için form doldurdum. Bilgi almak istiyorum.`

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Success Section */}
      <section className="bg-green-50 border-b border-green-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Strateji dosyanız hazırlanıyor!
            </h1>
            
            <p className="text-xl text-green-700 mb-8">
              Şimdi bu dosyayı birlikte değerlendirmek için 30 dakikalık ücretsiz toplantı rezervasyonu yapın
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">24 saat içinde</p>
                <p className="font-semibold text-gray-800">Dosya hazır</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">30 dakika</p>
                <p className="font-semibold text-gray-800">Ücretsiz görüşme</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Gift className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Hiçbir ücret</p>
                <p className="font-semibold text-gray-800">Tamamen bedava</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <Calendar className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
                      Toplantı Rezervasyonu Yapın
                    </h2>
                    <p className="text-brand-gray">
                      Strateji dosyanızı birlikte değerlendireceğimiz toplantıyı planlayın
                    </p>
                  </div>

                  {/* Calendly Widget */}
                  <CalendlyWidget 
                    url={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-brand-charcoal">
                    Şimdi ne olacak?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-charcoal">
                          24 saat içinde
                        </h4>
                        <p className="text-sm text-brand-gray">
                          Size özel strateji dosyanız e-posta adresinize gelecek
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-charcoal">
                          Toplantı zamanı
                        </h4>
                        <p className="text-sm text-brand-gray">
                          Dosyayı birlikte inceleyip sorularınızı yanıtlayacağız
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-green-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-charcoal">
                          Hemen başlayın
                        </h4>
                        <p className="text-sm text-brand-gray">
                          İsterseniz ilk leadlerinizi almaya başlayabilirsiniz
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <div className="text-center">
                    <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Hemen konuşmak ister misiniz?
                    </h3>
                    <p className="text-sm text-blue-700 mb-4">
                      Takvimde uygun saat bulamadıysanız, WhatsApp'tan direkt iletişime geçin.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp'tan İletişime Geç
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Call Option */}
              <Card className="p-6 bg-orange-50 border-orange-200">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2 text-orange-800">
                      Acil mi?
                    </h3>
                    <p className="text-sm text-orange-700 mb-4">
                      Hemen konuşmak istiyorsanız bizi arayabilirsiniz.
                    </p>
                    <a href="tel:+905xxxxxxxxx">
                      <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100 w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Hemen Ara
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Garantimiz
                    </h3>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>✓ Strateji dosyası tamamen ücretsiz</p>
                      <p>✓ Toplantı hiçbir yükümlülük getirmez</p>
                      <p>✓ Bilgileriniz asla paylaşılmaz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
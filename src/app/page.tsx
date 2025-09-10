import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Users, TrendingUp, Target, Clock, Star, Gift, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { CtaButton } from "@/components/ui/cta-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { EnhancedCard } from "@/components/ui/enhanced-card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm font-medium text-white">Garantili Lead Generation Sistemi</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight text-white">
                Her Ay En Az 5 Garantili İhracat Talebi Alın
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-display font-medium max-w-4xl mx-auto">
                Rakip analizi ve HS kodu araştırmasıyla tespit edilmiş, <span className="text-yellow-200 font-semibold">gerçek alıcı firmalardan</span> oluşan 
                hedeflenmiş lead listesi ile satışlarınızı büyütün
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.7}>
              <div className="mb-8">
                <CtaButton 
                  href="/strateji-dosyasi" 
                  size="xxl"
                  variant="primary"
                  icon={<Gift className="w-8 h-8" />}
                  className="bg-white text-brand-blue hover:bg-gray-100 hover:scale-105"
                >
                  ÜCRETSİZ SİZE ÖZEL STRATEJİ DOSYASI OLUŞTURALIM
                </CtaButton>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.9}>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm text-white/80 font-medium">Bilgilerinizi asla paylaşmıyoruz. KVKK uyumlu.</span>
              </div>
            </ScrollReveal>
            
            {/* Enhanced Social Proof */}
            <ScrollReveal delay={1.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Users className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-white/70">İhracat Firması</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/70">Başarılı Bağlantı</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal delay={0.1}>
                <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                  😰 Tanıdık Geliyorsa Devam Edin
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6 text-brand-charcoal">
                  Bu durumlardan hangisi size <span className="text-red-500">tanıdık geliyor?</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                  Çoğu ihracat firmasının yaşadığı 3 büyük problem. Siz de bunlardan birini yaşıyorsanız, doğru yerdesiniz.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.2}>
                <EnhancedCard className="p-6 text-center">
                  <div className="text-red-500 text-5xl mb-4">😤</div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    "Fuar dediler, katıldık... ama herkes katalog alıp kaçtı."
                  </h3>
                  <p className="text-brand-gray">
                    Binlerce lira harcadınız, günlerce stand başında durdunuz. Sonuçta sadece broşür dağıttınız.
                  </p>
                </EnhancedCard>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <EnhancedCard className="p-6 text-center">
                  <div className="text-red-500 text-5xl mb-4">😫</div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    "Gelen taleplerin %90'ı ya 'numune' isteyen ya da dolandırıcı."
                  </h3>
                  <p className="text-brand-gray">
                    Gerçek alıcı bulmak için saatlerce filtreleme yapıyorsunuz. Zamanınız boşa gidiyor.
                  </p>
                </EnhancedCard>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <EnhancedCard className="p-6 text-center">
                  <div className="text-red-500 text-5xl mb-4">🤷‍♂️</div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    "Kime ulaşacağımı bilmiyorum. Biri bana gerçek alıcı versin yeter."
                  </h3>
                  <p className="text-brand-gray">
                    Hangi firmalara hangi ürünleri satacağınız konusunda belirsizlik yaşıyorsunuz.
                  </p>
                </EnhancedCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-charcoal">
              TalepGetir ile neler değişecek?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-green-500 mb-4">
                    <Target className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    Artık gerçek alıcılarla konuşacaksınız
                  </h3>
                  <p className="text-brand-gray mb-4">
                    Doğrulanmış lead listesi sayesinde zaman kaybı yok, her görüşme değerli.
                  </p>
                  <Badge className="bg-green-100 text-green-800">%85 Doğruluk Oranı</Badge>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-blue-500 mb-4">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    Her ay garantili 5 nitelikli talep alacaksınız
                  </h3>
                  <p className="text-brand-gray mb-4">
                    Sistematik yaklaşım ile öngörülebilir satış pipeline'ı oluşturacaksınız.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">Garanti</Badge>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-purple-500 mb-4">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    Rakiplerinizin müşterilerine ulaşacaksınız
                  </h3>
                  <p className="text-brand-gray mb-4">
                    Rakip analizi ile mevcut pazarda payınızı artıracaksınız.
                  </p>
                  <Badge className="bg-purple-100 text-purple-800">Rekabet Avantajı</Badge>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-orange-500 mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    Satış ekibiniz net hedeflerle çalışacak
                  </h3>
                  <p className="text-brand-gray mb-4">
                    Detaylı hedef profilleri ile motivasyon ve verimlilik artışı sağlanacak.
                  </p>
                  <Badge className="bg-orange-100 text-orange-800">Yüksek Verimlilik</Badge>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-red-500 mb-4">
                    <Clock className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-charcoal">
                    3 ay içinde ihracat gelirlerinizi artıracaksınız
                  </h3>
                  <p className="text-brand-gray mb-4">
                    Kanıtlanmış sistem ile ölçülebilir iş büyümesi gerçekleştireceksiniz.
                  </p>
                  <Badge className="bg-red-100 text-red-800">Hızlı Sonuç</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Section */}
      <section id="nasil-calisir" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
                  🎯 TalepGetir 4 Aşamalı Sistem
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-brand-charcoal">
                  Nasıl <span className="text-brand-blue">Çalışır?</span>
                </h2>
                <p className="text-xl md:text-2xl text-brand-gray max-w-4xl mx-auto">
                  Veri odaklı yaklaşımımızla sistematik satış süreciyle hedeflenmiş ihracat satışları gerçekleştirin
                </p>
              </div>
            </ScrollReveal>

            {/* 4-Step Process Flow */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
                {/* Step 1 */}
                <div className="relative">
                  <EnhancedCard className="h-full">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                        1. ADIM
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-charcoal">İMP Belirleme</h3>
                      <h4 className="text-lg font-semibold text-brand-blue mb-4">İdeal Müşteri Profili</h4>
                      <p className="text-brand-gray">
                        İşiniz için en uygun müşteri profillerini tanımlıyor, satın alma potansiyeli en yüksek firmaları belirliyoruz.
                      </p>
                    </div>
                  </EnhancedCard>
                  {/* Enhanced Arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-brand-blue/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <EnhancedCard className="h-full">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                        2. ADIM
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-charcoal">Potansiyel Müşteri Tespiti</h3>
                      <h4 className="text-lg font-semibold text-brand-blue mb-4">Hedef Firma Tespiti</h4>
                      <p className="text-brand-gray">
                        Sistemimiz internetten firmaları tespit eder, yapay zeka ise bu firmaları analiz ederek en uygun firmaları listeler.
                      </p>
                    </div>
                  </EnhancedCard>
                  {/* Enhanced Arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-brand-blue/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <EnhancedCard className="h-full">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                        3. ADIM
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-charcoal">Karar Verici Bilgileri</h3>
                      <h4 className="text-lg font-semibold text-brand-blue mb-4">E‑posta ve Telefon</h4>
                      <p className="text-brand-gray">
                        Firma sahibi, satın alım yetkilisi, müdür gibi pozisyonların iletişim bilgilerini listeleriz.
                      </p>
                    </div>
                  </EnhancedCard>
                  {/* Enhanced Arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-brand-blue/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <EnhancedCard className="h-full">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                        4. ADIM
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-charcoal">İletişim ve Toplantılar</h3>
                      <h4 className="text-lg font-semibold text-brand-blue mb-4">Doğrudan Temas</h4>
                      <p className="text-brand-gray">
                        Potansiyel müşteri firmalarınızdaki karar verici kişiler ile doğrudan temas eder, iş birliği fırsatlarını geliştiririz.
                      </p>
                    </div>
                  </EnhancedCard>
                </div>
              </div>
            </ScrollReveal>

            {/* Process Results */}
            <ScrollReveal delay={0.5}>
              <div className="bg-brand-blue/5 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
                    Bu Sistem ile Neler Elde Edersiniz?
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <EnhancedCard className="h-full">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg">
                        <Target className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-brand-charcoal mb-3">Hedefli Satış</h4>
                      <p className="text-brand-gray leading-relaxed">
                        Artık rastgele değil, ürününüzü gerçekten satın alacak firmalarla konuşacaksınız
                      </p>
                    </div>
                  </EnhancedCard>
                  
                  <EnhancedCard className="h-full">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-10 h-10 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-brand-charcoal mb-3">Zaman Tasarrufu</h4>
                      <p className="text-brand-gray leading-relaxed">
                        Müşteri arama sürecinde %60 zaman kazanacak, üretim ve operasyona odaklanacaksınız
                      </p>
                    </div>
                  </EnhancedCard>
                  
                  <EnhancedCard className="h-full">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-10 h-10 text-purple-600" />
                      </div>
                      <h4 className="text-xl font-bold text-brand-charcoal mb-3">Satış Artışı</h4>
                      <p className="text-brand-gray leading-relaxed">
                        3 ay içerisinde ihracat satışlarınızda ölçülebilir artış göreceksiniz
                      </p>
                    </div>
                  </EnhancedCard>
                  
                  <EnhancedCard className="h-full">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="w-10 h-10 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-brand-charcoal mb-3">Kaliteli Lead'ler</h4>
                      <p className="text-brand-gray leading-relaxed">
                        %85 doğruluk oranıyla gerçek alıcı firmalarla iletişim kuracaksınız
                      </p>
                    </div>
                  </EnhancedCard>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-charcoal">
              Müşterilerimizin sonuçları
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-brand-charcoal">
                    "3 ayda 12 yeni müşteri kazandık. İlk defa hedefli satış yapabiliyoruz."
                  </blockquote>
                  <cite className="text-brand-gray">
                    - Mehmet Yılmaz, İhracat Müdürü, ABC Tekstil
                  </cite>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-brand-charcoal">
                    "TalepGetir sayesinde boşa zaman harcamayı bıraktık. Her lead değerli."
                  </blockquote>
                  <cite className="text-brand-gray">
                    - Ayşe Kaya, Genel Müdür, XYZ Makine
                  </cite>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 text-brand-charcoal">
                    "Garantili talep sistemi işimizi değiştirdi. Artık müşteri bulamıyoruz değil, seçiyoruz."
                  </blockquote>
                  <cite className="text-brand-gray">
                    - Ali Demir, Satış Direktörü, DEF Gıda
                  </cite>
                </CardContent>
              </Card>
            </div>

            {/* Results Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">%85</div>
                <p className="text-brand-gray">Lead Doğruluk Oranı</p>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">3X</div>
                <p className="text-brand-gray">Daha Fazla Satış Görüşmesi</p>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">%60</div>
                <p className="text-brand-gray">Zaman Tasarrufu</p>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">50+</div>
                <p className="text-brand-gray">Başarılı Firma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Objections Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-charcoal">
              Sık sorulan sorular
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                    Listenizdeki firmalar gerçekten alıcı mı?
                  </h3>
                  <p className="text-brand-gray">
                    Evet, %85 doğruluk garantisi veriyoruz ve listelerimizi sürekli güncelliyoruz. 
                    Her firma aktif ihracat yapan, doğrulanmış şirketlerden oluşur.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                    Kaç tane talep garantisi veriyorsunuz?
                  </h3>
                  <p className="text-brand-gray">
                    Her ay minimum 5 nitelikli talep garantisi veriyoruz. Bu, gerçek alıcı potansiyeli olan, 
                    sektörünüze uygun firmalardan gelen talepler.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                    Ne kadar sürede sonuç alırım?
                  </h3>
                  <p className="text-brand-gray">
                    İlk 30 gün içinde ilk talepler gelmeye başlar. 3. ay sonunda hedeflenen sonuçların 
                    tamamını görebilirsiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                    Hangi sektörlerde çalışıyorsunuz?
                  </h3>
                  <p className="text-brand-gray">
                    Tekstil, makine, gıda, kimya, otomotiv, inşaat malzemeleri dahil olmak üzere 
                    tüm ihracat sektörlerinde hizmet veriyoruz.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                    Fiyat ne kadar?
                  </h3>
                  <p className="text-brand-gray">
                    Her sektörün kendine özgü dinamikleri vardır. Strateji toplantısında sektörünüze 
                    ve hedeflerinize özel fiyat belirleriz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={0.1}>
              <div className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm mb-8">
                🚀 Son Adım: Hemen Başlayın!
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-8 text-white">
                Hemen başlamak istiyorsanız...
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
                Sadece <strong className="text-yellow-200">2 dakika</strong> sürecek formla başlayın, 
                <strong className="text-green-200"> 24 saat içinde</strong> size özel strateji dosyanız hazır olsun.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.7}>
              <div className="mb-12">
                <CtaButton 
                  href="/strateji-dosyasi" 
                  size="xxl"
                  variant="primary"
                  icon={<Zap className="w-8 h-8" />}
                  className="mb-6 bg-white text-brand-blue hover:bg-gray-100 hover:scale-105"
                >
                  ÜCRETSİZ STRATEJİ DOSYASI OLUŞTURALIM
                </CtaButton>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Hiçbir ön ödeme yok</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>İlk 30 gün deneme süresi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Memnun kalmazsanız ücret iadesi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
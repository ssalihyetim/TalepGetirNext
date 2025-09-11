'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Target, TrendingUp, Globe, Zap } from "lucide-react";
import { useState } from "react";

export default function UrgancıogluOfferPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Header */}
      <div className="bg-[#1A2B4C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Özel Teklif • Urgancıoğlu Deri
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Urgancıoğlu İçin Özel Geliştirilmiş<br />
              <span className="text-[#F59E0B]">Hiper-Kişiselleştirilmiş Outreach</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Bitkisel tabaklanmış deri üreticiniz için özel olarak tasarlanmış, 
              AI destekli ve garantili başarı sağlayan B2B satış sistemi.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {[
            { id: 'overview', label: 'Genel Bakış', icon: Target },
            { id: 'approach', label: 'Yaklaşımımız', icon: Zap },
            { id: 'examples', label: 'Email Örnekleri', icon: Mail },
            { id: 'pricing', label: 'Fiyatlandırma', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === id
                  ? 'bg-[#1A2B4C] text-white shadow-lg'
                  : 'bg-white text-[#1A2B4C] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* What We Do */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
                Urgancıoğlu İçin Neler Yapıyoruz?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#E2E8F0] hover:border-[#1A2B4C] transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1A2B4C]">
                      <Globe className="w-5 h-5 text-[#F59E0B]" />
                      Premium Ayakkabı Markaları
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280]">
                      Allen Edmonds, Alden, Tricker's gibi premium ayakkabı markalarına 
                      bitkisel tabaklanmış derinizin sürdürülebilirlik avantajları ile ulaşım.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#E2E8F0] hover:border-[#1A2B4C] transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1A2B4C]">
                      <Target className="w-5 h-5 text-[#F59E0B]" />
                      Lüks Deri Ürünleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280]">
                      Hermès, Bottega Veneta benzeri lüks markalar için sürdürülebilir 
                      deri çözümleri ve doğal patina geliştirme avantajları.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why AI-Powered Personalization */}
            <section className="bg-[#F8FAFC] rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-6 text-center">
                Neden AI Destekli Kişiselleştirme?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Şirket Analizi",
                    description: "Her hedef şirketin web sitesi, mesajlaşması ve ürün odakları AI ile analiz edilir"
                  },
                  {
                    title: "Özel Mesajlar",
                    description: "Her email, o şirketin gerçekliğini yansıtacak şekilde özelleştirilir"
                  },
                  {
                    title: "Yüksek Yanıt Oranları",
                    description: "Potansiyel müşteriler, sizin ödevinizi yaptığınızı hisseder ve mesajınız öne çıkar"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#1A2B4C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">{item.title}</h3>
                    <p className="text-[#6B7280]">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Guarantees */}
            <section>
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
                Garantilerimiz
              </h2>
              <Card className="border-[#10B981] bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">
                        Başarı Garantisi
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        Üzerinde anlaştığımız performans hedeflerine ulaşana kadar tam hizmet ücretini 
                        talep etmiyoruz. Eğer hedefler karşılanmazsa, kalan bakiye tahsil edilmez. 
                        Bu, yatırımınızın doğrudan somut sonuçlara bağlı olmasını sağlar.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeTab === 'approach' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
                Urgancıoğlu İçin Özel Yaklaşımımız
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="border-[#E2E8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#1A2B4C]">Hiper-Kişiselleştirilmiş Outreach</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Her hedef şirketin sürdürülebilirlik açığı AI ile analiz edilir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Markaya özel mesajlaşma (heritage, craftsmanship, premium positioning)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Bitkisel tabaklamanın avantajları özel olarak vurgulanır
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#E2E8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#1A2B4C]">Hedef Segmentasyon</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Premium ayakkabı markaları (Allen Edmonds, Alden, Tricker's)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Lüks deri ürünleri üreticileri (çantalar, cüzdanlar, aksesuarlar)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Sürdürülebilirlik odaklı moda markaları
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Email Deliverability */}
              <Card className="bg-[#F8FAFC] border-[#E2E8F0]">
                <CardHeader>
                  <CardTitle className="text-[#1A2B4C]">
                    Neden Emaillerimiz Spam'a Düşmez?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#1A2B4C] mb-2">Teknik Altyapı</h4>
                      <ul className="space-y-2 text-[#6B7280]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Email hesapları kademeli olarak "ısıtılır"
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Tüm email adresleri doğrulanır (FullEnrich)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          ABD IP adresleri kullanılır
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2B4C] mb-2">İçerik Kalitesi</h4>
                      <ul className="space-y-2 text-[#6B7280]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Yüksek kişiselleştirme seviyesi
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Hedeflenen müşteri profili ile mükemmel uyum
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Dağıtılmış gönderim stratejisi
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
              Urgancıoğlu İçin Email Sekansı Örnekleri
            </h2>
            
            <div className="space-y-8">
              {/* Email 1 */}
              <Card className="border-[#E2E8F0]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#1A2B4C]">Email 1 - First Touch (Personal + Value Proposition)</CardTitle>
                    <Badge variant="outline" className="border-[#10B981] text-[#10B981]">
                      Kişisel + Değer Önerisi
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg font-mono text-sm">
                    <div className="text-[#6B7280] mb-2">Subject: Solving Allen Edmonds' sustainability gap</div>
                    <div className="text-[#0F172A]">
                      Hi Paulo,<br/><br/>
                      
                      I wasn't sure if you or Nancy Wegner <span className="bg-yellow-100 px-1 rounded">(colleagueName)</span> was the right person to reach out about premium leather sourcing.<br/><br/>
                      
                      Allen Edmonds received "Not Good Enough" sustainability ratings on Good on You<span className="bg-yellow-100 px-1 rounded">(pain)</span> despite your impressive $3,000 Reserve Collection<span className="bg-yellow-100 px-1 rounded">(specificProduct)</span> launch. With 60% of luxury consumers now demanding eco-credentials<span className="bg-yellow-100 px-1 rounded">(industryTrend)</span>, this creates a real gap.<br/><br/>
                      
                      Urgancıoğlu has exclusively produced vegetable-tanned leather in Turkey for nearly a century. We're chrome-free, naturally develop rich patina, and eliminate allergic reactions—perfect for your heritage positioning<span className="bg-yellow-100 px-1 rounded">(theirOwnBrandingWords)</span>.<br/><br/>
                      
                      Would you be open to receiving samples of our vegetable-tanned shoe leather?<br/><br/>
                      
                      Best regards,<br/>
                      [Your Name]<br/><br/>
                      
                      P.S. With your 212-step process<span className="bg-yellow-100 px-1 rounded">(theirOwnBrandingWords)</span> and 135 craftspeople, vegetable-tanned leather's natural character would beautifully showcase their expertise.
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email 2 */}
              <Card className="border-[#E2E8F0]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#1A2B4C]">Email 2 - Industry Update (Authority + Market Trend)</CardTitle>
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      Otorite + Pazar Trendi
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg font-mono text-sm">
                    <div className="text-[#6B7280] mb-2">Subject: 60% of luxury consumers now demand sustainability credentials</div>
                    <div className="text-[#0F172A]">
                      Hi Paulo,<br/><br/>
                      
                      Quick industry update: Luxury footwear customers increasingly expect sustainability stories, especially at your $800-$3,000 Reserve Collection price points.<br/><br/>
                      
                      With the EU Deforestation Regulation deadline approaching (December 2025) and LWG certification becoming essential for California Prop 65 compliance, this creates real operational challenges for your Wisconsin facilities<span className="bg-yellow-100 px-1 rounded">(specificPain)</span>.<br/><br/>
                      
                      Since Nick Wooster joined as Creative Consultant, vegetable-tanned leather could perfectly complement his contemporary vision while maintaining your American authenticity.<br/><br/>
                      
                      Our chrome-free process delivers:<br/>
                      • Natural patina development (enhances heritage story)<br/>
                      • Zero chemical allergic reactions<br/>
                      • Nearly century-proven durability<br/><br/>
                      
                      Would a 10-minute call work to discuss how this fits your premium positioning?<br/><br/>
                      
                      Best regards,<br/>
                      [Your Name]
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email 3 */}
              <Card className="border-[#E2E8F0]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#1A2B4C]">Email 3 - Final Reminder (Soft Close)</CardTitle>
                    <Badge variant="outline" className="border-[#6B7280] text-[#6B7280]">
                      Yumuşak Kapanış
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg font-mono text-sm">
                    <div className="text-[#6B7280] mb-2">Subject: Following up on sustainable leather for Allen Edmonds</div>
                    <div className="text-[#0F172A]">
                      Hi Paulo,<br/><br/>
                      
                      Just a quick follow-up on vegetable-tanned leather options for your sustainability positioning.<br/><br/>
                      
                      Given your ten consecutive growth quarters success, chrome-free leather could strengthen your luxury market differentiation.<br/><br/>
                      
                      If exploring sustainable alternatives fits your current priorities, I'd be happy to send samples.<br/><br/>
                      
                      If timing isn't right, no worries—I'll step back and we can reconnect later.<br/><br/>
                      
                      Best regards,<br/>
                      [Your Name]
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
              Urgancıoğlu İçin Özel Fiyatlandırma
            </h2>

            {/* Single Package Card */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-[#10B981] bg-gradient-to-br from-green-50 to-emerald-50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#10B981] text-white px-4 py-1">
                    Urgancıoğlu Özel Paketi
                  </Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-3xl text-[#1A2B4C]">Hiper-Kişiselleştirilmiş Outreach</CardTitle>
                  <CardDescription className="text-lg">
                    Premium Deri Markalarına Özel Çözüm
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="space-y-4">
                    <div className="bg-white/70 p-4 rounded-lg border border-[#10B981]/20">
                      <h4 className="font-semibold text-[#1A2B4C] mb-2">1. Intro Offer</h4>
                      <div className="text-center mb-2">
                        <div className="text-2xl font-bold text-[#1A2B4C]">€800</div>
                      </div>
                      <p className="text-[#6B7280] text-sm">
                        5 Toplantı Talebi veya Teklif İsteği garantili
                      </p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg border border-[#10B981]/20">
                      <h4 className="font-semibold text-[#1A2B4C] mb-2">2. Devam Paketi</h4>
                      <div className="text-center mb-2">
                        <div className="text-2xl font-bold text-[#1A2B4C]">€1,600/ay</div>
                        <div className="text-sm text-[#6B7280]">3 ay süre ile</div>
                      </div>
                      <p className="text-[#6B7280] text-sm">
                        <strong>EN AZ 15 toplantı talebi veya teklif isteği</strong> daha sunacağız.
                        <br/>Eğer hedeflenen toplantı talebi gerçekleşmezse, fiyat oranında eksik taleplerin ücreti iade edilir.
                      </p>
                    </div>

                    <div className="bg-white/70 p-4 rounded-lg border border-[#10B981]/20">
                      <h4 className="font-semibold text-[#1A2B4C] mb-2">3. Revenue Share</h4>
                      <div className="text-center mb-2">
                        <div className="text-2xl font-bold text-[#1A2B4C]">%3.5</div>
                        <div className="text-sm text-[#6B7280]">1 yıllık satışlardan</div>
                      </div>
                      <p className="text-[#6B7280] text-sm">
                        Closed deal'lar için 1 yıllık satışlardan %3.5 Revenue Share talep edilir.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#1A2B4C]">Pakete Dahil Olanlar:</h4>
                    <ul className="space-y-2 text-sm text-[#6B7280]">
                      {[
                        "Veri kaynağı ve AI altyapısı kurulumu",
                        "Domain ve email hesapları kurulumu", 
                        "Email doğrulamaları ve ısınma süreci",
                        "Urgancıoğlu'ya özel hiper-kişiselleştirilmiş kampanya",
                        "Premium ayakkabı markalarına odaklı mesajlaşma",
                        "Sürdürülebilirlik temelli değer önerileri",
                        "Yanıt yönetimi ve takip sistemleri",
                        "Aylık performans raporlaması"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a 
                      href="https://wa.me/905326638379?text=Abi%20OK'ledik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white" size="lg">
                        Hemen Başlayalım
                      </Button>
                    </a>
                    <div className="text-center">
                      <p className="text-sm text-[#6B7280]">
                        Toplam Yatırım: €5,600 (4 ay) + %3.5 revenue share başarılı satışlardan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        )}


        {/* CTA Section */}
        <section className="text-center py-16 bg-[#1A2B4C] rounded-2xl text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Urgancıoğlu'nun Büyüme Hikayesini Birlikte Yazalım
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Premium markalar için bitkisel tabaklanmış derinizin sürdürülebilirlik hikayesini 
            doğru müşterilere ulaştıralım.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/905326638379?text=Abi%20OK'ledik" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8">
                Hemen Başlayalım
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
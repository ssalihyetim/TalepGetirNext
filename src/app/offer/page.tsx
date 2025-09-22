'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, TrendingUp, Globe, Zap } from "lucide-react";
import { useState } from "react";

export default function OfferPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Header */}
      <div className="bg-[#1A2B4C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              İhracat Teklifi • TalepGetir
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Türk İhracatçılar İçin<br />
              <span className="text-[#F59E0B]">AI Destekli Doğrudan İletişim</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              İhracat şirketiniz için özel olarak tasarlanmış, 
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
                İhracat Şirketiniz İçin Neler Yapabiliriz?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-[#E2E8F0] hover:border-[#1A2B4C] transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1A2B4C]">
                      <Globe className="w-5 h-5 text-[#F59E0B]" />
                      Hedef Pazarlarda Ulaşım
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280]">
                      Sektörünüzdeki potansiyel alıcılara doğrudan ulaşarak 
                      kişiselleştirilmiş iletişim kuruyoruz ve toplantı taleplerini sağlıyoruz.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#E2E8F0] hover:border-[#1A2B4C] transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1A2B4C]">
                      <Target className="w-5 h-5 text-[#F59E0B]" />
                      Doğru Müşteri Segmentasyonu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280]">
                      Ürününüzü gerçekten ihtiyaç duyan firmaları tespit ederek 
                      kaliteli leadler oluşturuyor ve teklif taleplerini alıyoruz.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#E2E8F0] hover:border-[#1A2B4C] transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1A2B4C]">
                      <Zap className="w-5 h-5 text-[#F59E0B]" />
                      Üstün Değer Önerileri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280]">
                      Her hedef firmaya özel değer önerileri geliştirerek 
                      ürününüzün benzersiz avantajlarını öne çıkarıyoruz.
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
                    description: "Her hedef şirketin web sitesi, ihtiyaçları ve ürün odakları AI ile detaylı analiz edilir"
                  },
                  {
                    title: "Özel Mesajlar",
                    description: "Her email, o şirketin gerçek ihtiyaçlarını yansıtacak şekilde özelleştirilir"
                  },
                  {
                    title: "Yüksek Yanıt Oranları",
                    description: "Potansiyel müşteriler, sizin araştırmaya zaman ayırdığınızı hisseder ve mesajınız öne çıkar"
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
                        Belirtilen toplantı/teklif taleplerini karşılayamazsak, 
                        eksik kalan sonuçlar oranında ödeme iadesi garantisi sunuyoruz. 
                        Performans hedeflerini tutturamadığımız durumlarda, ulaşamadığımız ölçüde ücret iadesi yapılır.
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
                Özel Yaklaşımımız
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="border-[#E2E8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#1A2B4C]">Hiper-Kişiselleştirilmiş İletişim</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Her hedef şirketin iş modeli ve ihtiyaçları AI ile analiz edilir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Sektöre ve şirkete özel değer önerileri geliştirilir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Ürününüzün benzersiz avantajları özellikle vurgulanır
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
                        Sektörünüzde gerçek alım gücü olan şirketler belirlenir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Ürününüzü kullanabilecek pozisyondaki firmalar tespit edilir
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#6B7280]">
                        Büyüme potansiyeli olan şirketlere öncelik verilir
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
                          Tüm email adresleri doğrulanır ve geçerlilik kontrol edilir
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          Profesyonel IP adresleri kullanılır
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
                          Profesyonel ve değer odaklı mesajlaşma
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}


        {activeTab === 'pricing' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">
              Fiyatlandırma Seçenekleri
            </h2>

            <div className="space-y-8">
              {/* Intro Offer */}
              <div className="max-w-2xl mx-auto">
                <Card className="border-[#F59E0B] bg-gradient-to-br from-orange-50 to-amber-50 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#F59E0B] text-white px-4 py-1">
                      Başlangıç Teklifi
                    </Badge>
                  </div>
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-3xl text-[#1A2B4C]">Intro Offer</CardTitle>
                    <CardDescription className="text-lg">
                      Risk-free başlangıç paketi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#1A2B4C] mb-2">€1,200</div>
                      <p className="text-[#6B7280]">
                        <strong>5 Toplantı/Teklif Talebi</strong> garantili
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#1A2B4C]">Pakete Dahil Olanlar:</h4>
                      <ul className="space-y-2 text-sm text-[#6B7280]">
                        {[
                          "Veri kaynağı ve AI altyapısı kurulumu",
                          "Domain ve email hesapları kurulumu", 
                          "Email doğrulamaları ve ısınma süreci",
                          "Hiper-kişiselleştirilmiş kampanya",
                          "Hedef sektör analizi ve mesajlaşma",
                          "Yanıt yönetimi ve takip sistemleri",
                          "Haftalık performans raporlaması"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <a 
                        href="https://wa.me/905326638379?text=İhracat%20yapmak%20istiyorum" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white" size="lg">
                          Başlangıç Paketi İçin İletişim
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Monthly Packages */}
              <div>
                <h3 className="text-2xl font-bold text-[#1A2B4C] mb-6 text-center">Aylık Sabit Ücret Paketleri</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      tier: "Başlangıç",
                      requests: "5-10 Talep",
                      price: "€2,000",
                      color: "border-[#6B7280] bg-gradient-to-br from-gray-50 to-slate-50",
                      badgeColor: "bg-[#6B7280]"
                    },
                    {
                      tier: "Büyüme",
                      requests: "7-15 Talep", 
                      price: "€2,500",
                      color: "border-[#10B981] bg-gradient-to-br from-green-50 to-emerald-50",
                      badgeColor: "bg-[#10B981]",
                      popular: true
                    },
                    {
                      tier: "Ölçeklendirme",
                      requests: "10-25 Talep",
                      price: "€3,000", 
                      color: "border-[#1A2B4C] bg-gradient-to-br from-blue-50 to-indigo-50",
                      badgeColor: "bg-[#1A2B4C]"
                    }
                  ].map((pkg, index) => (
                    <Card key={index} className={`${pkg.color} relative`}>
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-[#10B981] text-white px-4 py-1">
                            En Popüler
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pt-8">
                        <CardTitle className="text-2xl text-[#1A2B4C]">{pkg.tier}</CardTitle>
                        <CardDescription className="text-lg font-semibold">
                          {pkg.requests}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#1A2B4C] mb-1">{pkg.price}</div>
                          <p className="text-[#6B7280] text-sm">aylık</p>
                        </div>

                        <div className="space-y-3">
                          <ul className="space-y-2 text-sm text-[#6B7280]">
                            {[
                              "AI destekli hedef analizi",
                              "Kişiselleştirilmiş email kampanyaları", 
                              "Yanıt yönetimi ve takibi",
                              "Aylık performans raporları",
                              "Garanti sistemi dahil"
                            ].map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <a 
                            href="https://wa.me/905326638379?text=İhracat%20yapmak%20istiyorum" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button className={`w-full ${pkg.badgeColor} hover:opacity-90 text-white`} size="lg">
                              {pkg.tier} Paketi İçin İletişim
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="text-center bg-[#F8FAFC] rounded-lg p-6">
                <p className="text-[#6B7280]">
                  <strong>Garanti:</strong> Hedeflenen talep sayısına ulaşamazsak, eksik kalan sonuçlar oranında ücret iadesi yapılır.
                </p>
              </div>
            </div>

          </div>
        )}


        {/* CTA Section */}
        <section className="text-center py-16 bg-[#1A2B4C] rounded-2xl text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">
            İhracat Hedeflerinizi Birlikte Gerçekleştirelim
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            AI destekli kişiselleştirilmiş iletişim ile ürünlerinizi 
            doğru müşterilere ulaştıralım ve satış hedeflerinizi aşalım.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/905326638379?text=İhracat%20yapmak%20istiyorum" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 w-full sm:w-auto">
                Hemen Başlayalım
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
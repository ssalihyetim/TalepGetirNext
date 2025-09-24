import { StrategyFormData } from '@/lib/validations'

// Admin notification email template
export function generateAdminNotificationEmail(formData: StrategyFormData): {
  subject: string
  html: string
  text: string
} {
  const subject = `Yeni Strateji Dosyası Talebi - ${formData.company}`
  
  const html = `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yeni Strateji Dosyası Talebi</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #1a2b4c; padding: 30px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">
                🎯 Yeni Strateji Dosyası Talebi
            </h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px;">
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-bottom: 30px; border-radius: 4px;">
                <p style="margin: 0; color: #92400e; font-weight: 600;">
                    ⏰ Acil: 72 saat içinde hazırlanması gereken strateji dosyası!
                </p>
            </div>
            
            <h2 style="color: #1a2b4c; font-size: 20px; margin-bottom: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                Müşteri Bilgileri
            </h2>
            
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 140px;">Ad Soyad:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${formData.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Şirket:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${formData.company}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Telefon:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${formData.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">E-posta:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${formData.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Satış Hedefi:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${formData.monthlySalesTarget}</td>
                    </tr>
                </table>
            </div>
            
            <h3 style="color: #1a2b4c; font-size: 18px; margin-bottom: 15px;">
                İhraç Edilen Ürünler
            </h3>
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin-bottom: 25px;">
                <p style="margin: 0; color: #166534; line-height: 1.6;">
                    ${formData.products}
                </p>
            </div>
            
            <h3 style="color: #1a2b4c; font-size: 18px; margin-bottom: 15px;">
                Hedef Ülkeler
            </h3>
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 30px;">
                <p style="margin: 0; color: #1e40af; line-height: 1.6;">
                    ${formData.targetCountries}
                </p>
            </div>
            
            <!-- Action Required -->
            <div style="background-color: #fef2f2; border: 1px solid #fecaca; padding: 25px; border-radius: 8px; margin-top: 30px;">
                <h3 style="color: #dc2626; margin: 0 0 15px 0; font-size: 18px;">
                    🚨 Yapılması Gerekenler
                </h3>
                <ul style="color: #991b1b; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>Şirket araştırması yapılacak</li>
                    <li>Sektör analizi hazırlanacak</li>
                    <li>Rakip analizi çıkarılacak</li>
                    <li>Hedef ülke pazar araştırması yapılacak</li>
                    <li>İlk 5 nitelikli lead bulunacak</li>
                    <li>Özel strateji dokümantasyonu hazırlanacak</li>
                </ul>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1a2b4c; padding: 20px 40px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
                TalepGetir.com - İhracat Lead Generation Platformu
            </p>
            <p style="color: #94a3b8; margin: 5px 0; font-size: 12px;">
                Topkapı Litros Yolu, Maltepe, Litros Çıkmazı No:5, 34010 Zeytinburnu/İstanbul
            </p>
            <p style="color: #94a3b8; margin: 5px 0; font-size: 12px;">
                E-posta: salih@talepgetir.com | Telefon: +90 532 663 83 79
            </p>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 12px;">
                Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}
            </p>
        </div>
    </div>
</body>
</html>`

  const text = `
YENI STRATEJİ DOSYASI TALEBİ

Müşteri Bilgileri:
- Ad Soyad: ${formData.name}
- Şirket: ${formData.company}
- Telefon: ${formData.phone}
- E-posta: ${formData.email}
- Satış Hedefi: ${formData.monthlySalesTarget}

İhraç Edilen Ürünler:
${formData.products}

Hedef Ülkeler:
${formData.targetCountries}

ACİL: Bu strateji dosyası 72 saat içinde hazırlanması gerekiyor!

Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}

TalepGetir.com
Topkapı Litros Yolu, Maltepe, Litros Çıkmazı No:5, 34010 Zeytinburnu/İstanbul  
E-posta: salih@talepgetir.com | Telefon: +90 532 663 83 79
  `

  return { subject, html, text }
}

// User confirmation email template
export function generateUserConfirmationEmail(formData: StrategyFormData): {
  subject: string
  html: string
  text: string
} {
  const subject = `Strateji Dosyanız Hazırlanıyor! - TalepGetir`
  
  const html = `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strateji Dosyanız Hazırlanıyor</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #1a2b4c; padding: 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🎉 Tebrikler ${formData.name}!
            </h1>
            <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 16px;">
                Strateji dosyanız hazırlanıyor
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px;">
            <!-- Success Message -->
            <div style="background-color: #f0fdf4; border: 2px solid #22c55e; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 35px;">
                <div style="font-size: 48px; margin-bottom: 15px;">✅</div>
                <h2 style="color: #166534; margin: 0 0 10px 0; font-size: 24px;">
                    Başvurunuz Alındı!
                </h2>
                <p style="color: #15803d; margin: 0; font-size: 16px; line-height: 1.5;">
                    ${formData.company} için özel strateji dosyanızı hazırlıyoruz
                </p>
            </div>
            
            <!-- Timeline -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #1a2b4c; font-size: 20px; margin-bottom: 20px; text-align: center;">
                    📋 Süreç Nasıl İlerleyecek?
                </h3>
                
                <div style="position: relative;">
                    <!-- Step 1 -->
                    <div style="display: flex; align-items: flex-start; margin-bottom: 25px;">
                        <div style="background-color: #22c55e; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0;">
                            ✓
                        </div>
                        <div>
                            <h4 style="color: #22c55e; margin: 0 0 5px 0; font-size: 16px;">
                                Başvuru Alındı (Şimdi)
                            </h4>
                            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.4;">
                                Bilgilerinizi aldık ve analiz sürecini başlattık
                            </p>
                        </div>
                    </div>
                    
                    <!-- Step 2 -->
                    <div style="display: flex; align-items: flex-start; margin-bottom: 25px;">
                        <div style="background-color: #3b82f6; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0;">
                            2
                        </div>
                        <div>
                            <h4 style="color: #1e40af; margin: 0 0 5px 0; font-size: 16px;">
                                Pazar Araştırması (24 saat içinde)
                            </h4>
                            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.4;">
                                Sektörünüz ve hedef ülkeleriniz için detaylı analiz yapıyoruz
                            </p>
                        </div>
                    </div>
                    
                    <!-- Step 3 -->
                    <div style="display: flex; align-items: flex-start; margin-bottom: 25px;">
                        <div style="background-color: #f59e0b; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0;">
                            3
                        </div>
                        <div>
                            <h4 style="color: #d97706; margin: 0 0 5px 0; font-size: 16px;">
                                Lead Araştırması (48 saat içinde)
                            </h4>
                            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.4;">
                                Size uygun ilk 5 nitelikli lead'i buluyoruz
                            </p>
                        </div>
                    </div>
                    
                    <!-- Step 4 -->
                    <div style="display: flex; align-items: flex-start;">
                        <div style="background-color: #8b5cf6; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0;">
                            4
                        </div>
                        <div>
                            <h4 style="color: #7c3aed; margin: 0 0 5px 0; font-size: 16px;">
                                Strateji Dosyası Teslimi (72 saat içinde)
                            </h4>
                            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.4;">
                                Tüm analizleri içeren özel strateji dosyanızı e-posta ile gönderiyoruz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- What's Included -->
            <div style="background-color: #f8fafc; padding: 30px; border-radius: 12px; margin-bottom: 35px;">
                <h3 style="color: #1a2b4c; margin: 0 0 20px 0; font-size: 18px; text-align: center;">
                    📊 Strateji Dosyanızda Neler Olacak?
                </h3>
                
                <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center;">
                        <span style="color: #22c55e; font-size: 18px; margin-right: 12px;">✅</span>
                        <span style="color: #374151; font-size: 14px;">Sektörünüze özel pazar analizi</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color: #22c55e; font-size: 18px; margin-right: 12px;">✅</span>
                        <span style="color: #374151; font-size: 14px;">Rakip firmaların ihracat verileri</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color: #22c55e; font-size: 18px; margin-right: 12px;">✅</span>
                        <span style="color: #374151; font-size: 14px;">Hedef ülkelerdeki alıcı profilleri</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color: #22c55e; font-size: 18px; margin-right: 12px;">✅</span>
                        <span style="color: #374151; font-size: 14px;">Size özel lead generation stratejisi</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color: #22c55e; font-size: 18px; margin-right: 12px;">✅</span>
                        <span style="color: #374151; font-size: 14px;">İlk 5 nitelikli lead listesi</span>
                    </div>
                </div>
            </div>
            
            <!-- Contact Info -->
            <div style="border: 2px solid #3b82f6; padding: 25px; border-radius: 12px; text-align: center;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">
                    💬 Sorularınız mı var?
                </h3>
                <p style="color: #6b7280; margin: 0 0 20px 0; line-height: 1.5;">
                    Süreç hakkında merak ettiklerinizi sorabilirsiniz
                </p>
                <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <a href="tel:+905XXXXXXXXX" style="display: inline-flex; align-items: center; background-color: #3b82f6; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 500;">
                        📞 Bizi Arayın
                    </a>
                    <a href="https://wa.me/905XXXXXXXXX" style="display: inline-flex; align-items: center; background-color: #22c55e; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 500;">
                        💬 WhatsApp
                    </a>
                </div>
            </div>
            
            <!-- Next Steps -->
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-top: 30px; border-radius: 4px;">
                <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">
                    🎯 Sonraki Adım
                </h4>
                <p style="color: #92400e; margin: 0; line-height: 1.5;">
                    72 saat içinde strateji dosyanız <strong>${formData.email}</strong> adresine gönderilecek. 
                    Ardından bir görüşme ayarlayarak detayları konuşabiliriz.
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1a2b4c; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">
                TalepGetir.com
            </h3>
            <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 14px;">
                Türk ihracatçılarının global pazarlardaki gücü
            </p>
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px;">
                Topkapı Litros Yolu, Maltepe, Litros Çıkmazı No:5, 34010 Zeytinburnu/İstanbul
            </p>
            <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 12px;">
                E-posta: salih@talepgetir.com | Telefon: +90 532 663 83 79
            </p>
            <p style="color: #64748b; margin: 0; font-size: 12px;">
                Bu e-posta ${new Date().toLocaleString('tr-TR')} tarihinde gönderilmiştir.
            </p>
            
            <!-- Social Links -->
            <div style="margin-top: 20px;">
                <a href="#" style="color: #94a3b8; text-decoration: none; margin: 0 10px; font-size: 12px;">
                    LinkedIn
                </a>
                <a href="#" style="color: #94a3b8; text-decoration: none; margin: 0 10px; font-size: 12px;">
                    Instagram
                </a>
                <a href="#" style="color: #94a3b8; text-decoration: none; margin: 0 10px; font-size: 12px;">
                    Twitter
                </a>
            </div>
        </div>
    </div>
</body>
</html>`

  const text = `
Tebrikler ${formData.name}!

Strateji dosyanız hazırlanıyor - ${formData.company} için özel olarak.

SÜRECİMİZ:

1. ✅ Başvuru Alındı (Şimdi)
   Bilgilerinizi aldık ve analiz sürecini başlattık

2. Pazar Araştırması (24 saat içinde)
   Sektörünüz ve hedef ülkeleriniz için detaylı analiz yapıyoruz

3. Lead Araştırması (48 saat içinde)
   Size uygun ilk 5 nitelikli lead'i buluyoruz

4. Strateji Dosyası Teslimi (72 saat içinde)
   Tüm analizleri içeren özel strateji dosyanızı e-posta ile gönderiyoruz

STRATEJİ DOSYANIZDA NELER OLACAK:
✅ Sektörünüze özel pazar analizi
✅ Rakip firmaların ihracat verileri
✅ Hedef ülkelerdeki alıcı profilleri
✅ Size özel lead generation stratejisi
✅ İlk 5 nitelikli lead listesi

SONRAKI ADIM:
72 saat içinde strateji dosyanız ${formData.email} adresine gönderilecek.

Sorularınız için:
📞 Telefon: +90 532 663 83 79
💬 WhatsApp: wa.me/905326638379
📧 E-posta: salih@talepgetir.com

TalepGetir.com - Türk ihracatçılarının global pazarlardaki gücü
Topkapı Litros Yolu, Maltepe, Litros Çıkmazı No:5, 34010 Zeytinburnu/İstanbul
Gönderim: ${new Date().toLocaleString('tr-TR')}
  `

  return { subject, html, text }
}
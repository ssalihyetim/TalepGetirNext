import type { Metadata } from 'next'
import { Inter, Poppins, Lexend } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'TalepGetir - Her Ay En Az 5 Garantili İhracat Talebi',
  description: 'Rakip analizi ve HS kodu araştırmasıyla tespit edilmiş, gerçek alıcı firmalardan oluşan hedeflenmiş lead listesi ile satışlarınızı büyütün.',
  keywords: 'ihracat, lead generation, satış, talep, b2b, türkiye',
  authors: [{ name: 'TalepGetir' }],
  creator: 'TalepGetir',
  publisher: 'TalepGetir',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talepgetir.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TalepGetir - Her Ay En Az 5 Garantili İhracat Talebi',
    description: 'Rakip analizi ve HS kodu araştırmasıyla tespit edilmiş, gerçek alıcı firmalardan oluşan hedeflenmiş lead listesi ile satışlarınızı büyütün.',
    url: 'https://talepgetir.com',
    siteName: 'TalepGetir',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalepGetir - Her Ay En Az 5 Garantili İhracat Talebi',
    description: 'Rakip analizi ve HS kodu araştırmasıyla tespit edilmiş, gerçek alıcı firmalardan oluşan hedeflenmiş lead listesi ile satışlarınızı büyütün.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${lexend.variable} font-sans`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
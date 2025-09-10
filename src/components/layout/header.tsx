'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  showNavigation?: boolean
}

export function Header({ showNavigation = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905xxxxxxxxx'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo1.png" 
              alt="TalepGetir Logo" 
              width={120} 
              height={120}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              priority
            />
          </Link>

          {/* Navigation & Contact */}
          {showNavigation && (
            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/#hizmetlerimiz" className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors">
                  HİZMETLERİMİZ
                </Link>
                <Link href="/#nasil-calisir" className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors">
                  NASIL ÇALIŞIR
                </Link>
                <Link href="/#iletisim" className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors">
                  İLETİŞİM
                </Link>
              </nav>

              {/* Contact Buttons */}
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  
                  <a href="tel:+905xxxxxxxxx">
                    <Button size="sm" className="bg-brand-blue hover:bg-brand-charcoal text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Hemen Ara
                    </Button>
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>

                {/* Mobile Contact (for smaller screens) */}
                <div className="flex md:hidden lg:hidden space-x-2">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </a>
                  
                  <a href="tel:+905xxxxxxxxx">
                    <Button size="sm" className="bg-brand-blue hover:bg-brand-charcoal text-white">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && showNavigation && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/#hizmetlerimiz" 
                className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HİZMETLERİMİZ
              </Link>
              <Link 
                href="/#nasil-calisir" 
                className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                NASIL ÇALIŞIR
              </Link>
              <Link 
                href="/#iletisim" 
                className="text-brand-blue hover:text-brand-charcoal font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                İLETİŞİM
              </Link>
              
              {/* Mobile Contact Buttons in Menu */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full text-green-600 border-green-200 hover:bg-green-50">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  
                  <a href="tel:+905xxxxxxxxx">
                    <Button className="w-full bg-brand-blue hover:bg-brand-charcoal text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Hemen Ara
                    </Button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
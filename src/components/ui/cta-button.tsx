import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface CtaButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'default' | 'lg' | 'xl' | 'xxl'
  variant?: 'primary' | 'secondary' | 'gradient'
  className?: string
  icon?: React.ReactNode
  animated?: boolean
}

export function CtaButton({ 
  children, 
  href, 
  onClick, 
  size = 'xl', 
  variant = 'primary',
  className,
  icon,
  animated = true
}: CtaButtonProps) {
  const baseStyles = cn(
    "relative overflow-hidden font-display font-semibold transition-all duration-300 transform",
    animated && "hover:scale-105 hover:shadow-xl group",
    {
      'bg-gradient-to-r from-brand-blue via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white shadow-lg': variant === 'primary',
      'bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-700 text-white shadow-lg': variant === 'secondary',
      'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white shadow-lg animate-gradient bg-[length:200%_200%]': variant === 'gradient',
    },
    {
      'px-8 py-4 text-base': size === 'default',
      'px-10 py-6 text-lg': size === 'lg', 
      'px-12 py-8 text-xl': size === 'xl',
      'px-16 py-12 text-2xl': size === 'xxl',
    },
    className
  )

  const content = (
    <>
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
      
      <span className="relative z-10 flex items-center justify-center gap-3">
        {icon && <span className={animated ? "group-hover:rotate-12 transition-transform duration-300" : ""}>{icon}</span>}
        <span>{children}</span>
        {animated && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </span>
      
      {animated && size === 'xl' && (
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
        </div>
      )}
    </>
  )

  const buttonSize = size === 'xl' || size === 'xxl' ? 'lg' : size

  if (href) {
    return (
      <Link href={href}>
        <Button className={baseStyles} size={buttonSize}>
          {content}
        </Button>
      </Link>
    )
  }

  return (
    <Button className={baseStyles} onClick={onClick} size={buttonSize}>
      {content}
    </Button>
  )
}
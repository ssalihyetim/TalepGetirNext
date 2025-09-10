"use client"

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  glowEffect?: boolean
}

export function EnhancedCard({ 
  children, 
  className, 
  hoverScale = 1.05,
  glowEffect = true 
}: EnhancedCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        y: -5
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={cn(
        "group cursor-pointer",
        glowEffect && "hover:shadow-2xl hover:shadow-brand-blue/10",
        className
      )}
    >
      <Card className={cn(
        "h-full transition-all duration-300 border-2 border-transparent",
        "hover:border-brand-blue/20 hover:bg-white/80",
        "relative overflow-hidden"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}
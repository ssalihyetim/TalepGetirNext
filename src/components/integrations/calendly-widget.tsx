"use client"

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
}

export function CalendlyWidget({ url = "https://calendly.com/your-username/strategy-meeting" }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="calendly-inline-widget min-h-[600px] w-full">
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
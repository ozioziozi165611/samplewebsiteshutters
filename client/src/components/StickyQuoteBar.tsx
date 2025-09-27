import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Shield, Clock, X } from 'lucide-react'

export default function StickyQuoteBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-2xl border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Trust signals */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="opacity-90">Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="opacity-90">2-Week Lead Time</span>
            </div>
          </div>

          {/* Center - Main CTA */}
          <div className="flex items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-semibold">Ready to Transform Your Home?</div>
              <div className="text-sm opacity-90 hidden sm:block">Free consultation • No obligation</div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => console.log('Phone call initiated')}
                data-testid="button-sticky-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Call </span>(555) 123-4567
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => console.log('Free quote clicked')}
                data-testid="button-sticky-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Right side - Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsVisible(false)
              console.log('Sticky bar dismissed')
            }}
            className="text-primary-foreground hover:bg-primary-foreground/10 flex-shrink-0"
            data-testid="button-dismiss-sticky"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Privacy note */}
      <div className="bg-primary-foreground/10 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-center opacity-75">
            Your privacy is protected. We never share your information and respond within 2 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
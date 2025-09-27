import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log('Mobile menu toggled')
  }

  const navItems = [
    { name: 'Home', href: '#home', section: 'hero' },
    { name: 'Showcase', href: '#showcase', section: 'showcase' },
    { name: 'Gallery', href: '#gallery', section: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', section: 'testimonials' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ]

  const handleNavClick = (item: typeof navItems[0]) => {
    console.log(`${item.name} nav clicked`)
    // Smooth scroll to section
    const element = document.querySelector(`#${item.section}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20 shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-primary-foreground" 
                fill="currentColor"
                data-testid="logo-icon"
              >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                <path d="M1 4h22v16H1V4zm2 2v12h18V6H3z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary">Elite Shutters Australia</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover-elevate"
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button 
              data-testid="button-nav-quote"
              onClick={() => {
                console.log('Nav quote clicked')
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 bg-background/98 backdrop-blur-lg border-t border-accent/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors hover-elevate w-full text-left"
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-4">
              <Button 
                className="w-full"
                data-testid="button-mobile-quote"
                onClick={() => {
                  console.log('Mobile quote clicked')
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsOpen(false)
                }}
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
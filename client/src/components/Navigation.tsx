import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log('Mobile menu toggled')
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    console.log('Theme toggled')
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Elite Shutters</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover-elevate"
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                  onClick={() => console.log(`${item.name} nav clicked`)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              data-testid="button-nav-quote"
              onClick={() => console.log('Nav quote clicked')}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-mobile-theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
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
          <div className="px-2 pt-2 pb-3 bg-white dark:bg-background border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors hover-elevate"
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
                onClick={() => {
                  console.log(`Mobile ${item.name} clicked`)
                  setIsOpen(false)
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <Button 
                className="w-full"
                data-testid="button-mobile-quote"
                onClick={() => console.log('Mobile quote clicked')}
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
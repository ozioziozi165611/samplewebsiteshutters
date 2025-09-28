import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import heroImage1 from '@assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png'
import heroImage2 from '@assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png'
import heroImage3 from '@assets/generated_images/Office_with_plantation_shutters_909ff327.png'

const heroImages = [
  {
    src: heroImage1,
    title: "Premium Plantation Shutters",
    subtitle: "Transform your Aussie home with elegant, custom-fitted shutters"
  },
  {
    src: heroImage2,
    title: "Custom Timber Blinds", 
    subtitle: "Natural warmth and perfect light control for every room"
  },
  {
    src: heroImage3,
    title: "Expert Installation",
    subtitle: "Professional craftsmanship across Australia - perfect fit guaranteed"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-scroll functionality for cinematic experience
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000) // Change slide every 4 seconds for cinematic flow

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    console.log('Next slide triggered')
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    console.log('Previous slide triggered')
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0 scale-100' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full scale-105' 
                : 'opacity-0 translate-x-full scale-105'
          }`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-medium opacity-90 px-2">
            {heroImages[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-white/90 text-black hover:bg-white border-2 border-white/20 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8"
              data-testid="button-get-quote"
              onClick={() => {
                console.log('Get Quote clicked')
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Free Quote
            </Button>
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8"
                data-testid="button-view-gallery"
                onClick={() => console.log('View Gallery clicked')}
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-colors"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-colors"
        data-testid="button-hero-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            data-testid={`button-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  )
}
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Pause } from 'lucide-react'
import heroImage1 from '@assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png'
import heroImage2 from '@assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png'
import heroImage3 from '@assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png'

const showcaseItems = [
  {
    id: 1,
    overline: "PLANTATION ELEGANCE",
    headline: "Timeless Sophistication",
    description: "Hand-crafted plantation shutters that seamlessly blend traditional craftsmanship with contemporary living. Each piece is meticulously designed to enhance your home's architectural character while providing unparalleled light control.",
    image: heroImage1,
    swatches: ["Classic White", "Natural Wood", "Espresso"],
    reverse: false
  },
  {
    id: 2,
    overline: "WARM WOOD COLLECTION",
    headline: "Natural Beauty, Refined",
    description: "Premium wooden blinds that bring the warmth of nature indoors. Sustainably sourced hardwood meets precision engineering to create window treatments that age beautifully and perform flawlessly for decades.",
    image: heroImage2,
    swatches: ["Honey Oak", "Walnut", "Bamboo"],
    reverse: true
  },
  {
    id: 3,
    overline: "MODERN MINIMALISM",
    headline: "Clean Lines, Perfect Control",
    description: "Contemporary roller blinds designed for the modern lifestyle. Whisper-quiet motorization, smart home integration, and blackout precision meet sleek aesthetics for the ultimate in form and function.",
    image: heroImage3,
    swatches: ["Pure White", "Charcoal", "Linen"],
    reverse: false
  }
]

export default function EditorialShowcase() {
  const [currentShowcase, setCurrentShowcase] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Cinematic auto-scroll through showcases
  useEffect(() => {
    if (!isAutoScrolling) return

    const timer = setInterval(() => {
      setCurrentShowcase((prev) => (prev + 1) % showcaseItems.length)
    }, 8000) // 8 seconds per showcase for cinematic flow

    return () => clearInterval(timer)
  }, [isAutoScrolling])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Auto-Scroll Control */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm tracking-wider uppercase">
              Design Showcase
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Crafted for Australian Living
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Each collection represents years of refinement, bringing together the finest materials, 
              precision engineering, and timeless design principles for the Australian lifestyle.
            </p>
            
            {/* Cinematic Control */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="flex items-center gap-2"
                data-testid="button-toggle-auto-scroll"
              >
                {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isAutoScrolling ? 'Pause' : 'Play'} Showcase
              </Button>
              
              {/* Progress indicators */}
              <div className="flex gap-2">
                {showcaseItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentShowcase(index)
                      setIsAutoScrolling(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentShowcase ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    data-testid={`button-showcase-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Panels - Cinematic Display */}
        <div className="relative min-h-[600px] overflow-hidden">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`absolute inset-0 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out transform ${
                index === currentShowcase 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentShowcase 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center h-full ${item.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-8 ${item.reverse ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <Badge variant="outline" className="mb-4 text-xs tracking-widest uppercase font-medium">
                      {item.overline}
                    </Badge>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                      {item.headline}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Swatches */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                      Featured Finishes
                    </h4>
                    <div className="flex gap-3">
                      {item.swatches.map((swatch, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="px-3 py-1 text-sm hover-elevate cursor-pointer"
                          onClick={() => console.log(`${swatch} swatch selected`)}
                          data-testid={`swatch-${swatch.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {swatch}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group"
                    onClick={() => console.log(`View ${item.overline} project`)}
                    data-testid={`button-view-project-${item.id}`}
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Image */}
                <div className={`${item.reverse ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group hover-elevate overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Don't see your vision here?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Every project is unique. Our design consultants specialize in creating 
              bespoke solutions tailored to your exact specifications and aesthetic preferences.
            </p>
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => console.log('Custom design consultation clicked')}
              data-testid="button-custom-design"
            >
              Schedule Design Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
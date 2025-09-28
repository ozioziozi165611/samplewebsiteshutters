import { Link } from 'wouter'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'
import heroImage1 from '@assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png'
import heroImage2 from '@assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png'
import heroImage3 from '@assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png'

const categoryItems = [
  {
    id: 1,
    category: "Shutters",
    overline: "PLANTATION ELEGANCE",
    headline: "Timeless Sophistication",
    description: "Hand-crafted plantation shutters that seamlessly blend traditional craftsmanship with contemporary living. Perfect light control with architectural elegance.",
    image: heroImage1,
    features: ["Custom Fit", "Premium Materials", "Lifetime Warranty"]
  },
  {
    id: 2,
    category: "Venetian",
    overline: "WARM WOOD COLLECTION",
    headline: "Natural Beauty, Refined",
    description: "Premium wooden venetian blinds that bring warmth and sophistication to any space. Sustainably sourced hardwood meets precision engineering.",
    image: heroImage2,
    features: ["Natural Wood", "Easy Operation", "Multiple Stains"]
  },
  {
    id: 3,
    category: "Roller",
    overline: "MODERN MINIMALISM",
    headline: "Clean Lines, Perfect Control",
    description: "Contemporary roller blinds designed for the modern lifestyle. Whisper-quiet operation with smart home integration and blackout precision.",
    image: heroImage3,
    features: ["Motorized Options", "Smart Integration", "Blackout Fabrics"]
  },
  {
    id: 4,
    category: "Blinds",
    overline: "VERSATILE SOLUTIONS",
    headline: "Style Meets Function",
    description: "Our comprehensive range of blinds offers the perfect solution for every room and requirement. From classic to contemporary, find your ideal match.",
    image: heroImage1,
    features: ["Wide Selection", "Custom Colors", "Professional Install"]
  }
]

export default function EditorialShowcase() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-3 py-1.5 text-sm tracking-wider uppercase">
            Design Showcase
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">
            Crafted for Australian Living
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Each collection represents years of refinement, bringing together the finest materials, 
            precision engineering, and timeless design principles for the Australian lifestyle.
          </p>
        </div>

        {/* Categories Carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {categoryItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.headline}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4"
                        data-testid={`badge-category-${item.category.toLowerCase()}`}
                      >
                        {item.overline}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                        {item.headline}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={`/projects?category=${item.category}`}>
                        <Button 
                          className="w-full group"
                          data-testid={`button-view-projects-${item.category.toLowerCase()}`}
                        >
                          View {item.category} Projects
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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
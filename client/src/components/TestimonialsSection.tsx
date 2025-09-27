import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock testimonials data //todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Toorak, Melbourne",
    rating: 5,
    text: "The plantation shutters completely transformed our heritage home in Melbourne. The craftsmanship is extraordinary, and the attention to detail exceeded our expectations. Worth every dollar!",
    project: "Full Home Plantation Shutters"
  },
  {
    id: 2,
    name: "Michael O'Connor",
    location: "Bondi Beach, Sydney",
    rating: 5,
    text: "Absolutely brilliant service from start to finish. The design consultation was thorough, installation was flawless, and the motorised blinds work perfectly with our smart home setup.",
    project: "Motorised Roller Blinds"
  },
  {
    id: 3,
    name: "Jenny Williams",
    location: "South Yarra, Melbourne",
    rating: 5,
    text: "We've worked with several window treatment companies across Australia, but Elite Shutters is simply the best. The quality is unmatched, and their service feels truly premium.",
    project: "Custom Timber Blinds"
  }
]

const awards = [
  "Best of Houzz 2024",
  "Top Rated Local",
  "BBB A+ Rating",
  "WFCA Certified"
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials with smooth cinematic timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Slower for better reading experience

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    console.log('Next testimonial triggered')
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    console.log('Previous testimonial triggered')
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm tracking-wider uppercase">
            Client Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Trusted by Discerning Homeowners
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="hover-elevate bg-card/50 backdrop-blur-sm border border-accent/20">
            <CardContent className="p-12">
              <div className="text-center transition-all duration-500 ease-out">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 italic transform transition-all duration-300 ease-out">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {testimonials[currentTestimonial].project}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Awards & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-sm text-muted-foreground font-medium opacity-75 hover:opacity-100 transition-opacity"
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
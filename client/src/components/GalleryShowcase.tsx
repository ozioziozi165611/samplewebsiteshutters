import { Card, CardContent } from '@/components/ui/card'
import heroImage1 from '@assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png'
import heroImage2 from '@assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png'
import heroImage3 from '@assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png'
import heroImage4 from '@assets/generated_images/Office_with_plantation_shutters_909ff327.png'

// Mock gallery data //todo: remove mock functionality
const showcaseItems = [
  {
    image: heroImage1,
    title: "Modern Living Room",
    description: "Plantation shutters create the perfect balance of light and privacy"
  },
  {
    image: heroImage2,
    title: "Master Bedroom",
    description: "Wooden blinds add warmth and elegant light control"
  },
  {
    image: heroImage3,
    title: "Contemporary Kitchen",
    description: "Roller blinds provide clean lines and easy maintenance"
  },
  {
    image: heroImage4,
    title: "Home Office",
    description: "Professional shutters enhance productivity and style"
  }
]

export default function GalleryShowcase() {
  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Transformation Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the dramatic difference our window treatments make in real homes. From before to after, witness the transformative power of professional installation.
          </p>
        </div>


        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover-elevate">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">1000+</div>
            <div className="text-muted-foreground">Installations</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
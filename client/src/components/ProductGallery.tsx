import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from './ProductCard'
import heroImage1 from '@assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png'
import heroImage2 from '@assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png'
import heroImage3 from '@assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png'
import heroImage4 from '@assets/generated_images/Office_with_plantation_shutters_909ff327.png'
import productImage from '@assets/generated_images/Product_showcase_collection_6bcf96e8.png'

// Mock product data //todo: remove mock functionality
const products = [
  {
    id: 1,
    title: "Premium Plantation Shutters",
    image: heroImage1,
    price: "$299",
    rating: 5,
    reviews: 127,
    category: "Shutters",
    features: ["Custom hardwood construction", "UV protection coating", "Professional installation"],
    isPopular: true
  },
  {
    id: 2,
    title: "Custom Wooden Blinds",
    image: heroImage2,
    price: "$189",
    rating: 5,
    reviews: 89,
    category: "Blinds",
    features: ["Natural wood finish", "Easy tilt operation", "Child-safe cordless design"],
    isPopular: false
  },
  {
    id: 3,
    title: "Modern Roller Blinds",
    image: heroImage3,
    price: "$129",
    rating: 4,
    reviews: 156,
    category: "Blinds",
    features: ["Blackout fabric options", "Motorized operation", "Energy efficient"],
    isPopular: true
  },
  {
    id: 4,
    title: "Office Plantation Shutters",
    image: heroImage4,
    price: "$349",
    rating: 5,
    reviews: 73,
    category: "Shutters",
    features: ["Sound dampening", "Adjustable louvers", "Commercial grade"],
    isPopular: false
  },
  {
    id: 5,
    title: "Venetian Blinds Collection",
    image: productImage,
    price: "$159",
    rating: 4,
    reviews: 234,
    category: "Blinds",
    features: ["Aluminum construction", "Multiple colors", "Easy maintenance"],
    isPopular: false
  },
  {
    id: 6,
    title: "Custom Bay Window Shutters",
    image: heroImage1,
    price: "$459",
    rating: 5,
    reviews: 45,
    category: "Shutters",
    features: ["Perfect fit guarantee", "Premium materials", "Lifetime warranty"],
    isPopular: true
  }
]

const categories = ["All", "Shutters", "Blinds"]

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    console.log(`Category filter changed to: ${category}`)
  }

  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Product Collection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive range of premium shutters and blinds, each crafted with precision and designed to enhance your home's beauty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border bg-muted p-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              category={product.category}
              features={product.features}
              isPopular={product.isPopular}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Don't see what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-6">
            We specialize in custom solutions tailored to your exact specifications.
          </p>
          <Button 
            size="lg"
            data-testid="button-custom-consultation"
            onClick={() => console.log('Custom consultation clicked')}
          >
            Schedule Custom Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
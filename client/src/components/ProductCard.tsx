import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  title: string
  image: string
  price: string
  rating: number
  reviews: number
  category: string
  features: string[]
  isPopular?: boolean
}

export default function ProductCard({ 
  title, 
  image, 
  price, 
  rating, 
  reviews, 
  category, 
  features, 
  isPopular = false 
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    console.log(`${title} favorite toggled`)
  }

  return (
    <Card className="group hover-elevate overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isPopular && (
            <Badge className="bg-accent text-accent-foreground">
              Popular
            </Badge>
          )}
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {category}
          </Badge>
        </div>
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          data-testid={`button-favorite-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => console.log(`Learn more about ${title}`)}
          >
            Learn More
          </Button>
          <Button 
            className="flex-1"
            data-testid={`button-get-quote-${title.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => console.log(`Get quote for ${title}`)}
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
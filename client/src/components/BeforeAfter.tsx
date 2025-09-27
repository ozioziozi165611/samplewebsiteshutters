import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import defaultBeforeImage from '@assets/stock_images/plain_room_with_larg_bfc4eaf3.jpg'
import defaultAfterImage from '@assets/stock_images/elegant_room_with_be_a1961cb9.jpg'

interface BeforeAfterProps {
  title: string
  description: string
  beforeImage?: string
  afterImage?: string
}

export default function BeforeAfter({ 
  title, 
  description, 
  beforeImage: beforeImageProp = defaultBeforeImage, 
  afterImage: afterImageProp = defaultAfterImage 
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
    console.log('Before/after slider dragging started')
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    console.log('Before/after slider dragging stopped')
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <Card className="overflow-hidden hover-elevate">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div 
          ref={containerRef}
          className="relative h-96 overflow-hidden cursor-ew-resize select-none"
          data-testid="before-after-container"
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <img
              src={beforeImageProp}
              alt="Before installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
              Before
            </div>
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={afterImageProp}
              alt="After installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              After
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary shadow-xl z-10 cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full shadow-xl flex items-center justify-center cursor-ew-resize hover-elevate active-elevate-2 transition-all duration-200"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              data-testid="before-after-slider"
            >
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              <div className="w-0.5 h-6 bg-primary-foreground mx-1" />
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
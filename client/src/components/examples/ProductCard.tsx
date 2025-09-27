import ProductCard from '../ProductCard'
import productImage from '@assets/generated_images/Product_showcase_collection_6bcf96e8.png'

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        title="Premium Plantation Shutters"
        image={productImage}
        price="$299"
        rating={5}
        reviews={127}
        category="Shutters"
        features={[
          "Custom hardwood construction",
          "UV protection coating",
          "Professional installation included"
        ]}
        isPopular={true}
      />
    </div>
  )
}
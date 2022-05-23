import { ProductSectionProps } from "@/types/products"
import { concatenateArray } from "@/utils/stringUtils"

const ProductSection: React.FC<ProductSectionProps> = ({ values, title }) => {

  return (
    <div className="my-5">
      <h2 className="text-lg font-semibold text-gray-500">{title}</h2>
      <div className="flex gap-6 text-sm text-gray-800">
        { concatenateArray(values, ', ') }
      </div>
    </div>
  )
}

export default ProductSection

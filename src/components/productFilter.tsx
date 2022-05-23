import Checkbox from '@/components/checkbox'
import PriceRangeFilter from './priceRangeFilter'
import { PriceRangeFilterProps } from '@/types/priceRangeFilter'
import { InStockFilterProps } from '@/types/inStockFilter'

const ProductFilter: React.FC<PriceRangeFilterProps & InStockFilterProps> = ({ priceRange, handlePriceRange, inStock, handleInStock }) => {
  return (
    <div className="border shadow p-4 bg-white rounded-sm">
      <PriceRangeFilter priceRange={priceRange} handlePriceRange={handlePriceRange} />
      <hr className="my-6" />
      <Checkbox label="Display only in-stock" onChange={handleInStock} checked={inStock} />
    </div>
  )
}

export default ProductFilter

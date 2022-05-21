import InStockFilter from './inStockFilter'
import PriceRangeFilter from './priceRangeFilter'

export default function ProductFilter () {
  return (
    <div className="border shadow p-4 bg-white rounded-sm">
      <PriceRangeFilter />
      <hr className="my-6" />
      <InStockFilter />
    </div>
  )
}
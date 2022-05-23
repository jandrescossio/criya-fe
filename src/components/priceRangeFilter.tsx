import { PriceRangeFilterProps } from '@/types/priceRangeFilter'
import Button from './button'
import Input from './input'

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ priceRange, handlePriceRange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    handlePriceRange(name, parseFloat(value))
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-gray-700 text-sm font-semibold">Price Range</div>
      <Input label="Price from" type="number" placeholder="From" className="w-full" name="minPrice" onChange={handleChange} value={priceRange.minPrice} />
      <Input label="Price to" type="number" placeholder="To" className="w-full" name="maxPrice" onChange={handleChange} value={priceRange.maxPrice} />
    </div>
  )
}

export default PriceRangeFilter

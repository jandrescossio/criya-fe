import Button from './button'
import Input from './input'

export default function PriceRangeFilter () {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-gray-700 text-sm font-semibold">Price Range</div>
      <Input type="number" placeholder="From" className="w-full" />
      <Input type="number" placeholder="To" className="w-full" />
      <Button intent="primary">Apply</Button>
    </div>
  )
}
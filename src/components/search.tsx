import Input from './input'
import Button from './button'

export default function Search() {
  return (
    <div className="flex space-x-2 mb-3 w-full">
      <Input placeholder="Search products..." className="flex-1" type="text" />
      <Button intent="primary">Search</Button>
    </div>
  )
}
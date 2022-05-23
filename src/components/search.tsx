import Input from './input'
import Button from './button'
import { SearchProps } from '@/types/search'

const Search: React.FC<SearchProps> = ({ handleSearch, search, clear }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleSearch(e.currentTarget.value)
  }

  return (
    <div className="flex space-x-2 mb-3 w-full">
      <Input placeholder="Search products..." className="flex-1" type="text" onChange={handleChange} value={search} />
      <Button intent="warning" onClick={clear}>Clear</Button>
    </div>
  )
}

export default Search

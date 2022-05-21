import type { NextPage } from 'next'
import ProductCard from '@/components/productCard'
import Search from '@/components/search'
import ProductFilter from '@/components/productFilter'

const Home: NextPage = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="min-w-[280px]">
        <ProductFilter />
      </div>
      <div>
        <Search />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import ProductCard from '@/components/productCard'
import Search from '@/components/search'
import ProductFilter from '@/components/productFilter'
import Pagination from '@/components/pagination'
import { useProducts } from '@/hooks/useProducts'

const Home: NextPage = () => {
  const {
    products,
    next,
    prev,
    loading,
    error,
    page,
    last,
    first,
    handleSearch,
    search,
    clearSearch,
    handlePriceRange,
    priceRange,
    inStock,
    handleInStock
  } = useProducts()

  if (error)
    return <p>Error: {error.message}</p>

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="min-w-[280px]">
        <ProductFilter priceRange={priceRange} handlePriceRange={handlePriceRange} inStock={inStock} handleInStock={handleInStock} />
      </div>
      <div>
        <Search handleSearch={handleSearch} search={search} clear={clearSearch} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            !loading && products && products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
        {
          loading && <p>Loading...</p>
        }
        <Pagination currentPage={page} next={next} prev={prev} last={last} first={first} />
      </div>
    </div>
  )
}

export default Home

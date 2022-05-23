import { Pagination } from '@/types/pagination'
import { Product } from '@/types/products'
import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { productService } from '@/services/productService'

export function useProducts () {
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState<number>(0)
  const [lastPage, setLastPage] = useState<number>(0)
  const [search, setSearch] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [priceRange, setPriceRange] = useState<{ minPrice: number, maxPrice: number }>({ minPrice: 0, maxPrice: 0 })
  const [inStock, setInStock] = useState<boolean>(false)
  const timer: MutableRefObject<null | ReturnType<typeof setTimeout>> = useRef(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const pagination: Pagination = await productService.getProducts({ page, search: searchTerm, minPrice, maxPrice, inStock })
      setProducts(pagination.data)
      setTotal(pagination.total)
      setLastPage(pagination.last_page)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePriceRange = (name: string, value: number) => {
    const currentPriceRange = { ...priceRange, [name]: value }
    setPriceRange(currentPriceRange)

    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      if (currentPriceRange.maxPrice > currentPriceRange.minPrice) {
        setMaxPrice(currentPriceRange.maxPrice)
        setMinPrice(currentPriceRange.minPrice)
        setPage(1)
      }
    }, 500)
  }

  const handleInStock = () => setInStock(!inStock)

  const handleSearch = (search: string) => {
    setSearch(search)

    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      setSearchTerm(search)
      setPage(1)
    }, 500)
  }

  const prev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const next = (): void => {
    if (page < lastPage) {
      setPage(page => page + 1)
    }
  }

  const first = (): void => {
    setPage(1)
  }

  const last = (): void => {
    setPage(lastPage)
  }

  const clearSearch = (): void => {
    setSearch('')
    setSearchTerm('')
  }

  useEffect(() => {
    fetchData()
  }, [page, searchTerm, minPrice, maxPrice, inStock])

  return {
    products,
    loading,
    error,
    page,
    total,
    next,
    prev,
    last,
    first,
    handleSearch,
    search,
    clearSearch,
    handlePriceRange,
    priceRange,
    inStock,
    handleInStock
  }
}

import { useEffect, useState } from 'react'
import { Product } from '@/types/products'
import { productService } from '@/services/productService'

export function useProduct (id: number | string | undefined) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (id) {
          const product = await productService.getProduct(id)
          setProduct(product)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { product, loading, error }
}
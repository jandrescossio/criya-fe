import { apiConnection } from '@/utils/apiConnection'

export const productService = {
  getProducts: ({ page = 1, search = '', minPrice = 0, maxPrice = 0, inStock = false }) => {
    return apiConnection.get('/products', { params: { page, search, minPrice, maxPrice, inStock } })
      .then(response => response.data)
  },
  getProduct: (id: number | string | undefined) => {
    return apiConnection.get(`/products/${id}`)
      .then(response => response.data)
  }
}

import Button from '@/components/button'
import Card from '@/components/card'
import ProductSection from '@/components/productSection'
import { useProduct } from '@/hooks/useProduct'
import { currencyFormatter } from '@/utils/currencyUtils'
import { getStorageUrl } from '@/utils/storageUtils'
import { concatenateArray } from '@/utils/stringUtils'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Product = () => {
  const { id } = useRouter().query
  const { product, loading, error } = useProduct(id?.toString())

  if (error)
    return <p>Error!</p>

  if (loading)
    return <p>Loading...</p>

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl">
        {
          !loading && product && (
            <Card>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:min-w-[400px] bg-gray-100 border border-gray-200">
                  <Image
                    src={getStorageUrl(product.image)}
                    alt={product.name}
                    width={400}
                    height={400}
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <h1 className="text-2xl font-semibold text-gray-700">{product.name}</h1>
                    {
                      <label className="text-sm italic text-gray-500">{ product.in_stock ? 'In stock' : 'No available in stock' }</label>
                    }
                  </div>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <ProductSection title="Types" values={product.types} />
                  <ProductSection title="Designers" values={product.designers} />
                  <ProductSection title="Materials" values={product.materials} />
                  <ProductSection title="Vendors" values={product.vendors} />
                  <ProductSection title="Colors" values={product.colors} />
                  <ProductSection title="Retailer" values={[product.retailer]} />
                  <hr className="my-4" />
                  <div className="flex gap-3 justify-between">
                    <label className="bg-cyan-700 py-1 px-2 rounded text-lg text-cyan-50">{currencyFormatter(product.price, 'USD')}</label>
                    <Button intent="warning" href={product.url} target="__blank">Open in store</Button>
                  </div>

                </div>
              </div>
            </Card>
          )
        }
      </div>
    </div>
  )
}

export default Product
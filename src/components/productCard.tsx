import classNames from 'classnames'
import Button from '@/components/button'
import ImageLink from '@/components/imageLink'
import Link from 'next/link'
import { ProductCardProps } from '@/types/products'
import { concatenateArray, ellipsis } from '@/utils/stringUtils'
import { getStorageUrl } from '@/utils/storageUtils'
import { currencyFormatter } from '@/utils/currencyUtils'

const ProductCard: React.FC<ProductCardProps> = ({ product, className, ...rest }) => {

  return (
    <div className={classNames(className, 'flex flex-col rounded shadow bg-white overflow-hidden')} {...rest}>

      <ImageLink
        imageProps={{ height: 180, width: 350, objectFit: 'cover', quality: 100, src: getStorageUrl(product.image) }}
        linkProps={{ href: `/products/${product.id}` }}
        alt={product.name}
      />

      <div className="px-3 py-2.5 flex flex-col justify-between flex-1">
        <div className="mb-2">
          <Link href={`/products/${product.id}`}>
            <a className="font-semibold text-gray-800 block" title={product.name}>{ ellipsis(product.name, 40) }</a>
          </Link>
          <label className="text-gray-400 italic text-sm">{ concatenateArray(product.colors, ', ') }</label>
        </div>

        <p className="text-gray-500 text-sm mb-3" title={product.description}>{ ellipsis(product.description, 100) }</p>

        <div>
          <label className="bg-cyan-600 rounded py-1 px-2 text-xs text-cyan-50 font-semibold">{currencyFormatter(product.price, 'USD')}</label>
          <Button className="w-full mt-2" intent="warning" href={product.url} target="__blank">Open in store</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import Link from 'next/link'
import Image from 'next/image'
import { ImageLinkProps } from '@/types/imageLink'

const imageLink: React.FC<ImageLinkProps> = ({ linkProps, imageProps, alt }) => {
  return (
    <Link {...linkProps}>
      <a className="image-link">
        <Image {...imageProps} alt={alt} />
      </a>
    </Link>
  )
}

export default imageLink

import { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'

export interface ImageLinkProps {
  linkProps: LinkProps;
  imageProps: ImageProps;
  alt: string;
}

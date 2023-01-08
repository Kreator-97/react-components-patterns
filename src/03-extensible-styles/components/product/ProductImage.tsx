import { FC, useContext } from 'react'
import { ProductContext } from './context'

import noImage from '../../assets/no-image.jpg'
import styles from '../../styles/styles.module.css'

interface ProductImageProps {
  className ?: string;
  imgURL    ?: string;
  title     ?: string;
  styles    ?: React.CSSProperties;
}

export const ProductImage: FC<ProductImageProps> = ({ imgURL, title, className, styles: cssStyles }) => {

  const { product } = useContext(ProductContext)

  return (
    <img
      alt={ title || product.title }
      className={ styles.productImg + ` ${className}` }
      src={ imgURL ? imgURL : (product.imgURL || noImage) }
      style={ cssStyles }
    />
  )
}

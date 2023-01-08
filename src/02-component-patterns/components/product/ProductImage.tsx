import { FC, useContext } from 'react'
import { ProductContext } from './context'

import noImage from '../../assets/no-image.jpg'
import styles from '../../styles/styles.module.css'

interface ProductImageProps {
  title ?: string;
  imgURL?: string;
}

export const ProductImage: FC<ProductImageProps> = ({ imgURL, title }) => {

  const { product } = useContext(ProductContext)

  return (
    <img
      alt={ title || product.title }
      className={ styles.productImg }
      src={ imgURL ? imgURL : (product.imgURL || noImage) }
    />
  )
}

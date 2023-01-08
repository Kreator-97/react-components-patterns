import { FC, useContext } from 'react'

import styles from '../../styles/styles.module.css'
import { ProductContext } from './context'

interface Props {
  className?: string;
  title    ?: string;
}

export const ProductTitle: FC<Props> = ({ title, className = '' }) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={ styles.productDescription + ` ${className}` }>
      { title || product.title }
    </span>
  )
}

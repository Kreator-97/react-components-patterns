import { FC, useContext } from 'react'

import styles from '../../styles/styles.module.css'
import { ProductContext } from './context'

export const ProductTitle: FC<{ title?: string }> = ({ title }) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={ styles.productDescription }>{ title || product.title }</span>
  )
}

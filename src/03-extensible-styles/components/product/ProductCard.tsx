import { FC } from 'react'

import { Product} from '../../interfaces'
import { useProduct } from '../../hooks'
import { Provider } from './context'

import styles from '../../styles/styles.module.css'

interface Props {
  product   : Product;
  children ?: React.ReactNode;
  className?: string;
  styles   ?: React.CSSProperties;
}

export const ProductCard: FC<Props> = ({ product, children, className, styles: cssStyles }) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, product, increaseBy }}>
      <div
        style={ cssStyles }
        className={ styles.productCard + ` ${className}` }>
        {
          children
        }
      </div>
    </Provider>
  )
}

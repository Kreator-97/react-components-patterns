import { FC } from 'react'

import { Product} from '../../interfaces'
import { useProduct } from '../../hooks'
import { Provider } from './context'

import styles from '../../styles/styles.module.css'

interface Props {
  product  : Product;
  children?: React.ReactNode;
}

export const ProductCard: FC<Props> = ({ product, children }) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, product, increaseBy }}>
      <div className={ styles.productCard }>
        {
          children
        }
      </div>
    </Provider>
  )
}

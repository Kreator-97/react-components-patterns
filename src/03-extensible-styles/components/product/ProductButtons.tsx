import { FC, useContext } from 'react'
import { ProductContext } from './context'

import styles from '../../styles/styles.module.css'

export const ProductButtons: FC<{ className?: string }> = ({ className }) => {
  const { increaseBy, counter } = useContext(ProductContext)
  
  return (
    <div className={ styles.buttonsContainer + ` ${className}` }>
      <button
        className={ styles.buttonMinus }
        onClick={ () => increaseBy( -1 )}
      > - </button>

      <div className={ styles.countLabel }>{ counter }</div>

      <button
        onClick={ () => increaseBy( 1 )}
        className={ styles.buttonAdd}
      > + </button>
    </div>
  )
}

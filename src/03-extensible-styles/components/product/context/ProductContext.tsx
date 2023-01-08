import { createContext } from 'react'
import { Product } from '../../../interfaces'

interface ContextProps {
  counter   : number;
  product   : Product;
  increaseBy: (factor: number) => void;
}

export const ProductContext = createContext<ContextProps>({} as ContextProps)
export const { Provider } = ProductContext



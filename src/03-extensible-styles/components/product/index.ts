
import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

interface ComponentProps {
  Image   : typeof ProductImage;
  Title   : typeof ProductTitle;
  Buttons : typeof ProductButtons;
}

// assign the other components to Product component
export const ProductCard: typeof ProductCardHOC & ComponentProps = Object.assign(ProductCardHOC, {
  Title   : ProductTitle,
  Buttons : ProductButtons,
  Image   : ProductImage,
})

export {
  ProductButtons,
  ProductImage,
  ProductTitle
}

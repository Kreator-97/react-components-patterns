import { ProductCard } from '../components'
import { Product } from '../interfaces'

import coffeIMG from '../assets/coffee-mug.png'

const product: Product = {
  id    : '1',
  title : 'Coffe Mug - Card',
  imgURL: coffeIMG,
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1 className="title">Shopping Page</h1>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard
          product={product}
        >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces'

import coffeIMG from '../assets/coffee-mug.png'

const product: Product = {
  id    : '1',
  imgURL: coffeIMG,
  title : 'Coffe Mug - Card',
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

        <ProductCard
          product={product}
          styles={{ backgroundColor: 'rebeccapurple' }}
        >
          <ProductImage className='custom-image'/>
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  )
}

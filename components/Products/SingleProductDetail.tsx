import { productDetailType } from '@/Types'
import React from 'react'

export default function SingleProductDetail({ product }: productDetailType) {
  console.log(product)
  return (
    <div className='flex'>
      <div className=' w-[100px] sm:w-[150px] relative'>
        <img
          src={`${product?.image}`}
          alt={`${product?.name}`}
          className='object-contain'
        />
      </div>
      <div>
        <div>{product?.description}</div>
        <div>Visit the {product?.name} store</div>
        <div>{product?.rating}</div>
      </div>
    </div>
  )
}

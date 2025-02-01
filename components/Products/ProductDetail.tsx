import { productDetailType } from '@/Types'
import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'
export default function ProductDetail({ product }: productDetailType) {
  //   console.log(product)
  return (
    <div className='flex relative gap-2'>
      <Link
        href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
      >
        <div className='relative h-[110px] w-[110px]'>
          <img
            src={`${product?.image}`}
            alt={`${product?.name}`}
            className='object-center h-[120px] w-[150px]'
          />
        </div>
      </Link>
      <div className='flex flex-col gap-1'>
        <div className='text-[12px] tracking-tighter hover:text-orange-700'>
          {product?.description}
        </div>
        <div className='text-[8px] font-[300] tracking-wide flex flex-col gap-1'>
          <div>
            <div>{product?.rating}</div>
            <div className='text-gray-800'>bought in the last month.</div>
          </div>

          <div className='text-amazon-blue font-bold text-[8px]'>
            {product?.name}
          </div>
          <div>
            <Button
              btnType='button'
              title='See Options'
              btnStyle='border py-[3px] px-2 rounded-full hover:bg-slate-50'
            />
          </div>
          <div>
            <div className='text-gray-800'>No featured offers available</div>
            <div>${product?.price}</div>
          </div>
          <div>Color</div>
        </div>
      </div>
    </div>
  )
}

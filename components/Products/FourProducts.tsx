import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FourProductsProps } from '@/Types'

export default function FourProducts(product: FourProductsProps) {
  return (
    <div>
      {product.product.images.length > 1 ? (
        <div className='bg-white min-w-[180px] max-w-[350px] h-[350px] flex flex-col items-center justify-center p-4'>
          <div className='w-full pt-2 min-h-[50px]'>
            <h3 className='font-bold text-[16px] mb-4'>
              {product.product.title}
            </h3>
          </div>
          <div className='w-full grid grid-cols-2 flex-1 gap-2'>
            {/* Dynamic Links */}
            {product.product.category.map((name, index) => (
              <div key={index}>
                <Link href={`/category/${encodeURIComponent(name)}`}>
                  {' '}
                  {/* Use only one name from the array */}
                  <div className='min-w-[80px] max-w-[110px] min-h-[90px] max-h-[100px] relative'>
                    <Image
                      src={`${product.product.images[index]}`}
                      alt={name}
                      fill
                      className='object-contain'
                      sizes='(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw'
                    />
                  </div>
                  <div className='fourproduct-name'>
                    {product.product.name[index]}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='w-full text-[12px] text-blue-500 '>
            <Link href={`${product.product.more}`}>{product.product.link}</Link>
          </div>
        </div>
      ) : (
        <div className='bg-white min-w-[180px] max-w-[350px] h-[350px] flex flex-col items-center justify-center p-4'>
          <div className='w-full pt-2 min-h-[50px]'>
            <h3 className='font-semibold text-[16px] mb-4 '>
              {product.product.title}
            </h3>
          </div>

          <div className='w-full'>
            <Link
              href={`/category/${encodeURIComponent(
                product.product.category[0]
              )}`}
              className='w-full'
            >
              {' '}
              {/* Use the first name from the array */}
              <div className='relative w-full h-[250px]'>
                <Image
                  src={`${product.product.images[0]}`}
                  alt='product'
                  fill
                  className=''
                />
              </div>
            </Link>
          </div>

          <div className='w-full text-[12px] text-blue-500 pt-2'>
            <Link href={`/category/${product.product.more}`}>
              {product.product.link}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

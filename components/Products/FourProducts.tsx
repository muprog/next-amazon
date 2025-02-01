import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FourProductsProps } from '@/Types'

export default function FourProducts(product: FourProductsProps) {
  return (
    <div>
      {product.product.images.length > 1 ? (
        <div className='bg-white min-w-[150px] max-w-[250px] h-[250px] flex flex-col items-center justify-center p-4'>
          <div className='w-full pt-2'>
            <h3 className='font-semibold text-[13px] mb-4'>
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
                  <div className='min-w-[60px] max-w-[70px] min-h-[50px] max-h-[60px] relative'>
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
          <div className='w-full text-[7px] text-blue-500 '>
            <Link href={`${product.product.more}`}>{product.product.link}</Link>
          </div>
        </div>
      ) : (
        <div className='bg-white min-w-[150px] max-w-[200px] h-[250px] flex flex-col items-center justify-center p-4'>
          <div>
            <h3 className='font-semibold text-[13px] mb-4'>
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
              <div className='relative w-full h-[160px]'>
                <Image
                  src={`${product.product.images[0]}`}
                  alt='product'
                  fill
                  className=''
                />
              </div>
            </Link>
          </div>

          <div className='w-full text-[7px] text-blue-500 pt-2'>
            <Link href={`/category/${product.product.more}`}>
              {product.product.link}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'
import Link from 'next/link'
import { ProductDetailProps } from '@/Types'
import React, { useState, useRef, useCallback } from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

interface CartDataProps {
  product: ProductDetailProps
  handleCartChange: () => void
}

export default function SingleProductDetail({
  product,
  handleCartChange,
}: CartDataProps) {
  const [position, setPosition] = useState({ x: 0, y: 0, show: false })
  const imageRef = useRef<HTMLDivElement>(null)
  const zoomFactor = 3
  const zoomBoxSize = 30

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xPercent = Math.round((x / rect.width) * 100)
    const yPercent = Math.round((y / rect.height) * 100)

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      setPosition({ x: 0, y: 0, show: false })
      return
    }

    setPosition({ x: xPercent, y: yPercent, show: true })
  }, [])

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!imageRef.current) return

      const rect = imageRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const xPercent = Math.round((x / rect.width) * 100)
      const yPercent = Math.round((y / rect.height) * 100)

      setPosition({ x: xPercent, y: yPercent, show: true })
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0, show: false })
  }, [])

  const [productImage, setProductImage] = useState(
    product?.image ? product.image[0] : ''
  )
  const [indexOfSmallImages, setIndextOfSmallImages] = useState(0)

  const handleSmallImageClick = (image: string, index: number) => {
    setProductImage(image)
    setIndextOfSmallImages(index)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Image Gallery Section */}
        <div className='flex gap-4 lg:w-2/3'>
          {/* Thumbnail Images */}
          <div className='flex flex-col gap-3 w-20 flex-shrink-0'>
            {product?.image &&
              product.image?.map((image, index) => (
                <div
                  onClick={() => handleSmallImageClick(image, index)}
                  className='cursor-pointer group transition-all duration-200'
                  key={index}
                >
                  <div
                    className={`relative w-20 h-20 rounded-lg border-2 transition-all duration-200 ${
                      index === indexOfSmallImages
                        ? 'border-amazon-blue shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image || ''}
                      alt={`${product?.name} - View ${index + 1}`}
                      fill
                      className='object-cover rounded-md'
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Main Product Image */}
          <div className='flex-1 flex justify-center'>
            <div
              ref={imageRef}
              className='relative w-full max-w-md h-96 sm:h-[500px] overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200'
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={productImage}
                alt={`${product?.name}`}
                fill
                className='object-contain'
                priority
              />

              {/* Hover Indicator */}
              {position.show && (
                <div
                  className='absolute rounded-full bg-gray-300 opacity-30 pointer-events-none transition-all duration-150'
                  style={{
                    width: `${zoomBoxSize}px`,
                    height: `${zoomBoxSize}px`,
                    left: `calc(${position.x}% - ${zoomBoxSize / 2}px)`,
                    top: `calc(${position.y}% - ${zoomBoxSize / 2}px)`,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className='lg:w-1/3 space-y-6'>
          {/* Product Details with Zoom - For Small Desktop (md to lg) */}
          <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
            <div className='p-6 relative min-h-[400px]'>
              {position.show ? (
                <div
                  className='w-full h-full min-h-[400px] bg-white rounded-lg'
                  style={{
                    backgroundImage: `url('${productImage}')`,
                    backgroundSize: `${zoomFactor * 100}%`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                    backgroundRepeat: 'no-repeat',
                    pointerEvents: 'none',
                  }}
                />
              ) : (
                <div className='space-y-6'>
                  {/* Product Title */}
                  <div>
                    <h1 className='text-2xl font-semibold text-gray-900 leading-tight'>
                      {product?.name}
                    </h1>
                  </div>

                  {/* Product Description */}
                  <div>
                    <h2 className='text-lg font-medium text-gray-900 mb-3'>
                      Product Description
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      {product?.description}
                    </p>
                  </div>

                  {/* Product Links */}
                  <div className='space-y-2'>
                    <div className='text-sm'>
                      <Link
                        href='#'
                        className='text-amazon-blue hover:text-amazon-blue-dark transition-colors duration-200'
                      >
                        Visit the {product?.name} store
                      </Link>
                    </div>
                    <div className='text-sm text-gray-600'>
                      {product?.rating}
                    </div>
                    <div className='text-sm'>
                      <Link
                        href='#'
                        className='text-amazon-blue hover:text-amazon-blue-dark transition-colors duration-200'
                      >
                        Search this page
                      </Link>
                    </div>
                    <div className='text-sm text-gray-600'>
                      1 sustainability feature
                    </div>
                  </div>

                  <hr className='border-gray-200' />

                  {/* Product Specifications */}
                  <div className='space-y-4'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      Product Details
                    </h3>
                    <div className='space-y-3'>
                      {product?.brand && (
                        <div className='flex justify-between items-start'>
                          <span className='font-medium text-gray-700'>
                            Brand
                          </span>
                          <span className='text-gray-900 text-right'>
                            {product?.brand}
                          </span>
                        </div>
                      )}
                      {product?.warranty && (
                        <div className='flex justify-between items-start'>
                          <span className='font-medium text-gray-700'>
                            Warranty
                          </span>
                          <span className='text-gray-900 text-right'>
                            {product?.warranty}
                          </span>
                        </div>
                      )}
                      {product?.features && (
                        <div className='space-y-2'>
                          <span className='font-medium text-gray-700 block'>
                            Features
                          </span>
                          <div className='text-gray-900'>
                            {product.features.map((feature, index) => (
                              <span
                                key={index}
                                className='inline-block mr-2 mb-1'
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Large Desktop Zoom Area */}
          <div className='hidden lg:block relative overflow-hidden w-full h-96 rounded-lg border border-gray-200 shadow-sm'>
            {position.show && (
              <div
                className='absolute w-full h-full'
                style={{
                  backgroundImage: `url('${productImage}')`,
                  backgroundSize: `${zoomFactor * 100}%`,
                  backgroundPosition: `${position.x}% ${position.y}%`,
                  backgroundRepeat: 'no-repeat',
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>

          {/* Purchase Section */}
          <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6 space-y-6'>
            {/* Pricing Information */}
            <div className='border-b border-gray-200 pb-4'>
              <div className='text-sm text-gray-600 mb-2'>
                No featured offers available
              </div>
              <Link
                href='#'
                className='text-amazon-blue hover:text-amazon-blue-dark text-sm font-medium transition-colors duration-200'
              >
                Learn more
              </Link>
            </div>

            {/* Purchase Options */}
            <div className='space-y-4'>
              <div className='text-sm text-amazon-blue font-medium'>
                Deliver to Ethiopia
              </div>

              <Button
                btnStyle='w-full bg-amazon-yellow hover:bg-amazon-yellow-dark text-black font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md'
                title='Add to Cart'
                btnType='button'
                handleClick={handleCartChange}
              />

              <hr className='border-gray-200' />

              <Link href={'/login'}>
                <Button
                  btnStyle='w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg transition-all duration-200 bg-white hover:bg-gray-50'
                  title='Add to List'
                  btnType='button'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import { ProductDetailProps } from '@/Types'
import React, { useState, useRef } from 'react'
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
  const zoomFactor = 3 // Zoom factor for high resolution
  const zoomBoxSize = 30 // Hover indicator size

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    // Convert to percentage (0-100%)
    const xPercent = (x / width) * 100
    const yPercent = (y / height) * 100

    // Ensure boundaries
    if (x < 0 || x > width || y < 0 || y > height) {
      setPosition({ ...position, show: false })
      return
    }

    setPosition({ x: xPercent, y: yPercent, show: true })
  }

  const handleMouseLeave = () => {
    setPosition({ ...position, show: false })
  }

  const [productImage, setProductImage] = useState(
    product?.image ? product.image[0] : ''
  )
  const [indexOfSmallImages, setIndextOfSmallImages] = useState(0)
  const handleMouseMoveForSmallImage = (image: string, index: number) => {
    setProductImage(image)
    setIndextOfSmallImages(index)
  }

  return (
    <div className='flex gap-2 p-2'>
      {/* Product Image (Always Same Size) */}
      <div className='sticky top-2 h-full w-[50px] flex flex-col gap-1'>
        {product?.image &&
          product.image?.map((image, index) => (
            <div
              onMouseMove={() => handleMouseMoveForSmallImage(image, index)}
              className='cursor-pointer'
              key={product.image?.indexOf(image)}
            >
              <Image
                src={`${image ? image : ''}`}
                alt={`${product?.name}`}
                width={50}
                height={50}
                className={`w-[50px] h-[50px] rounded-lg border ${
                  product.image?.indexOf(image) === indexOfSmallImages
                    ? 'border-amazon-blue border-2'
                    : ''
                }`}
              />
            </div>
          ))}
      </div>
      <div
        ref={imageRef}
        className='sticky top-2 w-[150px] h-[200px] sm:w-[200px] sm:h-[250px] overflow-hidden'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`${productImage}`}
          alt={`${product?.name}`}
          width={150}
          height={200}
          className=' w-full h-full'
        />

        {/* Transparent Hover Indicator */}
        {position.show && (
          <div
            className='absolute rounded-full bg-gray-300 opacity-30'
            style={{
              width: `${zoomBoxSize}px`,
              height: `${zoomBoxSize}px`,
              left: `calc(${position.x}% - ${zoomBoxSize / 2}px)`,
              top: `calc(${position.y}% - ${zoomBoxSize / 2}px)`,
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Fixed Zoomed Image Position (Covers the Same Area Always) */}
      <div
        className='relative overflow-hidden flex-1 h-screen'
        // style={{
        //   width: `${zoomContainerWidth}px`,
        //   height: `${zoomContainerHeight}px`,
        // }}
      >
        {position.show ? (
          <div
            className='absolute w-full h-full'
            style={{
              backgroundImage: `url('${productImage}')`,
              backgroundSize: `${zoomFactor * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              pointerEvents: 'none',
            }}
          />
        ) : (
          // Show Product Details When Not Hovering
          <div className='p-2 font-amazon text-[28px] tracking-tight'>
            <div className=''>{product?.description}</div>
            <div className='text-[13px] text-amazon-blue tracking-normal'>
              <div>Visit the {product?.name} store</div>
              <div className='text-black'>{product?.rating}</div>
              <div>Search this page</div>
              <div className='text-black'>1 sustainability feature</div>
            </div>
            <hr />
            <div className='tracking-normal'>
              {/* <div>Color -----</div> */}
              <div className='text-[13px]'>
                <table>
                  <tbody>
                    {product?.brand && (
                      <tr>
                        <td className='font-bold'>Brand</td>
                        <td className='text-nowrap'>{product?.brand}</td>
                      </tr>
                    )}
                    {product?.warranty && (
                      <tr>
                        <td className='font-bold'>Warranty</td>
                        <td className='text-nowrap'>{product?.warranty}</td>
                      </tr>
                    )}
                    {product?.features && (
                      <tr className='flex flex-col'>
                        <td className='font-bold'>features</td>
                        <td>
                          {product?.features &&
                            product.features.map((feature, index) => (
                              <span key={index} className='text-wrap'>
                                {' '}
                                {feature}{' '}
                              </span>
                            ))}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='w-[210px] flex flex-col gap-2 text-[14px] '>
        <div className='border border-black rounded-lg p-4 '>
          No featured offers available
          <div className='text-amazon-blue'>Learn more</div>
        </div>
        <div className='border border-black rounded-lg p-4 flex flex-col gap-1'>
          <div className='text-amazon-blue text-[12px]'>
            Deliver to Ethiopia
          </div>
          <Button
            btnStyle='border border-slate-800 rounded-full px-4 py-1 hover:bg-slate-100 w-full'
            title='Add to Cart'
            btnType='button'
            handleClick={handleCartChange}
          />
          <hr className='border-gray-300 my-1' />
          <Link href={'/login'}>
            <Button
              btnStyle='border border-slate-800 rounded-lg px-4 py-1 hover:bg-slate-100 w-full'
              title='Add to List'
              btnType='button'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

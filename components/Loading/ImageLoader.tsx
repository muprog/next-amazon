'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface ImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
  loadingVariant?: 'skeleton' | 'spinner' | 'pulse' | 'shimmer'
}

export default function ImageLoader({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  sizes,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  fallbackSrc = '/image/noimage.png',
  loadingVariant = 'skeleton',
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(false)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
    onError?.()
  }

  const getLoadingContent = () => {
    switch (loadingVariant) {
      case 'spinner':
        return (
          <div className='flex items-center justify-center'>
            <div className='w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
          </div>
        )
      case 'pulse':
        return (
          <div className='w-full h-full bg-gray-200 animate-pulse rounded-md'></div>
        )
      case 'shimmer':
        return (
          <div className='w-full h-full bg-gray-200 relative overflow-hidden rounded-md'>
            <div className='absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent'></div>
          </div>
        )
      default: // skeleton
        return (
          <div className='w-full h-full bg-gray-200 rounded-md flex items-center justify-center'>
            <div className='w-8 h-8 bg-gray-300 rounded-full animate-pulse'></div>
          </div>
        )
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div
          className='absolute inset-0'
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
          }}
        >
          {getLoadingContent()}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div
          className='absolute inset-0 bg-gray-100 rounded-md flex items-center justify-center'
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
          }}
        >
          <div className='text-center text-gray-500'>
            <svg
              className='w-6 h-6 mx-auto mb-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <p className='text-xs'>No image</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        sizes={sizes}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

import React from 'react'
import { BookStructureType } from '@/Types'
import Link from 'next/link'
import ImageLoader from '../Loading/ImageLoader'

export default function BookStructure({ book }: BookStructureType) {
  return (
    <Link
      href={`/product/${book.id}?id=${book?.id}&category=${book?.category}`}
    >
      <div className='w-[120px] h-[190px] relative flex-shrink-0'>
        <ImageLoader
          src={`${book.image ? book.image : '/image/noimage.png'}`}
          alt='some'
          fill
          className='object-contain w-[120px] h-[190px]'
          sizes='(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw'
          loadingVariant='shimmer'
        />
      </div>
    </Link>
  )
}

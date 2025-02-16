import React, { useState } from 'react'
import Image from 'next/image'
import { BookStructureType } from '@/Types'
import Link from 'next/link'
export default function BookStructure({ book }: BookStructureType) {
  const [name, setName] = useState(book.image)
  return (
    <Link
      href={`/product/${book.id}?id=${book?.id}&category=${book?.category}`}
    >
      <div className='w-[120px] h-[190px] relative flex-shrink-0'>
        <img
          src={`${book.image ? book.image : '/image/noimage.png'}`}
          alt='some'
          className='object-contain w-[120px] h-[190px]'
          sizes='(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw'
        />
      </div>
    </Link>
  )
}

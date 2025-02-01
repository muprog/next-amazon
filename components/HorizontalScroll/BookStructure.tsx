import React from 'react'
import Image from 'next/image'
import { BookStructureProps } from '@/Types'
import Link from 'next/link'
export default function BookStructure({ image }: BookStructureProps) {
  return (
    <Link href={'/'}>
      <div className='w-[70px] h-[100px] relative flex-shrink-0'>
        <Image
          src={`/image/Books/${image}`}
          alt=''
          fill
          className='object-contain'
          sizes='(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw'
        />
      </div>
    </Link>
  )
}

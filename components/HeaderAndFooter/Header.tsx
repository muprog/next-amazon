import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from 'lucide-react'
import SearchBar from './SearchBar'
export default function Header() {
  return (
    <div className='w-full min-w-[480px] h-[40px] bg-black flex items-center p-2 text-white gap-1 pt-2 pb-2 justify-between '>
      <div className='flex justify-center items-center hover h-full'>
        <div className='relative w-[60px] h-[30px]'>
          <Link href={'/'} className='w-[60px] h-[30px]'>
            <Image
              src='/image/amazon-logo.png'
              alt='amazon'
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw'
            />
          </Link>
        </div>
      </div>
      <div className=' text-[8px] hover'>
        <button className='flex items-center w-[50px] h-full '>
          <div className='relative w-[12px] h-[12px]'>
            <Image
              src='/image/location.png'
              alt='amazon'
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw'
            />
          </div>
          <div>
            <div className='text-slate-300'>Deliver to</div>
            <div className='header-bold-font'>Ethiopia</div>
          </div>
        </button>
      </div>
      <div className='header-font hover:border-none flex flex-1 items-center justify-center'>
        <SearchBar />
      </div>
      <div className='header-font'>lang</div>
      <div className='header-font'>sigin in</div>
      <div className='header-font'>
        <button>
          Returns
          <div className='header-bold-font'>& Orders</div>
        </button>
      </div>
      <div className='flex flex-col items-center justify-center relative header-font pt-2'>
        <div className='pt-1 absolute top-[-3px] left-2 text-[10px] text-orange-400 font-semibold'>
          0
        </div>
        <ShoppingCartIcon className='h-5 w-5' />
      </div>
    </div>
  )
}

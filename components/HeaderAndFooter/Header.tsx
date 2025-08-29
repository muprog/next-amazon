'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from 'lucide-react'
import SearchBar from './SearchBar'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import MyContext from '../ContextApi/MyContext'
import { cartDataProps } from '@/Types'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [, setSubTotal] = useState<number>(0)
  const pathname = usePathname()
  const hideHeader = ['/login', '/signup']
  const [cartLength, setCartLength] = useState(0)
  const context = useContext(MyContext)
  const [, setOpenCart] = useState(false)

  const cartData = context?.cartData as cartDataProps[]

  const shouldHideLayout = hideHeader.includes(pathname)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setCartLength(cartData.length)
  }, [cartData])
  useEffect(() => {
    let sum = 0
    cartData.map((element) => {
      sum += Number(element.product.price) * element.quantity
    })
    setSubTotal(sum)
  }, [cartData])

  if (!mounted) return

  return (
    <div>
      {!shouldHideLayout && (
        <div className='w-full h-[60px] bg-black text-white flex items-center justify-between gap-2 md:gap-3 py-2 px-2 sticky top-0 isolation-isolate z-40 shadow-md'>
          <div className='h-full w-[80px] hover:border flex-shrink-0'>
            <div className='relative h-full w-[80px]'>
              <Link href={'/'} className=''>
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
          <div className=' text-[10px] w-[70px] h-full flex-shrink-0 pl-1 hover:border hidden sm:flex'>
            <button className='flex items-center w-full h-full '>
              <div className='relative w-[20px] h-[20px] flex-shrink-0'>
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
              <div className='flex-shrink-0'>
                <div className='text-slate-300 text-nowrap'>Deliver to</div>
                <div className='header-bold-font'>Ethiopia</div>
              </div>
            </button>
          </div>
          <div className='header-font hover:border-none flex flex-1 items-center justify-center'>
            <SearchBar />
          </div>
          <div className='header-font hidden md:flex'>
            <div className='relative w-4 h-4'>
              <Image
                src='/image/american-flag.jpg'
                alt='lang'
                fill
                className='h-4 w-4 mr-1'
              />
            </div>

            <div>lang</div>
          </div>
          <div className='header-font hidden md:flex'>
            <Link href={'/login'}>sign in</Link>
          </div>
          <div className='header-font hidden md:flex'>
            <Link href={'/login'}>
              <button>
                Returns
                <div className='header-bold-font'>& Orders</div>
              </button>
            </Link>
          </div>

          <Link href={'/cartPage'} onClick={() => setOpenCart(false)}>
            <div className='flex flex-col items-center justify-center relative header-font pt-2'>
              <div className='pt-1 absolute top-[-6px] left-3 text-[14px] text-orange-400 font-semibold'>
                {cartLength}
              </div>
              <div>
                <ShoppingCartIcon className='h-7 w-7' />
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

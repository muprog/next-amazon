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
  const [subTotal, setSubTotal] = useState<number>(0)
  const pathname = usePathname()
  const hideHeader = ['/login', '/signup']
  const cartPage = ['/cartPage']
  const [cartLength, setCartLength] = useState(0)
  const context = useContext(MyContext)
  const [openCart, setOpenCart] = useState(false)
  // if (!context) {
  //   return <div className='text-center text-[50px]'>Loading</div>
  // }
  const cartData = context?.cartData as cartDataProps[]

  const shouldHideLayout = hideHeader.includes(pathname)
  const hideCartPage = cartPage.includes(pathname)

  // openCart state controls message visibility

  useEffect(() => {
    if (!hideCartPage) {
      setOpenCart(true)
    }
  }, [hideCartPage, cartData])

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
        <div className='w-full min-w-[720px] h-[60px] bg-black flex items-center text-white gap-1  justify-between py-2 px-2'>
          <div className='h-full w-[80px] hover:border'>
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
          <div className=' text-[10px] w-[70px] h-full flex-shrink-0 pl-1 hover:border'>
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
          <div className='header-font'>
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
          <div className='header-font'>
            <Link href={'/login'}>sign in</Link>
          </div>
          <div className='header-font'>
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
              <div onClick={() => setOpenCart(true)}>
                <ShoppingCartIcon className='h-7 w-7' />
              </div>
              {openCart && (
                <div
                  className='border mt-2 text-center text-black h-[100vh] w-[110px] flex items-start absolute top-[-20px] left-9 text-wrap   before:absolute before:-left-[15px] before:top-[30px] before:-translate-y-1/2 before:border-8
                    before:border-transparent before:border-r-white'
                >
                  {cartData.length > 0 ? (
                    <div className='flex-shrink-0 flex flex-col gap-1  items-center'>
                      <h1 className='text-[14px]'>
                        Subtotal:
                        <div className='font-bold text-red-700 text-[17px] text-wrap  max-w-[100px] '>
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD', // Specify the currency code, e.g., 'USD', 'EUR', etc.
                          }).format(subTotal)}
                        </div>
                      </h1>
                      <hr className='w-[70%]' />
                      <div className='flex flex-col gap-2'>
                        {cartData.map((cart, index) => (
                          <div
                            key={index}
                            className='relative w-full px-4 flex-shrink-0'
                          >
                            <Image
                              src={`${cart.product.image?.[0]}`}
                              alt={`${cart.product.name}`}
                              width={70}
                              height={100}
                              className='w-[70px] h-[100px]'
                            />
                            {cart.quantity > 1 && (
                              <div className='absolute right-0 bottom-0 border-2 rounded-full w-6 font-fold'>
                                {cart.quantity}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>Your Cart is empty</div>
                  )}
                </div>
              )}
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

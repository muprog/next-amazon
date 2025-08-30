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
import { Menu, X, Globe, User, Package, MapPin } from 'lucide-react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [, setSubTotal] = useState<number>(0)
  const pathname = usePathname()
  const hideHeader = ['/login', '/signup']
  const [cartLength, setCartLength] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) return

  return (
    <div>
      {!shouldHideLayout && (
        <>
          <div className='w-full h-[60px] bg-black text-white flex items-center justify-between gap-2 md:gap-3 py-2 px-2 sticky top-0 isolation-isolate z-[9999] shadow-md'>
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
            <div className='header-font hover:border-none flex flex-1 min-w-0 items-center justify-center overflow-hidden'>
              <SearchBar />
            </div>

            {/* Desktop Menu Items */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-105'
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6 text-white' />
              ) : (
                <Menu className='h-6 w-6 text-white' />
              )}
            </button>

            {/* Cart - Always Visible */}
            <Link
              href={'/cartPage'}
              onClick={() => setOpenCart(false)}
              className='flex-shrink-0'
            >
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

          {/* Beautiful Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className='md:hidden fixed inset-0 bg-black bg-opacity-60 z-[10000] backdrop-blur-sm'
              onClick={toggleMobileMenu}
            >
              <div
                className='absolute top-[60px] right-0 w-72 bg-gradient-to-b from-gray-900 to-black text-white shadow-2xl border-l border-gray-700'
                onClick={(e) => e.stopPropagation()}
              >
                {/* Menu Header */}
                <div className='p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900'>
                  <h2 className='text-xl font-bold text-white mb-2'>Menu</h2>
                  <p className='text-gray-300 text-sm'>
                    Quick access to your account
                  </p>
                </div>

                {/* Menu Items */}
                <div className='p-4 space-y-2'>
                  {/* Language */}
                  <div className='group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-600 hover:border-gray-500'>
                    <div className='flex items-center space-x-4'>
                      <div className='p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors duration-200'>
                        <Globe className='h-5 w-5 text-white' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-semibold text-white'>Language</div>
                        <div className='text-sm text-gray-300'>
                          English (US)
                        </div>
                      </div>
                      <div className='relative w-6 h-4'>
                        <Image
                          src='/image/american-flag.jpg'
                          alt='lang'
                          fill
                          className='rounded-sm'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sign In */}
                  <Link href={'/login'} className='block'>
                    <div className='group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-600 hover:border-gray-500'>
                      <div className='flex items-center space-x-4'>
                        <div className='p-2 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors duration-200'>
                          <User className='h-5 w-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <div className='font-semibold text-white'>
                            Sign In
                          </div>
                          <div className='text-sm text-gray-300'>
                            Access your account
                          </div>
                        </div>
                        <div className='text-gray-400 group-hover:text-white transition-colors duration-200'>
                          →
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Returns & Orders */}
                  <Link href={'/login'} className='block'>
                    <div className='group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-600 hover:border-gray-500'>
                      <div className='flex items-center space-x-4'>
                        <div className='p-2 bg-orange-600 rounded-lg group-hover:bg-orange-500 transition-colors duration-200'>
                          <Package className='h-5 w-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <div className='font-semibold text-white'>
                            Returns
                          </div>
                          <div className='text-sm text-gray-300'>& Orders</div>
                        </div>
                        <div className='text-gray-400 group-hover:text-white transition-colors duration-200'>
                          →
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Location */}
                  <div className='group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-600 hover:border-gray-500'>
                    <div className='flex items-center space-x-4'>
                      <div className='p-2 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors duration-200'>
                        <MapPin className='h-5 w-5 text-white' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-semibold text-white'>
                          Deliver to
                        </div>
                        <div className='text-sm text-gray-300'>Ethiopia</div>
                      </div>
                      <div className='text-gray-400 group-hover:text-white transition-colors duration-200'>
                        →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className='p-4 border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900'>
                  <div className='text-center text-gray-400 text-sm'>
                    Amazon.com, Inc.
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

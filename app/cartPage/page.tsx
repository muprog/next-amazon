// 'use client'
// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import MyContext from '@/components/ContextApi/MyContext'
// import { cartDataProps } from '@/Types'
// import CartDataStructure from '@/components/Cart/CartDataStructure'
// import Button from '@/components/Button/Button'
// import Link from 'next/link'
// import SavedForLaterStructure from '@/components/Cart/SavedForLaterStructure'
// import Image from 'next/image'
// export default function Page() {
//   // const [isClient, setIsClient] = useState(false)
//   const context = useContext(MyContext)
//   if (!context) return null
//   const [cartData, setCartData] = useState<cartDataProps[]>([])
//   const [savedForLater, setSavedForLater] = useState<cartDataProps[]>([])
//   useEffect(() => {
//     setCartData(context.cartData)
//   }, [context.cartData])
//   useEffect(() => {
//     setSavedForLater(context.savedForLater)
//   }, [context.savedForLater])

//   const [TotalPrice, setTotalPrice] = useState<number>(0)
//   useEffect(() => {
//     setTotalPrice((prev) => {
//       let total = 0
//       if (cartData.length > 0) {
//         cartData.map((data, index) => {
//           total += data.product.price
//             ? data.product.price * data.quantity
//             : total
//           return data
//         })
//       }
//       return total
//     })
//   }, [cartData])

//   return (
//     <div className='p-4 bg-slate-100 h-full flex flex-col gap-4'>
//       <div className='   md:flex gap-2 flex-shrink-0'>
//         {cartData.length > 0 && (
//           <div className='w-[300px] h-[150px] bg-white rounded-[3px] mb-2 flex justify-center items-center md:hidden'>
//             <div className='w-[90%] flex flex-col gap-2'>
//               <div className='text-[18px]'>
//                 Subtotal {`(${cartData?.length})`}:{' '}
//                 <span className='font-bold'>${TotalPrice}</span>
//               </div>
//               <div>
//                 <div className='text-[13px] '>
//                   <div>
//                     <input type='checkbox' id='checkbox' />
//                     <label htmlFor='checkbox'>This Order contains a gift</label>
//                   </div>
//                   <Link href={'/login'}>
//                     <Button
//                       title='Proceed to checkout'
//                       btnStyle='w-full bg-yellow-300 rounded-full p-1 active:border active:border-2 border-blue-500'
//                       btnType='button'
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className='bg-white py-10 flex-1'>
//           {cartData?.length > 0 && (
//             <div className='h-[40px] text-[30px] flex items-center pl-[20px]'>
//               <h1>Shopping Cart</h1>
//             </div>
//           )}

//           {cartData?.length > 0 ? (
//             <div>
//               <div className='w-full pl-5 pr-5 border-gray-500 my-5'>
//                 <hr className='w-full' />
//               </div>

//               <div className='w-full flex justify-center'>
//                 <div className=' justify-center grid grid-cols-2 gap-2 md:flex md:flex-col'>
//                   {cartData?.map((item, index) => (
//                     <div key={index}>
//                       <CartDataStructure item={item} />
//                     </div>
//                   ))}
//                   <div className='w-full pl-5 pr-5 border-gray-500 my-5'>
//                     <hr className='w-full' />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className='flex h-full items-center gap-10'>
//               <div className='relative w-[200px] h-[100px] '>
//                 <Image
//                   src='/empty.svg'
//                   alt='empty'
//                   fill
//                   className='object-contain'
//                 />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <div className='text-[25px] font-bold'>
//                   Your Amazon Cart is empty
//                 </div>
//                 <div className='flex gap-2'>
//                   <Link href={'/login'}>
//                     <Button
//                       title='Sign in to your account'
//                       btnType='button'
//                       btnStyle='bg-yellow-300 px-4 py-1 rounded-full hover:opacity-75'
//                     />
//                   </Link>
//                   <Link href={'/signup'}>
//                     <Button
//                       title='Sign up now'
//                       btnType='button'
//                       btnStyle='border-[1px] border-gray-500 px-4 py-1 rounded-full hover:opacity-50'
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {cartData.length > 0 && (
//           <div className='w-[300px] h-[150px] bg-white rounded-[3px] mb-2 md:flex justify-center items-center hidden flex-shrink-0'>
//             <div className='w-[90%] flex flex-col gap-2'>
//               <div className='text-[18px]'>
//                 Subtotal {`(${cartData?.length})`}:{' '}
//                 <span className='font-bold'>
//                   {new Intl.NumberFormat('en-US', {
//                     style: 'currency',
//                     currency: 'USD',
//                   }).format(TotalPrice)}
//                 </span>
//               </div>
//               <div>
//                 <div className='text-[13px] '>
//                   <div>
//                     <input type='checkbox' id='checkbox' />
//                     <label htmlFor='checkbox'>This Order contains a gift</label>
//                   </div>
//                   <Link href={'/login'}>
//                     <Button
//                       title='Proceed to checkout'
//                       btnStyle='w-full bg-yellow-300 rounded-full p-1 active:border active:border-2 border-blue-500'
//                       btnType='button'
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {savedForLater.length > 0 && (
//         <div className='md:flex'>
//           <div className='bg-white  w-full flex items-center flex-col'>
//             <h1 className='w-full h-[40px] text-[30px] flex items-center pl-[20px] pt-5 '>
//               Saved for later {`(${savedForLater.length} items)`}
//             </h1>
//             <div className='w-full my-4 pl-5 pr-5'>
//               <hr className='border border-gray-500' />
//             </div>
//             <div className='flex-shrink-0 py-10 px-4 grid grid-cols-1 justify-center  lg:grid-cols-2 xl:grid-cols-3 gap-2'>
//               {savedForLater?.map((save, index) => (
//                 <SavedForLaterStructure save={save} key={index} />
//               ))}
//             </div>
//           </div>
//           <div className='w-[300px] flex-shrink-0 hidden md:block'></div>
//         </div>
//       )}
//     </div>
//   )
// }

'use client'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MyContext from '@/components/ContextApi/MyContext'
import { cartDataProps } from '@/Types'
import CartDataStructure from '@/components/Cart/CartDataStructure'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import SavedForLaterStructure from '@/components/Cart/SavedForLaterStructure'
import Image from 'next/image'

export default function Page() {
  const context = useContext(MyContext)
  const [cartData, setCartData] = useState<cartDataProps[]>([])
  const [savedForLater, setSavedForLater] = useState<cartDataProps[]>([])
  const [TotalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    if (context) {
      setCartData(context.cartData)
    }
  }, [context?.cartData, context])

  useEffect(() => {
    if (context) {
      setSavedForLater(context.savedForLater)
    }
  }, [context?.savedForLater, context])

  useEffect(() => {
    let total = 0
    if (cartData.length > 0) {
      total = cartData.reduce(
        (sum, data) =>
          sum + (data.product.price ? data.product.price * data.quantity : 0),
        0
      )
    }
    setTotalPrice(total)
  }, [cartData, context])

  if (!context) {
    return <div>Loading...</div>
  }

  return (
    <div className='mobile-screen p-4 bg-slate-100 min-h-screen flex flex-col gap-4'>
      <div className='   md:flex gap-2 flex-shrink-0'>
        {cartData.length > 0 && (
          <div className='w-[300px] h-[150px] bg-white rounded-[3px] mb-2 flex justify-center items-center md:hidden'>
            <div className='w-[90%] flex flex-col gap-2'>
              <div className='text-[18px]'>
                Subtotal {`(${cartData?.length})`}:{' '}
                <span className='font-bold'>${TotalPrice}</span>
              </div>
              <div>
                <div className='text-[13px] '>
                  <div>
                    <input type='checkbox' id='checkbox' />
                    <label htmlFor='checkbox'>This Order contains a gift</label>
                  </div>
                  <Link href={'/login'}>
                    <Button
                      title='Proceed to checkout'
                      btnStyle='w-full bg-yellow-300 rounded-full p-1 active:border active:border-2 border-blue-500'
                      btnType='button'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='bg-white py-10 flex-1'>
          {cartData?.length > 0 && (
            <div className='h-[40px] text-[30px] flex items-center pl-[20px]'>
              <h1>Shopping Cart</h1>
            </div>
          )}

          {cartData?.length > 0 ? (
            <div>
              <div className='w-full pl-5 pr-5 border-gray-500 my-5'>
                <hr className='w-full' />
              </div>

              <div className='w-full flex justify-center'>
                <div className=' justify-center grid grid-cols-2 gap-2 md:flex md:flex-col'>
                  {cartData?.map((item, index) => (
                    <div key={index}>
                      <CartDataStructure item={item} />
                    </div>
                  ))}
                  <div className='w-full pl-5 pr-5 border-gray-500 my-5'>
                    <hr className='w-full' />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex h-full items-center gap-10'>
              <div className='relative w-[200px] h-[100px] '>
                <Image
                  src='/empty.svg'
                  alt='empty'
                  fill
                  className='object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='text-[25px] font-bold'>
                  Your Amazon Cart is empty
                </div>
                <div className='flex gap-2'>
                  <Link href={'/login'}>
                    <Button
                      title='Sign in to your account'
                      btnType='button'
                      btnStyle='bg-yellow-300 px-4 py-1 rounded-full hover:opacity-75'
                    />
                  </Link>
                  <Link href={'/signup'}>
                    <Button
                      title='Sign up now'
                      btnType='button'
                      btnStyle='border-[1px] border-gray-500 px-4 py-1 rounded-full hover:opacity-50'
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {cartData.length > 0 && (
          <div className='w-[300px] h-[150px] bg-white rounded-[3px] mb-2 md:flex justify-center items-center hidden flex-shrink-0'>
            <div className='w-[90%] flex flex-col gap-2'>
              <div className='text-[18px]'>
                Subtotal {`(${cartData?.length})`}:{' '}
                <span className='font-bold'>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(TotalPrice)}
                </span>
              </div>
              <div>
                <div className='text-[13px] '>
                  <div>
                    <input type='checkbox' id='checkbox' />
                    <label htmlFor='checkbox'>This Order contains a gift</label>
                  </div>
                  <Link href={'/login'}>
                    <Button
                      title='Proceed to checkout'
                      btnStyle='w-full bg-yellow-300 rounded-full p-1 active:border active:border-2 border-blue-500'
                      btnType='button'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {savedForLater.length > 0 && (
        <div className='md:flex'>
          <div className='bg-white  w-full flex items-center flex-col'>
            <h1 className='w-full h-[40px] text-[30px] flex items-center pl-[20px] pt-5 '>
              Saved for later {`(${savedForLater.length} items)`}
            </h1>
            <div className='w-full my-4 pl-5 pr-5'>
              <hr className='border border-gray-500' />
            </div>
            <div className='flex-shrink-0 py-10 px-4 grid grid-cols-1 justify-center  lg:grid-cols-2 xl:grid-cols-3 gap-2'>
              {savedForLater?.map((save, index) => (
                <SavedForLaterStructure save={save} key={index} />
              ))}
            </div>
          </div>
          <div className='w-[300px] flex-shrink-0 hidden md:block'></div>
        </div>
      )}
    </div>
  )
}

// 'use client'
// import { useContext, useEffect, useState } from 'react'
// import MyContext from '../ContextApi/MyContext'
// import { cartDataProps } from '@/Types'
// import Link from 'next/link'
// import React from 'react'
// import Button from '../Button/Button'
// interface cartDataType {
//   item: cartDataProps
// }
// export default function CartDataStructure({ item }: cartDataType) {
//   const context = useContext(MyContext)
//   if (!context) return <div>Loading</div>

//   const { cartData, setCartData } = context
//   // const [indexOfItem, setIndexOfItem] = useState<number>()
//   const [newItem, setNewItem] = useState<cartDataProps>(item)

//   const handlePlus = () => {
//     setCartData((prev) => {
//       const index = prev.findIndex(
//         (prevItem) => prevItem.product.id === item.product.id
//       )
//       if (index === -1) return prev // Item not found, return the same state

//       // Create a new cart array with updated quantity
//       const updatedCart = [...prev]
//       updatedCart[index] = {
//         ...updatedCart[index],
//         quantity: (updatedCart[index].quantity || 0) + 1,
//       }
//       return updatedCart
//     })
//   }

//   const handleMinus = () => {
//     setCartData((prev) => {
//       const index = prev.findIndex(
//         (prevItem) => prevItem.product.id === item.product.id
//       )
//       if (index === -1) return prev // Item not found, return the same state

//       const updatedCart = [...prev]

//       // If quantity is greater than 1, decrease it; otherwise, keep it at 1 or remove it
//       if (updatedCart[index].quantity > 1) {
//         updatedCart[index] = {
//           ...updatedCart[index],
//           quantity: updatedCart[index].quantity - 1,
//         }
//       } else {
//         // Optional: Remove item from cart when quantity reaches 1
//         updatedCart.splice(index, 1)
//       }

//       return updatedCart
//     })
//   }

//   // console.log(cartData)

//   return (
//     <div className='pl-12 w-full flex items-start'>
//       <div className='relative w-[150px] h-[150px] flex-shrink-0'>
//         <img
//           src={`${item.product.image?.[0]}`}
//           alt={`${item?.product?.name}`}
//           className=' w-full h-[150px] '
//         />
//       </div>
//       <div className=' p-1 flex-1 flex flex-col h-[150px] flex-shrink-0 justify-center'>
//         <div className='text-[20px] font-amazon text-gray-900'>
//           <Link
//             href={`/product/${item?.product?.id}?id=${
//               item.product?.id
//             }&category=${
//               item.product?.author ? 'book' : item.product?.category
//             }`}
//           >
//             {item?.product?.description}
//           </Link>
//         </div>
//         <div className='text-[12px]'>
//           <div>{item?.product?.author && item?.product?.author}</div>
//           <div className='text-orange-700'>
//             Usually ships within 2 to 3 weeks
//           </div>
//           <div>Shipped from : Amazon.com</div>
//           <div className='text-gray-500'>Gift options not available.</div>
//           <div className='flex gap-2'>
//             <div className='flex gap-4 border-amazon-orange border rounded-full px-4  flex-shrink-0 text-[16px]'>
//               <div className='flex h-full items-center'>
//                 {item.quantity > 1 ? (
//                   <Button
//                     title='-'
//                     btnType='button'
//                     btnStyle=''
//                     handleClick={handleMinus}
//                   />
//                 ) : (
//                   <img
//                     src='/delete.svg'
//                     alt='del'
//                     className='w-[18px] h-[18px] cursor-pointer'
//                     onClick={handleMinus}
//                   />
//                 )}
//               </div>
//               <span>{item.quantity}</span>
//               <div>
//                 <Button
//                   title='+'
//                   btnType='button'
//                   btnStyle=''
//                   handleClick={handlePlus}
//                 />
//               </div>
//             </div>
//             <div className='flex gap-2 text-amazon-blue'>
//               <hr className='border-gray-400 border-[1px] h-[17px]' />
//               <div
//                 className='hover:underline cursor-pointer'
//                 onClick={() =>
//                   setCartData((prev) =>
//                     prev.filter(
//                       (item) =>
//                         item.product.id !== item.product.id &&
//                         item.product.description !== item.product.description
//                     )
//                   )
//                 }
//               >
//                 Delete
//               </div>
//               <hr className='border-gray-400 border-[1px] h-[17px]' />
//               <div className='hover:underline cursor-pointer'>
//                 save for later
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='pt-3 font-bold w-[100px]'>${item.product.price}</div>
//     </div>
//   )
// }

'use client'
import { useContext, useState } from 'react'
import MyContext from '../ContextApi/MyContext'
import { cartDataProps } from '@/Types'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

interface cartDataType {
  item: cartDataProps
  // savedForLater: cartDataProps[]
  // setSavedForLater: React.Dispatch<React.SetStateAction<cartDataProps[]>>
}

export default function CartDataStructure({
  item,
}: // savedForLater,
// setSavedForLater,
cartDataType) {
  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const context = useContext(MyContext)
  if (!context) return <div>Loading</div>

  const { setCartData, setSavedForLater } = context

  const handleUpdateQuantity = (type: 'increase' | 'decrease') => {
    setLoading(true) // Show loading animation

    setTimeout(() => {
      setCartData((prev) => {
        const index = prev.findIndex(
          (prevItem) => prevItem.product.id === item.product.id
        )
        if (index === -1) return prev // Item not found, return the same state

        const updatedCart = [...prev]

        if (type === 'increase') {
          updatedCart[index] = {
            ...updatedCart[index],
            quantity: (updatedCart[index].quantity || 0) + 1,
          }
        } else {
          if (updatedCart[index].quantity > 1) {
            updatedCart[index] = {
              ...updatedCart[index],
              quantity: updatedCart[index].quantity - 1,
            }
          } else {
            updatedCart.splice(index, 1) // Remove item if quantity is 1
          }
        }
        return updatedCart
      })
      setLoading(false) // Hide loading animation after update
    }, 1000) // Simulate loading time
  }

  function handleSaveLater() {
    setCartData((prev) => {
      const updatedCart = prev.filter(
        (cartItem) =>
          cartItem.product.id != item.product.id &&
          cartItem.product.description != item.product.description
      )
      return updatedCart
    })

    setSavedForLater((prev) => {
      const isAlreadySaved = prev.filter(
        (savedItem) =>
          savedItem.product.id === item.product.id &&
          savedItem.product.description === item.product.description
      )
      if (isAlreadySaved.length === 0) {
        return [...prev, item]
      } else {
        return prev
      } // Avoid duplicates
    })
  }

  // console.log(savedForLater)
  return (
    <div className='pl-5 md:w-full flex flex-col sm:flex-col md:flex-row w-[300px] items-start mt-0 overflow-scroll scrollbar-hide border-2 p-2 md:border-none'>
      <div className='relative md:w-[150px] w-[200px] h-[150px] flex-shrink-0'>
        {imageLoading && (
          <div className='w-full h-[150px] flex items-center justify-center'>
            🔄
          </div>
        )}
        <Image
          src={`${item.product.image?.[0]}`}
          alt={`${item?.product?.name}`}
          fill
          className={`w-full h-[150px] ${imageLoading ? 'hidden' : 'block'}`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </div>
      <div className='p-1 flex-1 flex flex-col min-h-[150px] flex-shrink-0 justify-center overflow-y-auto scrollbar-hide '>
        <div className='text-[20px] font-amazon text-gray-900'>
          <Link
            href={`/product/${item?.product?.id}?id=${
              item.product?.id
            }&category=${
              item.product?.author ? 'book' : item.product?.category
            }`}
          >
            {item?.product?.description}
          </Link>
        </div>
        <div className='text-[12px]'>
          <div>{item?.product?.author && item?.product?.author}</div>
          <div className='text-orange-700'>
            Usually ships within 2 to 3 weeks
          </div>
          <div>Shipped from : Amazon.com</div>
          <div className='text-gray-500'>Gift options not available.</div>
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex justify-between max-w-[150px] h-[30px] gap-4 border-amazon-orange border rounded-full px-4 flex-shrink-0 text-[16px]'>
              <div className='flex h-full items-center'>
                {item.quantity > 1 ? (
                  <Button
                    title='-'
                    btnType='button'
                    btnStyle=''
                    handleClick={() => handleUpdateQuantity('decrease')}
                  />
                ) : (
                  <Image
                    src='/delete.svg'
                    alt='del'
                    width={18}
                    height={18}
                    className='w-[18px] h-[18px] cursor-pointer'
                    onClick={() => handleUpdateQuantity('decrease')}
                  />
                )}
              </div>
              <span className='min-w-[30px] text-center'>
                {loading ? (
                  <div className='w-4 h-4 border-4 mt-1 border-orange-500 border-t-white rounded-full animate-spin'></div>
                ) : (
                  item.quantity
                )}
              </span>

              <div>
                <Button
                  title='+'
                  btnType='button'
                  btnStyle=''
                  handleClick={() => handleUpdateQuantity('increase')}
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 text-amazon-blue'>
              <hr className='border-gray-400 border-[1px] h-[17px] hidden md:block' />
              <div
                className='hover:underline cursor-pointer'
                onClick={() =>
                  setCartData((prev) =>
                    prev.filter(
                      (cartItem) => cartItem.product.id !== item.product.id
                    )
                  )
                }
              >
                Delete
              </div>
              <hr className='border-gray-400 border-[1px] h-[17px] hidden md:block' />
              <div
                className='hover:underline cursor-pointer'
                onClick={handleSaveLater}
              >
                save for later
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-3 font-bold w-[80px]'>${item.product.price}</div>
    </div>
  )
}

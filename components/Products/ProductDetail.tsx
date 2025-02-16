// 'use client'
// import { productDetailType } from '@/Types'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import Button from '../Button/Button'
// import Link from 'next/link'

// export interface RatingProps {
//   rating: number
// }

// const StarRating = ({ rating }: RatingProps) => {
//   return (
//     <div className='text-yellow-500 text-xl'>
//       {'★'.repeat(Math.floor(rating))}
//       {'☆'.repeat(5 - Math.floor(rating))}
//     </div>
//   )
// }

// export default function ProductDetail({
//   product,
//   indexOfRating,
//   setIndexOfRating,
// }: productDetailType) {
//   const [showMessage, setShowMessage] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleMouseEnter = () => {
//     setShowMessage(true)
//     setLoading(true) // Start loading effect

//     setTimeout(() => {
//       setLoading(false) // Show actual content after delay
//     }, 800) // 800ms delay before showing full content
//   }

//   const handleMouseLeave = () => {
//     setShowMessage(false)
//     setLoading(false)
//     setIndexOfRating(product?.id || 1)
//   }

//   return (
//     <div className='flex relative gap-2 border-[1px] rounded-lg'>
//       <Link
//         href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
//       >
//         <div className='relative h-[150px] w-[170px]'>
//           <img
//             src={`${product.image ? product?.image[0] : ''}`}
//             alt={`${product?.name}`}
//             className='object-center h-[210px] w-[160px]'
//           />
//         </div>
//       </Link>
//       <div className='flex flex-col gap-1 h-[210px] justify-center'>
//         <div className='text-[20px] tracking-tighter hover:text-orange-700 leading-[20px]'>
//           <Link
//             href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
//           >
//             {product?.description}
//           </Link>
//         </div>
//         <div className='text-[16px] font-[300] tracking-wide flex flex-col gap-1'>
//           <div className='h-[38px] text-[13px] flex flex-col gap-[2px]'>
//             <div
//               className={`relative h-[18px] w-[120px] cursor-pointer flex items-center p-2 rounded-full ${
//                 indexOfRating === product?.id
//                   ? 'border-amazon-blue border-[3px]'
//                   : ''
//               } `}
//               onMouseLeave={handleMouseLeave}
//             >
//               {/* ✅ Hover Event Wrapper */}
//               <div
//                 className='relative cursor-pointer'
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <StarRating rating={product?.rating || 0} />

//                 {/* ✅ Message Box (with loading inside) */}
//                 {showMessage && (
//                   <div
//                     className="absolute left-1/2 -translate-x-1/2 top-full  w-[350px] bg-white text-black border
//                     p-3 rounded-lg shadow-lg text-center
//                     before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8
//                     before:border-transparent before:border-b-white before:border-t-0 z-10"
//                   >
//                     {loading ? (
//                       // 🔄 Loading Animation (Spinner)
//                       <div className='flex justify-center items-center'>
//                         <div className='w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin'></div>
//                       </div>
//                     ) : (
//                       // ✅ Actual Message Box Content (after loading)
//                       <div className='flex flex-col w-full items-start'>
//                         <div className='w-full flex items-center gap-1 justify-start'>
//                           <StarRating rating={product?.rating || 0} />
//                           <div>{product?.rating} out of 5</div>
//                         </div>
//                         <div className='text-gray-500 font-bold'>
//                           Number of global ratings
//                         </div>
//                         <table className='w-full'>
//                           <tbody>
//                             <tr className='productDetailTr group'>
//                               <td>
//                                 <Link
//                                   href={'/login'}
//                                   className='productDetailTr group-hover:text-amazon-blue'
//                                 >
//                                   {' '}
//                                   5 star
//                                 </Link>
//                               </td>
//                               <td className='percentageTd'>
//                                 <div className='w-full h-full bg-slate-50 rounded-sm'>
//                                   <div className='w-[66%] bg-orange-500 h-full rounded-l-sm' />
//                                 </div>
//                               </td>
//                               <td>66%</td>
//                             </tr>

//                             <tr className='productDetailTr group'>
//                               <td>
//                                 {' '}
//                                 <Link
//                                   href={'/login'}
//                                   className='productDetailTr group-hover:text-amazon-blue'
//                                 >
//                                   4 star
//                                 </Link>
//                               </td>
//                               <td className='percentageTd'>
//                                 <div className='w-full h-full bg-slate-50 rounded-sm'>
//                                   <div className='w-[15%] bg-orange-500 h-full rounded-l-sm' />
//                                 </div>
//                               </td>
//                               <td>15%</td>
//                             </tr>

//                             <tr className='productDetailTr group'>
//                               <td>
//                                 {' '}
//                                 <Link
//                                   href={'/login'}
//                                   className='productDetailTr group-hover:text-amazon-blue'
//                                 >
//                                   3 star
//                                 </Link>
//                               </td>
//                               <td className='percentageTd'>
//                                 <div className='w-full h-full bg-slate-50 rounded-sm'>
//                                   <div className='w-[8%] bg-orange-500 h-full rounded-l-sm' />
//                                 </div>
//                               </td>
//                               <td>8%</td>
//                             </tr>

//                             <tr className='productDetailTr group'>
//                               <td>
//                                 {' '}
//                                 <Link
//                                   href={'/login'}
//                                   className='productDetailTr group-hover:text-amazon-blue'
//                                 >
//                                   2 star
//                                 </Link>
//                               </td>
//                               <td className='percentageTd'>
//                                 <div className='w-full h-full bg-slate-50 rounded-sm'>
//                                   <div className='w-[4%] bg-orange-500 h-full rounded-l-sm' />
//                                 </div>
//                               </td>
//                               <td>4%</td>
//                             </tr>

//                             <tr className='productDetailTr group'>
//                               <td>
//                                 {' '}
//                                 <Link
//                                   href={'/login'}
//                                   className='productDetailTr group-hover:text-amazon-blue'
//                                 >
//                                   1 star
//                                 </Link>
//                               </td>
//                               <td className='percentageTd'>
//                                 <div className='w-full h-full bg-slate-50 rounded-sm'>
//                                   <div className='w-[7%] bg-orange-500 h-full rounded-l-sm' />
//                                 </div>
//                               </td>
//                               <td>7%</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                         <hr />
//                         <Link href={`/login`} className='w-full'>
//                           <div className='w-full'>
//                             <div className='text-amazon-blue pt-2 font-bold hover:underline'>
//                               See customer reviews
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <Image
//                   src={'/image/drop-down.svg'}
//                   alt='rating'
//                   width={20}
//                   height={20}
//                 />
//               </div>
//             </div>
//             <div className='text-gray-800 h-[18px]'>
//               bought in the last month.
//             </div>
//           </div>

//           <div className='text-amazon-blue font-bold text-[12px]'>
//             {product?.name}
//           </div>
//           <div>
//             <Link
//               href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
//             >
//               <Button
//                 btnType='button'
//                 title='See Options'
//                 btnStyle='text-[12px] border py-[3px] px-2 rounded-full hover:bg-slate-50'
//               />
//             </Link>
//           </div>
//           <div className='h-[30px] text-[12px] '>
//             <div className='text-gray-800 h-[15px]'>
//               featured offers available
//             </div>
//             <div className='h-[15px]'>${product?.price}</div>
//           </div>
//           <div>Color</div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import { productDetailType } from '@/Types'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'

export interface RatingProps {
  rating: number
}

const StarRating = ({ rating }: RatingProps) => {
  return (
    <div className='text-yellow-500 text-xl'>
      {'★'.repeat(Math.floor(rating))}
      {'☆'.repeat(5 - Math.floor(rating))}
    </div>
  )
}

export default function ProductDetail({
  product,
  indexOfRating,
  setIndexOfRating,
}: productDetailType) {
  const [showMessage, setShowMessage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [animatedRatings, setAnimatedRatings] = useState<{
    [key: number]: string
  }>({})

  useEffect(() => {
    if (showMessage && !loading) {
      setAnimatedRatings({}) // Reset animations
      setTimeout(() => {
        setAnimatedRatings({
          5: 'w-[0%]',
          4: 'w-[0%]',
          3: 'w-[0%]',
          2: 'w-[0%]',
          1: 'w-[0%]',
        })
        setTimeout(() => {
          setAnimatedRatings({
            5: 'w-[66%]',
            4: 'w-[15%]',
            3: 'w-[8%]',
            2: 'w-[4%]',
            1: 'w-[7%]',
          })
        }, 100)
      }, 100)
    }
  }, [showMessage, loading])

  const handleMouseEnter = () => {
    setShowMessage(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  const handleMouseLeave = () => {
    setShowMessage(false)
    setLoading(false)
    setIndexOfRating?.(product?.id || 1)
    setAnimatedRatings({})
  }

  return (
    <div className='flex relative gap-2 border-[1px] rounded-lg'>
      <Link
        href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
      >
        <div className='relative h-[150px] w-[170px]'>
          <Image
            src={`${product.image ? product?.image[0] : ''}`}
            alt={`${product?.name}`}
            width={210}
            height={160}
            className='object-center h-[210px] w-[160px]'
          />
        </div>
      </Link>
      <div className='flex flex-col gap-1 h-[210px] justify-center'>
        <div className='text-[20px] tracking-tighter hover:text-orange-700 leading-[20px]'>
          <Link
            href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
          >
            {product?.description}
          </Link>
        </div>
        <div className='text-[16px] font-[300] tracking-wide flex flex-col gap-1'>
          <div className='h-[38px] text-[13px] flex flex-col gap-[2px]'>
            <div className='flex gap-1'>
              <div
                className={`relative h-[18px] w-[120px] cursor-pointer flex items-center p-2 rounded-full ${
                  indexOfRating === product?.id
                    ? 'border-amazon-blue border-[3px]'
                    : ''
                } `}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className='relative cursor-pointer'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <StarRating rating={product?.rating || 0} />
                  {showMessage && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full  w-[350px] bg-white text-black border 
                    p-3 rounded-lg shadow-lg text-center
                    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 
                    before:border-transparent before:border-b-white before:border-t-0 z-10"
                    >
                      {loading ? (
                        <div className='flex justify-center items-center'>
                          <div className='w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin'></div>
                        </div>
                      ) : (
                        <div className='flex flex-col w-full items-start'>
                          <div className='w-full flex items-center gap-1 justify-start'>
                            <StarRating rating={product?.rating || 0} />
                            <div>{product?.rating} out of 5</div>
                          </div>
                          <div className='text-gray-500 font-bold'>
                            Number of global ratings
                          </div>
                          <table className='w-full'>
                            <tbody>
                              {[5, 4, 3, 2, 1].map((star) => (
                                <tr
                                  key={star}
                                  className='productDetailTr group'
                                >
                                  <td>
                                    <Link
                                      href={'/login'}
                                      className='productDetailTr group-hover:text-amazon-blue'
                                    >
                                      {star} star
                                    </Link>
                                  </td>
                                  <td className='percentageTd'>
                                    <div className='w-full h-[20px] bg-slate-50 rounded-sm'>
                                      <div
                                        className={`bg-orange-500 h-full rounded-l-sm transition-all duration-1000 ease-out ${
                                          animatedRatings[star] || 'w-0'
                                        }`}
                                      />
                                    </div>
                                  </td>
                                  <td>{[66, 15, 8, 4, 7][5 - star]}%</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <hr />
                          <Link
                            href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
                            className='w-full'
                          >
                            <div className='w-full'>
                              <div className='text-amazon-blue pt-2 font-bold hover:underline'>
                                See customer reviews
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <Image
                    src={'/image/drop-down.svg'}
                    alt='rating'
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>{product.rating}</div>
            </div>

            <div className='text-gray-800 h-[18px]'>
              bought in the last month.
            </div>
          </div>

          <div className='text-amazon-blue font-bold text-[12px]'>
            {product?.name}
          </div>
          <div>
            <Link
              href={`/product/${product?.id}?id=${product?.id}&category=${product?.category}`}
            >
              <Button
                btnType='button'
                btnStyle='border rounded-full px-2 py-1 border-gray-500 text-[12px] bold hover:bg-slate-100'
                title='See Options'
              />
            </Link>
          </div>
          <div className='text-gray-500 text-[13px] h-[15px]'>
            Feature offers available
          </div>
          <div className='font-bold text-[13px] h-[15px]'>
            ${product?.price}
          </div>
        </div>
      </div>
    </div>
  )
}

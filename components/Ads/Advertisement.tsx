// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'

// export default function Advertisement() {
//   const array = [
//     '/image/ads/kitchen.jpg',
//     '/image/ads/Books.jpg',
//     '/image/ads/gifts.jpg',
//     '/image/ads/beauty.jpg',
//     '/image/ads/toys.jpg',
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? array.length - 1 : prevIndex - 1
//     )
//   }

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === array.length - 1 ? 0 : prevIndex + 1
//     )
//   }

//   return (
//     <div className='relative w-full h-[150px] overflow-hidden'>
//       {/* Left and Right Buttons */}
//       <div className='absolute z-10 w-full h-full flex justify-between items-center px-4'>
//         <button
//           className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow hover:bg-gray-400 transition'
//           onClick={goToPrevious}
//         >
//           <Image
//             src='/image/ads/left.svg'
//             alt='left'
//             width={24}
//             height={24}
//             className='object-contain'
//           />
//         </button>
//         <button
//           className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow hover:bg-gray-400 transition'
//           onClick={goToNext}
//         >
//           <Image
//             src='/image/ads/right.svg'
//             alt='right'
//             width={24}
//             height={24}
//             className='object-contain'
//           />
//         </button>
//       </div>

//       {/* Image Slider */}
//       <div
//         className='flex w-full h-full transition-transform duration-500'
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {array.map((image, index) => (
//           <div className='min-w-full h-full flex-shrink-0 relative' key={index}>
//             <Image
//               src={image}
//               alt={`Slide ${index + 1}`}
//               fill
//               className='object-cover'
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Advertisement() {
  const array = [
    '/image/ads/kitchen.jpg',
    '/image/ads/Books.jpg',
    '/image/ads/gifts.jpg',
    '/image/ads/beauty.jpg',
    '/image/ads/toys.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const goToPrevious = () => {
    setIsSliding(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? array.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsSliding(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === array.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext()
    }, 10000)
    return () => clearInterval(intervalId)
  })

  return (
    <div className='relative w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden'>
      {/* Left and Right Buttons */}
      <div className='absolute inset-0 z-10 w-full flex justify-between items-center px-4'>
        <button
          className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow hover:bg-gray-400 transition'
          onClick={goToPrevious}
        >
          <Image
            src='/image/ads/left.svg'
            alt='left'
            width={24}
            height={24}
            className='object-contain'
          />
        </button>
        <button
          className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow hover:bg-gray-400 transition'
          onClick={goToNext}
        >
          <Image
            src='/image/ads/right.svg'
            alt='right'
            width={24}
            height={24}
            className='object-contain'
          />
        </button>
      </div>

      {/* Image Slider with sliding effect */}
      <div
        className={`w-full h-full flex transition-all duration-700 ${
          isSliding ? 'transform' : ''
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={() => setIsSliding(false)} // Reset sliding after transition
      >
        {array.map((image, index) => (
          <div className='min-w-full h-full flex-shrink-0 relative' key={index}>
            {/* Image */}
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className='object-cover'
            />

            {/* Gradient Overlay (hidden on very small screens) */}
            <div className='absolute inset-0 bg-gradient-to-t from-white opacity-75 max-[432px]:hidden'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

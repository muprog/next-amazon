// 'use client'
// import React, { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'
// import BookStructure from './BookStructure'

// const books = [
//   'ANIMALFARM.jpg',
//   'FAHRENHEIT.jpg',
//   'FOURTHWING.jpg',
//   'GeorgeOrwell.jpg',
//   'GIRL_MOMENT.jpg',
//   'HOUSEMAID.jpg',
//   'HOW_WE_LEARN.jpg',
//   'INNER_EXCELENCE.jpg',
//   'MARGARET.jpg',
//   'STORM.jpg',
//   'THE_CRASH.jpg',
//   'USA_CONSTITUTION.jpg',
//   'Hillbilly_Elergy.jpg',
//   'ATOMIC_HABIT.jpg',
// ]

// export default function BooksHorizontalScoll() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [booksPerPage, setBooksPerPage] = useState(5) // Default number of books visible in the viewport

//   useEffect(() => {
//     if (containerRef.current) {
//       // Dynamically calculate the number of books visible in the viewport
//       const containerWidth = containerRef.current.offsetWidth
//       const singleBookWidth = 70 // Width of a single book (70px)
//       const visibleBooks = Math.floor(containerWidth / singleBookWidth)
//       setBooksPerPage(visibleBooks)
//     }
//   }, [])

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => Math.max(prev - booksPerPage, 0))
//   }

//   const goToNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(prev + booksPerPage, books.length - booksPerPage)
//     )
//   }

//   return (
//     <div className='relative'>
//       {/* Left Button */}
//       <button
//         className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[30%] bg-slate-50 bg-opacity-30 ${
//           currentIndex === 0
//             ? 'opacity-50 '
//             : 'hover:border-[1px] border-amazon-orange'
//         }`}
//         onClick={goToPrevious}
//       >
//         <Image
//           src='/image/ads/left.svg'
//           alt='left'
//           width={24}
//           height={24}
//           className='object-contain'
//         />
//       </button>

//       {/* Right Button */}
//       <button
//         className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[30%] right-0 bg-slate-50 bg-opacity-30 ${
//           currentIndex >= books.length - booksPerPage
//             ? 'opacity-50'
//             : 'hover:border-[1px] border-amazon-orange'
//         }`}
//         onClick={goToNext}
//       >
//         <Image
//           src='/image/ads/right.svg'
//           alt='right'
//           width={24}
//           height={24}
//           className='object-contain'
//         />
//       </button>

//       {/* Books Container */}
//       <div
//         className='w-full h-[120px] bg-white flex justify-center items-center overflow-hidden'
//         ref={containerRef}
//       >
//         <div
//           className={`w-full flex transition-transform duration-700`}
//           style={{
//             transform: `translateX(-${currentIndex * 70}px)`, // Move by the width of a single book (70px)
//           }}
//         >
//           {books.map((book, index) => (
//             <div key={index} className='flex-shrink-0 w-[70px]'>
//               <BookStructure image={book} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BookStructure from './BookStructure'

const books = [
  'ANIMALFARM.jpg',
  'FAHRENHEIT.jpg',
  'FOURTHWING.jpg',
  'GeorgeOrwell.jpg',
  'GIRL_MOMENT.jpg',
  'HOUSEMAID.jpg',
  'HOW_WE_LEARN.jpg',
  'INNER_EXCELENCE.jpg',
  'MARGARET.jpg',
  'STORM.jpg',
  'THE_CRASH.jpg',
  'USA_CONSTITUTION.jpg',
  'Hillbilly_Elergy.jpg',
  'ATOMIC_HABIT.jpg',
  'WARRIOR.jpg',
  'MIND.jpg',
  'MENTAL_GAME.jpg',
  'MENTAL_TOUGHENESS.jpg',
  'POWER_of_DISCIPLINE.jpg',
  'MIND_over_MATTER.jpg',
]

export default function BooksHorizontalScroll() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBouncing, setIsBouncing] = useState(false) // Track bounce animation
  const containerRef = useRef<HTMLDivElement>(null)
  const [booksPerPage, setBooksPerPage] = useState(5) // Default number of books visible in the viewport

  useEffect(() => {
    if (containerRef.current) {
      // Dynamically calculate the number of books visible in the viewport
      const containerWidth = containerRef.current.offsetWidth
      const singleBookWidth = 70 // Width of a single book (70px)
      const visibleBooks = Math.floor(containerWidth / singleBookWidth)
      setBooksPerPage(visibleBooks)
    }
  }, [])

  const handleScroll = (direction: 'previous' | 'next') => {
    if (direction === 'previous') {
      if (currentIndex === 0) {
        // Trigger bounce when trying to scroll before the first image
        setIsBouncing(true)
        setTimeout(() => setIsBouncing(false), 500) // Reset bounce
      } else {
        setCurrentIndex((prev) => Math.max(prev - booksPerPage, 0))
      }
    } else if (direction === 'next') {
      if (currentIndex >= books.length - booksPerPage) {
        // Trigger bounce when trying to scroll after the last image
        setIsBouncing(true)
        setTimeout(() => setIsBouncing(false), 500) // Reset bounce
      } else {
        setCurrentIndex((prev) =>
          Math.min(prev + booksPerPage, books.length - booksPerPage)
        )
      }
    }
  }

  return (
    <div className='relative top-[150px]'>
      {/* Left Button */}
      <button
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[30%] bg-slate-50 bg-opacity-30 ${
          currentIndex === 0
            ? 'opacity-50 '
            : 'hover:border-[1px] border-amazon-orange'
        }`}
        onClick={() => handleScroll('previous')}
      >
        <Image
          src='/image/ads/left.svg'
          alt='left'
          width={24}
          height={24}
          className='object-contain'
        />
      </button>

      {/* Right Button */}
      <button
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[30%] right-0 bg-slate-50 bg-opacity-30 ${
          currentIndex >= books.length - booksPerPage
            ? 'opacity-50'
            : 'hover:border-[1px] border-amazon-orange'
        }`}
        onClick={() => handleScroll('next')}
      >
        <Image
          src='/image/ads/right.svg'
          alt='right'
          width={24}
          height={24}
          className='object-contain'
        />
      </button>

      {/* Books Container */}
      <div
        className='w-full h-[120px] bg-white flex justify-center items-center overflow-hidden'
        ref={containerRef}
      >
        <motion.div
          className='w-full flex'
          animate={{
            x: isBouncing
              ? currentIndex === 0
                ? -10 // Bounce slightly left if trying to scroll before the first image
                : -(currentIndex * 70) - 10 // Bounce slightly right if trying to scroll after the last image
              : -(currentIndex * 70),
          }}
          transition={{
            type: 'spring',
            stiffness: isBouncing ? 200 : 120, // Stronger spring for bounce
            damping: isBouncing ? 8 : 12, // Lower damping for faster return
          }}
          style={{
            transform: `translateX(-${currentIndex * 70}px)`,
          }}
        >
          {books.map((book, index) => (
            <div key={index} className='flex-shrink-0 w-[70px]'>
              <BookStructure image={book} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

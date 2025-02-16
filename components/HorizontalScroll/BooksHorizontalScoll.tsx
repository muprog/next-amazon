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
  {
    image: 'https://m.media-amazon.com/images/I/61azTLgsSwL._AC_SY200_.jpg',
    id: 1,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61sRSGAX-nL._AC_SY200_.jpg',
    id: 2,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61sjU1X-KqL._AC_SY200_.jpg',
    id: 3,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/711CKvXgXIL._AC_SY200_.jpg',
    id: 4,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61aSVNDdLpL._AC_SY200_.jpg',
    id: 5,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71+1CgqvXSL._AC_SY200_.jpg',
    id: 6,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61Ru8U7QaDL._AC_SY200_.jpg',
    id: 7,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61yGUfx1BXL._AC_SY200_.jpg',
    id: 8,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71F5mMqYqbL._AC_SY200_.jpg',
    id: 9,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71BJxI9-BRL._AC_SY200_.jpg',
    id: 10,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71MqVRGnV9L._AC_SY200_.jpg',
    id: 11,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71xECNGTXCL._AC_SY200_.jpg',
    id: 12,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61+4llHquKL._AC_SY200_.jpg',
    id: 13,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/610BuQeJYfL._AC_SY200_.jpg',
    id: 14,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/91HHqVTAJQL._AC_SY200_.jpg',
    id: 15,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61JVvfbopGL._AC_SY200_.jpg',
    id: 16,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/613NCL8CL+L._AC_SY200_.jpg',
    id: 17,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81kVF755NSL._AC_SY200_.jpg',
    id: 18,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71nkuDAEd1L._AC_SY200_.jpg',
    id: 19,
    category: 'book',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71CM7D5DZ0L._AC_SY200_.jpg',
    id: 20,
    category: 'book',
  },
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
      const singleBookWidth = 130 // Width of a single book (70px)
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
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[40%] bg-slate-50 bg-opacity-30 ${
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
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition absolute z-10 top-[40%] right-0 bg-slate-50 bg-opacity-30 ${
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
        className='w-full h-[220px] bg-white flex justify-center items-center overflow-hidden'
        ref={containerRef}
      >
        <motion.div
          className='w-full flex'
          animate={{
            x: isBouncing
              ? currentIndex === 0
                ? -10 // Bounce slightly left if trying to scroll before the first image
                : -(currentIndex * 130) - 10 // Bounce slightly right if trying to scroll after the last image
              : -(currentIndex * 130),
          }}
          transition={{
            type: 'spring',
            stiffness: isBouncing ? 200 : 120, // Stronger spring for bounce
            damping: isBouncing ? 8 : 12, // Lower damping for faster return
          }}
          style={{
            transform: `translateX(-${currentIndex * 130}px)`,
          }}
        >
          {books.map((book) => (
            <div key={book.id} className='flex-shrink-0 w-[130px]'>
              <BookStructure book={book} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

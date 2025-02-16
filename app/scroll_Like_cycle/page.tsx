// 'use client'
// import React, { useState } from 'react'

// export default function page() {
//   const [scroll, setScroll] = useState<string[]>([
//     'bg-green-500',
//     'bg-yellow-500',
//     'bg-red-500',
//   ])
//   function handleCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     if (Number(e.currentTarget.id) === 0) {
//       setScroll(
//         scroll.map((sc, index) => {
//           if (index < scroll.length - 1) {
//             return scroll[index + 1]
//           } else {
//             return scroll[0]
//           }
//         })
//       )
//     }
//     document
//       .getElementById(`${e.currentTarget.id}1`)
//       ?.scrollIntoView({ behavior: 'smooth' })
//   }
//   console.log(scroll)
//   return (
//     <div
//       className='flex overflow-x-hidden transition-all duration-1000 ease-in-out'
//       //   style={{
//       //     transform: `translateX(-${100}%)`,
//       //   }}
//     >
//       {scroll.map((s, index) => {
//         return (
//           <div
//             className={`${s} h-screen w-full flex-shrink-0 transition-all duration-500`}
//             id={`${index}1`}
//             key={index}
//           >
//             <button
//               className='bg-white py-2 px-1 rounded-full'
//               onClick={handleCLick}
//               id={`${index}`}
//             >
//               right
//             </button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// 'use client'
// import React, { useState } from 'react'

// export default function Page() {
//   const [scroll] = useState<string[]>([
//     'bg-green-500',
//     'bg-yellow-500',
//     'bg-red-500',
//     'bg-green-500', // Duplicate the first section for seamless looping
//   ])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTransitioning, setIsTransitioning] = useState(true)

//   function handleClick() {
//     // Calculate the next index
//     const nextIndex = currentIndex + 1

//     // If we reach the end of the array, reset to the first section without animation
//     if (nextIndex >= scroll.length - 1) {
//       setIsTransitioning(false) // Disable transition for the reset
//       setCurrentIndex(0) // Reset to the first section
//       setTimeout(() => {
//         setIsTransitioning(true) // Re-enable transition after reset
//       }, 0)
//     } else {
//       setCurrentIndex(nextIndex) // Move to the next section
//     }
//   }

//   return (
//     <div className='overflow-hidden w-full h-screen relative'>
//       <div
//         className='flex transition-all duration-500 ease-in-out'
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`, // Shift container to the left
//           transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none', // Disable transition for reset
//         }}
//       >
//         {scroll.map((s, index) => (
//           <div
//             key={index}
//             className={`${s} h-screen w-full flex-shrink-0 flex items-center justify-center`}
//           >
//             <button
//               className='bg-white py-2 px-4 rounded-full'
//               onClick={handleClick}
//             >
//               Scroll Right
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react'

export default function Page() {
  const [scroll] = useState<string[]>([
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-green-500', // Duplicate the first section for seamless looping
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  function handleClick() {
    // Calculate the next index
    const nextIndex = currentIndex + 1

    // If we reach the end of the array, reset to the first section without animation
    if (nextIndex >= scroll.length) {
      setIsTransitioning(false) // Disable transition for the reset
      setCurrentIndex(0) // Reset to the first section
      setTimeout(() => {
        setIsTransitioning(true) // Re-enable transition after reset
      }, 0)
    } else {
      setCurrentIndex(nextIndex) // Move to the next section
    }
  }

  return (
    <div className='overflow-hidden w-full h-screen relative'>
      <div
        className='flex transition-all duration-500 ease-in-out'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Shift container to the left
          transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none', // Disable transition for reset
        }}
      >
        {scroll.map((s, index) => (
          <div
            key={index}
            className={`${s} h-screen w-full flex-shrink-0 flex items-center justify-center`}
          >
            <button
              className='bg-white py-2 px-4 rounded-full'
              onClick={handleClick}
            >
              Scroll Right
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

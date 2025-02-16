// // 'use client'
// // import { useState } from 'react'

// // export default function MessageBox() {
// //   const [showMessage, setShowMessage] = useState(false)

// //   return (
// //     <div className='relative min-h-screen flex items-end justify-center'>
// //       {/* Hover Area */}
// //       <button
// //         onMouseEnter={() => setShowMessage(true)}
// //         onMouseLeave={() => setShowMessage(false)}
// //         className='p-3 bg-blue-500 text-white rounded-lg'
// //       >
// //         Hover Me
// //       </button>

// //       {/* Message Box */}
// //       {showMessage && (
// //         <div
// //           className=" bottom-14 w-[250px] bg-white text-black border  p-3 rounded-lg shadow-lg text-center absolute
// //         before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8
// //         before:border-transparent before:border-t-white before:border-t-8 before:border-b-[2px]"
// //         >
// //           This is a message box at the bottom!
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// 'use client'
// import { useState } from 'react'

// export default function MessageBox() {
//   const [showMessage, setShowMessage] = useState(false)

//   return (
//     <div className='relative min-h-screen flex items-center justify-center'>
//       {/* Button with Hover Effect */}
//       <div className='relative'>
//         <button
//           onMouseEnter={() => setShowMessage(true)}
//           onMouseLeave={() => setShowMessage(false)}
//           className='p-3 bg-blue-500 text-white rounded-lg'
//         >
//           Hover Me
//         </button>

//         {/* Message Box Positioned Below the Button */}
//         {showMessage && (
//           <div
//             className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[250px] bg-white text-black border
//             p-3 rounded-lg shadow-lg text-center
//             before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8
//             before:border-transparent before:border-b-white before:border-t-0"
//           >
//             This is a message box at the bottom!
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

'use client'
import { useState } from 'react'

export default function HoverPercentageBar() {
  const [showBar, setShowBar] = useState(false)

  return (
    <div className='flex flex-col items-center gap-3 p-4 relative'>
      {/* Progress Bar (Hidden until Hover) */}
      {showBar && (
        <div className='w-[300px] h-6 bg-white border border-black rounded-lg relative overflow-hidden shadow-lg'>
          <div
            className='h-full bg-blue-500 transition-all duration-300'
            style={{ width: `75%` }} // Fixed percentage (changeable)
          />
        </div>
      )}

      {/* Button with Hover Area at the Bottom */}
      <div
        className='relative group'
        onMouseEnter={() => setShowBar(true)}
        onMouseLeave={() => setShowBar(false)}
      >
        {/* Button */}
        <button className='p-3 bg-blue-500 text-white rounded-lg'>
          Hover Below Me
        </button>

        {/* Hoverable Area (Bottom Part) */}
        <div className='absolute bottom-[-12px] left-0 w-full h-6 bg-transparent group-hover:bg-gray-300 rounded-b-lg'></div>
      </div>
    </div>
  )
}

'use client'
import React, { useRef, useState } from 'react'

export default function page() {
  const [position, setPosition] = useState({ x: 0, y: 0, show: false })
  const imageRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (!imageRef.current) return
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect()

    const x = e.clientX - left
    const y = e.clientY - top

    const xPercent = (x / width) * 100
    const yPercent = (y / height) * 100

    if (x < 0 || x > width || y < 0 || y > height) {
      setPosition({ ...position, show: false })
      return
    }

    setPosition({ x: xPercent, y: yPercent, show: true })
  }
  const handleMouseLeave = () => {
    setPosition({ ...position, show: false })
  }

  return (
    <div className='pt-10 flex flex-shrink-0 gap-6 w-[200px]'>
      <div
        className='relative w-[150px] h-[150px]'
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src='/image/Books/ANIMALFARM.jpg'
          alt='Animal Farm.'
          className='object-contain w-full h-full'
        />
        {position.show && (
          <div
            className={` border-2 border-red-500 w-[20px] h-[20px]  absolute 
            }`}
            style={{
              left: `${position.x - 10}%`,
              top: `${position.y - 5}%`,
            }}
          ></div>
        )}
      </div>
      {position.show && (
        <div className=' w-[150px] h-[150px]'>
          <img
            src='/image/Books/ANIMALFARM.jpg'
            alt='Animal Farm.'
            className='object-contain w-full h-full'
          />
        </div>
      )}
    </div>
  )
}

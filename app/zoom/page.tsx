'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const ZoomImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, show: false })
  const imageRef = useRef<HTMLDivElement>(null)

  const zoomFactor = 2 // Adjust the zoom level

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect()

    let x = e.clientX - left
    let y = e.clientY - top

    // Convert to percentage (0-100%)
    let xPercent = (x / width) * 100
    let yPercent = (y / height) * 100

    // Ensure hover boundaries
    if (xPercent < 0 || xPercent > 100 || yPercent < 0 || yPercent > 100) {
      setPosition({ ...position, show: false })
      return
    }

    setPosition({ x: xPercent, y: yPercent, show: true })
  }

  const handleMouseLeave = () => {
    setPosition({ ...position, show: false })
  }

  return (
    <div className='relative flex gap-5'>
      {/* Original Image */}
      <div
        ref={imageRef}
        className='relative w-64 h-64 border border-gray-300 overflow-hidden'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src='/image/ads/beauty.jpg' // ✅ Corrected Local Image Path
          alt='Zoomable Image'
          width={256}
          height={256}
          className='w-full h-full object-cover'
        />
        {/* Hover Indicator */}
        {position.show && (
          <div
            className='absolute w-16 h-16 border border-blue-500 bg-white/30 pointer-events-none'
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        )}
      </div>

      {/* Zoomed Image Preview */}
      <div className='relative w-64 h-64 border border-gray-300 overflow-hidden bg-white'>
        {position.show && (
          <div
            className='absolute'
            style={{
              width: `${zoomFactor * 100}%`,
              height: `${zoomFactor * 100}%`,
              top: `${-position.y * zoomFactor}%`,
              left: `${-position.x * zoomFactor}%`,
              transform: 'translate(50%, 50%)',
            }}
          >
            <Image
              src='/image/ads/beauty.jpg' // ✅ Corrected Local Image Path
              alt='Zoomed Image'
              width={512}
              height={512}
              className='w-full h-full object-cover'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ZoomImage

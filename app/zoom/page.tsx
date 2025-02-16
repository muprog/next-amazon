//

'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const ZoomImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, show: false })
  const imageRef = useRef<HTMLDivElement>(null)
  const zoomFactor = 3 // Zoom factor for high resolution
  const zoomBoxSize = 30 // Size of the hover indicator
  const containerWidth = 40 // Width of the image container

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect()
    let x = e.clientX - left
    let y = e.clientY - top

    // Convert to percentage (0-100%)
    let xPercent = (x / width) * 100
    let yPercent = (y / height) * 100

    // Ensure boundaries
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
    <div className='flex gap-5 pt-10'>
      {/* Full Image (Original Position) */}
      <div
        ref={imageRef}
        className='relative'
        style={{
          width: `${containerWidth}vw`,
          height: '80vh',
          overflow: 'hidden',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src='/image/Books/HOUSEMAID.jpg' // Updated image URL
          alt='Product Image'
          width={600}
          height={600}
          className='w-full h-full object-cover'
        />

        {/* Transparent Hover Indicator */}
        {position.show && (
          <div
            className='absolute rounded-full bg-gray-300 opacity-30'
            style={{
              width: `${zoomBoxSize}px`,
              height: `${zoomBoxSize}px`,
              left: `calc(${position.x}% - ${zoomBoxSize / 2}px)`,
              top: `calc(${position.y}% - ${zoomBoxSize / 2}px)`,
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Zoomed Hovered Part (High Resolution in the next position) */}
      {position.show && (
        <div
          className='relative'
          style={{
            width: `${containerWidth}vw`,
            height: '80vh',
            overflow: 'hidden',
            border: '1px solid gray',
          }}
        >
          <div
            className='absolute'
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: "url('/image/Books/HOUSEMAID.jpg')",
              backgroundSize: `${zoomFactor * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ZoomImage

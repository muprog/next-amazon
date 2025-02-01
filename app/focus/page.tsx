'use client'
import { Combobox, ComboboxInput } from '@headlessui/react'
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [isOpen, setIsOpen] = useState(false)
  let inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  return (
    <div>
      <button
        className='bg-gray-500'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        click
      </button>
      {/* <input type='text' className='border' ref={inputRef} /> */}
      <Combobox>
        <ComboboxInput ref={inputRef} className='border' />
      </Combobox>
    </div>
  )
}

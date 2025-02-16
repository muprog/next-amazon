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
  const [loading, setLoading] = useState(false)
  function Loading() {}

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
      <div>
        <button
          className='text-white bg-amazon-orange rounded-full px-2 py-1'
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }}
        >
          Loading
        </button>
      </div>

      <div
        className={`border-4 border-t-slate-300 border-gray-500 w-5 h-5 rounded-full animate-spin ${
          loading ? 'block' : 'hidden'
        }`}
      ></div>
    </div>
  )
}

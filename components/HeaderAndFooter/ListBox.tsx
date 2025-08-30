'use client'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ListBOxProps } from '@/Types'
// const people = [
//   { id: 0, name: 'All' },
//   { id: 1, name: 'Adoniyas Seid' },
//   { id: 2, name: 'Alemu Kebede' },
//   { id: 3, name: 'Habtamu Lamesgin' },
//   { id: 4, name: 'Slenat Lamesgin' },
//   { id: 5, name: 'Adoniyas Seid' },
//   { id: 6, name: 'Alemu Kebede' },
//   { id: 7, name: 'Habtamu Lamesgin' },
//   { id: 8, name: 'Slenat Lamesgin' },
//   { id: 9, name: 'Adoniyas Seid' },
//   { id: 10, name: 'Alemu Kebede' },
//   { id: 11, name: 'Habtamu Lamesgin' },
//   { id: 12, name: 'Slenat Lamesgin' },
// ]
interface ListProps {
  id: number
  name: string
}
interface personProps {
  id: number
  category: string
  List: ListProps[]
}

const people1 = [
  {
    id: 0,
    category: 'All',
    List: [
      { id: 1, name: 'Fashions' },
      { id: 2, name: 'Game' },
      { id: 3, name: 'Home' },
      { id: 4, name: 'Kitchen' },
      { id: 5, name: 'Toy' },
    ],
  },
  {
    id: 1,
    category: 'Fashions',
    List: [
      { id: 1, name: 'Jeans' },
      { id: 2, name: 'Tops' },
      { id: 3, name: 'Shoes' },
      { id: 4, name: 'Dresses' },
    ],
  },
  {
    id: 2,
    category: 'Game',
    List: [
      { id: 1, name: 'Audio' },
      { id: 2, name: 'Keyboards' },
      { id: 3, name: 'Mice' },
      { id: 4, name: 'Chairs' },
    ],
  },
  {
    id: 3,
    category: 'Home',
    List: [
      { id: 1, name: 'Cleaning' },
      { id: 2, name: 'Storage' },
      { id: 3, name: 'Decor' },
      { id: 4, name: 'Bedding' },
    ],
  },
  {
    id: 4,
    category: 'Kitchen',
    List: [{ id: 1, name: 'Kitchen' }],
  },
  {
    id: 5,
    category: 'Toy',
    List: [{ id: 1, name: 'Toy' }],
  },
]

export default function ListBox({
  // isOptionSelected,
  // setIsOptionSelected,
  handleOptionSelected,
  selected,
  setSelected,
}: // inputRef,
ListBOxProps) {
  const handleChange = (newOption: personProps) => {
    // Custom logic
    setSelected(newOption) // Update the state
    handleOptionSelected()
  }

  // const [selected, setSelected] = useState(people[0])
  const [isOpen, setIsOpen] = useState(false)

  // console.log(isOptionSelected)
  useEffect(() => {
    setSelected(people1[0])
  }, [setSelected])
  return (
    <div
      className='h-full text-[12px] font-serif hover:text-black text-gray-600 relative'
      onFocus={() => setIsOpen(true)}
      onBlurCapture={() => setIsOpen(false)}
    >
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={`bg-gray-200 h-full rounded-l-[2px] flex justify-center items-center text-nowrap p-2 ${
            !isOpen ? '' : 'border-2 border-amazon-orange'
          } border-0`}
          // onBlurCapture={() => setIsOpen(false)}
        >
          {selected?.category}
          <Image
            src='/image/drop-down.svg'
            alt='down'
            width={15}
            height={15}
            //   className='object-contain'
          />
        </ListboxButton>
        <ListboxOptions
          anchor='bottom start'
          className={`border bg-white h-[50vh] p-1 font-amazon cursor-pointer z-20 max-h-[300px] overflow-hidden`}
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            width: '100%',
          }}
        >
          <div
            className='h-full overflow-y-auto'
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {people1.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className='data-[focus]:bg-gray-500  p-[1px] data-[focus]:text-white'
                // onClick={() => {
                //   setIsOptionSelected((prev) => !prev)
                // }}
              >
                {person.category}
              </ListboxOption>
            ))}
          </div>
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

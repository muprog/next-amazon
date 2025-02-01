// 'use client'
// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from '@headlessui/react'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { ListBOxProps } from '@/Types'
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

// export default function ListBox({
//   isOptionSelected,
//   setIsOptionSelected,
// }: // inputRef,
// ListBOxProps) {
//   const handleChange = (newOption: any) => {
//     // Custom logic
//     setSelected(newOption) // Update the state
//   }

//   const [selected, setSelected] = useState(people[0])
//   const [isOpen, setIsOpen] = useState(false)

//   // console.log(isOptionSelected)
//   return (
//     <div
//       className='h-full text-[8px] font-serif hover:text-black text-gray-600'
//       onFocus={() => setIsOpen(true)}
//       onBlurCapture={() => setIsOpen(false)}
//     >
//       <Listbox value={selected} onChange={handleChange}>
//         <ListboxButton
//           className={`bg-gray-200 h-full rounded-l-[2px] flex justify-center items-center text-nowrap p-2 ${
//             !isOpen ? '' : 'border-2 border-amazon-orange'
//           }`}
//           // onBlurCapture={() => setIsOpen(false)}
//         >
//           {selected.name}
//           <Image
//             src='/image/drop-down.svg'
//             alt='down'
//             width={15}
//             height={15}
//             //   className='object-contain'
//           />
//         </ListboxButton>
//         <ListboxOptions
//           anchor='bottom start'
//           className={`border bg-white h-[50vh] overflow-x-scroll p-1 font-amazon cursor-pointer`}
//         >
//           {people.map((person) => (
//             <ListboxOption
//               key={person.id}
//               value={person}
//               className='data-[focus]:bg-gray-500  text-[8px] p-[1px] data-[focus]:text-white'
//               // onClick={() => {
//               //   setIsOptionSelected((prev) => !prev)
//               // }}
//             >
//               {person.name}
//             </ListboxOption>
//           ))}
//         </ListboxOptions>
//       </Listbox>
//     </div>
//   )
// }

'use client'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { ListBOxProps } from '@/Types'

const people = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Adoniyas Seid' },
  { id: 2, name: 'Alemu Kebede' },
  { id: 3, name: 'Habtamu Lamesgin' },
  { id: 4, name: 'Slenat Lamesgin' },
  { id: 5, name: 'Adoniyas Seid' },
  { id: 6, name: 'Alemu Kebede' },
  { id: 7, name: 'Habtamu Lamesgin' },
  { id: 8, name: 'Slenat Lamesgin' },
  { id: 9, name: 'Adoniyas Seid' },
  { id: 10, name: 'Alemu Kebede' },
  { id: 11, name: 'Habtamu Lamesgin' },
  { id: 12, name: 'Slenat Lamesgin' },
]

export default function ListBox({
  isOptionSelected,
  setIsOptionSelected,
  handleOptionSelected,
}: ListBOxProps) {
  const [selected, setSelected] = useState(people[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (newOption: any) => {
    setSelected(newOption) // Update the selected option
    handleOptionSelected() // Notify SearchBar to handle option selection
  }

  return (
    <div
      className='h-full text-[8px] font-serif hover:text-black text-gray-600'
      onFocus={() => setIsOpen(true)}
      onBlurCapture={() => setIsOpen(false)}
    >
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={`bg-gray-200 h-full rounded-l-[2px] flex justify-center items-center text-nowrap p-2 ${
            !isOpen ? '' : 'border-2 border-amazon-orange'
          }`}
        >
          {selected.name}
          <Image src='/image/drop-down.svg' alt='down' width={15} height={15} />
        </ListboxButton>
        <ListboxOptions
          anchor='bottom start'
          className='border bg-white h-[50vh] overflow-x-scroll p-1 font-amazon cursor-pointer relative z-20'
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className='data-[focus]:bg-gray-500 text-[8px] p-[1px] data-[focus]:text-white'
            >
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

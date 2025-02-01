// 'use client'
// import Image from 'next/image'
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react'
// import React, { useEffect, useRef, useState } from 'react'
// import ListBox from './ListBox'
// const people = [
//   { id: 1, name: 'Adoniyas Seid' },
//   { id: 2, name: 'Alemu Kebede' },
//   { id: 3, name: 'Habtamu Lamesgin' },
//   { id: 4, name: 'Slenat Lamesgin' },
// ]
// export default function SearchBar() {
//   const [selected, setSelected] = useState<{ id: number; name: string } | null>(
//     people[0]
//   )
//   const [query, setQuery] = useState('')

//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) =>
//           person.name.toLowerCase().includes(query.toLowerCase())
//         )

//   const [isOpen, setIsOpen] = useState(false)
//   const [isListBoxOpen, setIsListBoxOpen] = useState(false)
//   const [isOptionSelected, setIsOptionSelected] = useState(false)
//   const inputRef = useRef<HTMLInputElement>(null)
//   if (isOptionSelected) {
//     inputRef.current?.focus()
//   }

//   return (
//     <div className='w-full'>
//       <div
//         className={`text-black flex-1 justify-center flex items-center h-[25px] rounded-[5px] ${
//           !isOpen ? '' : 'border-2 border-amazon-orange'
//         } w-full`}
//       >
//         <div className='h-full'>
//           <ListBox
//             isOptionSelected={isOptionSelected}
//             setIsOptionSelected={setIsOptionSelected}
//           />
//         </div>
//         {/* <button
//           onClick={() => setIsOptionSelected((prev) => !prev)}
//           className='bg-white'
//         >
//           click
//         </button> */}
//         <Combobox onChange={setSelected} onClose={() => setQuery('')}>
//           <ComboboxInput
//             displayValue={(person: object | any) => person?.name}
//             onChange={(e) => setQuery(e.target.value)}
//             className={`focus:outline-none px-1 py-1 h-full flex-1`}
//             placeholder='Search Amazon'
//             onClick={() => setIsOpen(true)}
//             onBlur={() => setIsOpen(false)}
//             ref={inputRef}
//           />
//           <ComboboxOptions
//             anchor='bottom start'
//             className={'border bg-white text-[10px] font-bold'}
//           >
//             {filteredPeople.map((person) => (
//               <ComboboxOption
//                 value={person}
//                 key={person.id}
//                 className='flex gap-1 cursor-pointer'
//               >
//                 <Image
//                   src='/image/search.svg'
//                   alt='search'
//                   width={10}
//                   height={10}
//                 />
//                 {person?.name}
//               </ComboboxOption>
//             ))}
//           </ComboboxOptions>
//         </Combobox>
//         <div className='h-full '>
//           <button className='bg-amazon-yellow relative w-[20px] h-full rounded-r-[2px] flex items-center justify-center'>
//             <Image
//               src={'/image/search.svg'}
//               alt='search'
//               width={14}
//               height={14}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import Image from 'next/image'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import React, { useEffect, useRef, useState } from 'react'
import ListBox from './ListBox'

const people = [
  { id: 1, name: 'Adoniyas Seid' },
  { id: 2, name: 'Alemu Kebede' },
  { id: 3, name: 'Habtamu Lamesgin' },
  { id: 4, name: 'Slenat Lamesgin' },
]

export default function SearchBar() {
  const [selected, setSelected] = useState<{ id: number; name: string } | null>(
    people[0]
  )
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isOptionSelected, setIsOptionSelected] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        )

  const handleOptionSelected = () => {
    setIsOptionSelected(true)
    setTimeout(() => {
      inputRef.current?.focus() // Set focus to the ComboboxInput after option selection
    }, 100)
  }

  return (
    <div className='w-full'>
      <div
        className={`text-black flex-1 justify-center flex items-center h-[25px] rounded-[5px] ${
          !isOpen ? '' : 'border-2 border-amazon-orange'
        } w-full`}
      >
        <div className='h-full'>
          <ListBox
            isOptionSelected={isOptionSelected}
            setIsOptionSelected={setIsOptionSelected}
            handleOptionSelected={handleOptionSelected}
          />
        </div>

        <Combobox onChange={setSelected} onClose={() => setQuery('')}>
          <ComboboxInput
            displayValue={(person: any) => person?.name}
            onChange={(e) => setQuery(e.target.value)}
            className={`focus:outline-none px-1 py-1 h-full flex-1`}
            placeholder='Search Amazon'
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            ref={inputRef}
          />
          <ComboboxOptions
            anchor='bottom start'
            className={
              'border bg-white text-[10px] font-bold text-nowrap relative z-10'
            }
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                value={person}
                key={person.id}
                className='flex gap-1 cursor-pointer'
              >
                <Image
                  src='/image/search.svg'
                  alt='search'
                  width={10}
                  height={10}
                />
                {person?.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>

        <div className='h-full'>
          <button className='bg-amazon-yellow relative w-[20px] h-full rounded-r-[2px] flex items-center justify-center'>
            <Image
              src={'/image/search.svg'}
              alt='search'
              width={14}
              height={14}
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

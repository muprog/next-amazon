'use client'
import Image from 'next/image'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import React, { useRef, useState } from 'react'
import ListBox from './ListBox'
import { useRouter } from 'next/navigation'

// const people = [
//   { id: 1, name: 'Adoniyas Seid' },
//   { id: 2, name: 'Alemu Kebede' },
//   { id: 3, name: 'Habtamu Lamesgin' },
//   { id: 4, name: 'Slenat Lamesgin' },
// ]

interface filteredPeopleProps {
  id: number
  name: string
}
// interface listProps {
//   id: number
//   name: string
// }

const people1 = [
  {
    id: 0,
    category: 'All',
    List: [
      { id: 1, name: 'Fashions' },
      { id: 2, name: 'Game' },
      { id: 3, name: 'home' },
      { id: 4, name: 'kitchen' },
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
    List: [{ id: 1, name: 'kitchen' }],
  },
  {
    id: 5,
    category: 'Books',
    List: [{ id: 1, name: 'books' }],
  },
  {
    id: 6,
    category: 'Toys',
    List: [{ id: 1, name: 'Toy' }],
  },
]

export default function SearchBar() {
  const [, setSelected] = useState<filteredPeopleProps>(people1[0].List[0])
  const [selectedListBox, setSelectedListBox] = useState({
    id: 0,
    category: 'All',
    List: [
      {
        id: 0,
        name: '',
      },
    ],
  })
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isOptionSelected, setIsOptionSelected] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // const filteredPeople =
  //   query === ''
  //     ? people1
  //     : people1.filter((person) =>
  //         person.category.toLowerCase().includes(query.toLowerCase())
  //       )

  const filteredPeople1 =
    selectedListBox &&
    (people1
      .find((person) =>
        person.category
          .toLowerCase()
          .includes(selectedListBox.category.toLowerCase())
      )
      ?.List.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      ) as filteredPeopleProps[])

  const router = useRouter()
  // useEffect(() => {}, [selectedListBox])
  const handleCategoryChange = (selectedOption: filteredPeopleProps) => {
    if (selectedOption?.name) {
      setSelected(selectedOption)
      router.push(`/category/${selectedOption.name}`)
    }
  }

  // console.log(filteredPeople1)

  const handleOptionSelected = () => {
    setIsOptionSelected(true)
    setTimeout(() => {
      inputRef.current?.focus() // Set focus to the ComboboxInput after option selection
    }, 100)
  }

  return (
    <div className='w-full'>
      <div
        className={`text-black flex-1 justify-center flex items-center h-[40px] rounded-[5px] ${
          !isOpen ? '' : 'border-2 border-amazon-orange'
        } w-full`}
      >
        <div className='h-full'>
          <ListBox
            isOptionSelected={isOptionSelected}
            setIsOptionSelected={setIsOptionSelected}
            handleOptionSelected={handleOptionSelected}
            selected={selectedListBox}
            setSelected={setSelectedListBox}
          />
        </div>

        <Combobox onChange={handleCategoryChange} onClose={() => setQuery('')}>
          <ComboboxInput
            displayValue={(person: filteredPeopleProps) => person?.name}
            onChange={(e) => setQuery(e.target.value)}
            className={`focus:outline-none px-1 py-1 h-full flex-1 text-[16px]`}
            placeholder='Search Amazon'
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            ref={inputRef}
          />
          <ComboboxOptions
            anchor='bottom start'
            className={
              'border bg-white text-[16px] font-bold text-nowrap relative z-10'
            }
          >
            {filteredPeople1?.map((person) => (
              <ComboboxOption
                value={person}
                key={person.id}
                className='flex gap-1 cursor-pointer'
              >
                <Image
                  src='/image/search.svg'
                  alt='search'
                  width={15}
                  height={15}
                />
                {person?.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>

        <div className='h-full'>
          <button className='bg-amazon-yellow relative w-[40px] h-full rounded-r-[2px] flex items-center justify-center'>
            <Image
              src={'/image/search.svg'}
              alt='search'
              width={25}
              height={25}
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

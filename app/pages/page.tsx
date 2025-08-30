'use client'
import { useState, useRef } from 'react'
import { Listbox, Combobox } from '@headlessui/react'

interface Person {
  id: number
  name: string
}

const people: Person[] = [
  { id: 1, name: 'Adoniyas Seid' },
  { id: 2, name: 'Alemu Kebede' },
  { id: 3, name: 'Habtamu Lamesgin' },
  { id: 4, name: 'Slenat Lamesgin' },
]

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [query, setQuery] = useState('')
  const comboboxInputRef = useRef<HTMLInputElement>(null)

  const handleListboxSelect = (person: Person) => {
    setSelectedPerson(person)
    setQuery('')
    setTimeout(() => {
      comboboxInputRef.current?.focus()
    }, 0)
  }

  return (
    <div className='flex flex-col items-center min-h-screen p-6 bg-gray-100'>
      <Listbox value={selectedPerson} onChange={handleListboxSelect}>
        <div className='relative mb-4'>
          <Listbox.Button className='w-64 px-4 py-2 text-left border rounded bg-white shadow'>
            {selectedPerson ? selectedPerson.name : 'Select a Person'}
          </Listbox.Button>
          <Listbox.Options className='absolute w-64 mt-2 bg-white border rounded shadow'>
            {people.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  `cursor-pointer p-2 ${active ? 'bg-gray-200' : 'bg-white'}`
                }
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      <Combobox value={null} onChange={() => {}}>
        <div className='w-64'>
          <Combobox.Input
            ref={comboboxInputRef}
            placeholder='Type here...'
            className='w-full px-4 py-2 border rounded shadow'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={() => comboboxInputRef.current?.focus()}
          />
        </div>
      </Combobox>
    </div>
  )
}

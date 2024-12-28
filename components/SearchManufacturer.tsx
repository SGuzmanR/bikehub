"use client"

import Image from 'next/image'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'

import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({ manufacturer, setManufacturer } : SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => (
        item.toLocaleLowerCase().replace(/\s+/g, '').includes(query.toLocaleLowerCase().replace(/\s+/g, ''))
      ));

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <ComboboxButton className="absolute top-[14px]">
            <Image src='/bike-logo.svg' alt='Bike Logo' width={20} height={20} className='ml-4' />
          </ComboboxButton>

          <ComboboxInput 
            className='search-manufacturer__input'
            placeholder='Kawasaki'
            displayValue={(manufacturer: string) => manufacturer}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                  <ComboboxOption 
                    key={item} 
                    className={({ active }) => `
                    relative search-manufacturer__option ${active ? 'bg-primary-green text-white' : 'text-gray-900'}
                    `}
                    value={item}
                  >
                    {item}
                  </ComboboxOption>
                )
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
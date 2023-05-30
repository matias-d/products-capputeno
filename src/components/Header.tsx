"use client"

import { Saira_Stencil_One } from 'next/font/google'
import { SearchBar } from './SearchBar'
import { CartControl } from './CartControl'
import { useFilter } from '@/hooks/useFilter'

const sairaStencil = Saira_Stencil_One({ 
    weight : ['400'],
    subsets: ['latin'] })


export function Header() {

  const { setSearch } = useFilter()

  const handleSearch = (value : string) => setSearch(value)

  return (
    <header className='px-8 lg:px-40 py-6 flex flex-col lg:flex-row justify-between items-center w-full bg-white'>
        <h1 className={`${sairaStencil.className} text-4xl text-[#5D5D6D]`}>capputeeno</h1>
        <section className='flex items-center gap-x-7'>
            <SearchBar onSearch={handleSearch}/>
            <CartControl />
        </section>
    </header>
  )
}

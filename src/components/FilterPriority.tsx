"use client"

import {RiArrowDropDownLine} from 'react-icons/ri'
import { useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { EPriority } from '@/types/Priority'
export function FilterPriority() {


  const [isOpen, setIsOpen] = useState(false)

  const {setPriority} = useFilter()

  const handleOpen = () => setIsOpen(!isOpen)

  const handleChangePriority = (value : EPriority) => {
    setPriority(value) 
    setIsOpen(false)
}


  return (
    <section className='relative'>
        <p className='text-[#737380] flex gap-x-4 items-center whitespace-nowrap cursor-pointer' onClick={handleOpen}>Organizar por <RiArrowDropDownLine className={`${isOpen ? 'rotate-0' : '-rotate-90'} text-4xl transition-transform`}/></p>
        
       {
        isOpen && (
            <article className='absolute z-10 -bottom-32 left-0 py-3 shadow rounded bg-white'>
            <ul className='flex flex-col gap-y-1'>
                <li className='text-sm text-[#737380] whitespace-nowrap cursor-pointer hover:bg-orange-300/20 transition-all hover:text-orange-400 px-4 py-0.5' onClick={() => handleChangePriority(EPriority.NEWS)}>Nuevos</li>
                <li className='text-sm text-[#737380] whitespace-nowrap cursor-pointer hover:bg-orange-300/20 transition-all hover:text-orange-400 px-4 py-0.5' onClick={() => handleChangePriority(EPriority.BIGGEST_PRICE)}>Precio: Mayor - Menor</li>
                <li className='text-sm text-[#737380] whitespace-nowrap cursor-pointer hover:bg-orange-300/20 transition-all hover:text-orange-400 px-4 py-0.5' onClick={() => handleChangePriority(EPriority.MINOR_PRICE)}>Precio: Menor - Mayor</li>
                <li className='text-sm text-[#737380] whitespace-nowrap cursor-pointer hover:bg-orange-300/20 transition-all hover:text-orange-400 px-4 py-0.5' onClick={() => handleChangePriority(EPriority.POPULARITY)}>Mas vendidos</li>
            </ul>
        </article>
        )
       }
    </section>
  )
}

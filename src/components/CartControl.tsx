"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { RiShoppingBag3Line } from 'react-icons/ri'

export function CartControl() {

  const { value } = useLocalStorage('cart-items', [])

  return (
    <div className='relative'>
        <RiShoppingBag3Line className='text-[#737380] text-2xl'/>
        {value.length > 0 && <span className='absolute -bottom-2 -right-2 bg-orange-500 text-white font-medium text-xs py-0.5 px-1.5 box-content text-center rounded-full'>{value.length}</span>}
    </div>

  )
}

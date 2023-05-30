import { ProductInCart } from '@/types/Product'
import { RiDeleteBinLine } from 'react-icons/ri'
import React from 'react'
import { formatPrice } from '@/utils/formatPrice'

type CartItemProps  = {
    product : ProductInCart
}

export function CartItem({product} : CartItemProps) {

  const price = formatPrice(product.price_in_cents)

  return (
    <article className='flex items-center gap-x-8 bg-white rounded-lg overflow-hidden pr-4'>
        <img src={product.image_url} alt={product.name} className='w-auto h-52 object-cover'/>
        <section>
            <div className='flex w-full items-center justify-between'>
                <h3 className='font-light text-[#41414D] text-xl'>{product.name}</h3>
                <RiDeleteBinLine className='text-2xl text-red-500'/>
            </div>
            <p className='mb-6 mt-3 font-normal text-xs text-[#41414D]'>{product.description}</p>
            <div className='flex w-full items-center justify-between'>
                <select value={product.quantity} className='rounded-lg border py-1.5 border-[#A8A8B3]'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <p className='text-black font-semibold'>{price}</p>
            </div>
        </section>
    </article>
  )
}

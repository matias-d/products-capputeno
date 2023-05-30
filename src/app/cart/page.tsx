"use client"

import { CartItem } from '@/components/cart/CartItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/Product'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'
import { RiArrowGoBackLine } from 'react-icons/ri'

export default function Cart() {

  const { value } = useLocalStorage<ProductInCart[]>('cart-items', [])

  const calculateTotal = (value : ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = formatPrice(calculateTotal(value))

  return (
    <main className='px-8 lg:px-40 bg-[#F0F0F5] min-h-screen'>
        <Link href='/' className="flex items-center gap-x-4 text-[#617480] text-sm py-6 justify-start  w-20">
            <RiArrowGoBackLine className="p-1 box-content rounded-full border-2 border-[#617480]  font-bold"/>
            Volver
        </Link>
        <section className='grid grid-cols-12 gap-x-8'>
            <section className='col-span-8'>
                <h3 className='text-[#41414D]  font-medium text-2xl mb-1.5'>TU CARRITO</h3>
                <p className='text-[#41414D] font-light '>Total ({value.length} productos) <span className='text-black font-bold'>{cartTotal}</span></p>

                <section className='grid grid-cols-1 gap-y-4'>
                    {
                        value.map(product => (
                            <CartItem product={product}/>
                        ))
                    }
                </section>
            </section>
            <section className='col-span-4 bg-green-400'>
                Hola
            </section>
        </section>
    </main>
  )
}

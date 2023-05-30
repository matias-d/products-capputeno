"use client"

import { CartItem } from '@/components/cart/CartItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/Product'
import { formatPrice } from '@/utils/formatPrice'
import { RiArrowGoBackLine } from 'react-icons/ri'
import Link from 'next/link'

export default function Cart() {

  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', [])

  const calculateTotal = (value : ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const handleUpdateQuantity = (id : string, quantity :  number) => {
    const newValue = value.map(item => {
        if(item.id !== id) return item
        return {
            ...item,
            quantity : quantity
        }
    })

    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id : string) => {
    const newValue = value.filter(item => item.id !== id)
    updateLocalStorage(newValue)
  }

  const cartTotal = formatPrice(calculateTotal(value))

  return (
    <main className='px-8 lg:px-40 bg-[#F0F0F5] min-h-screen pb-4'>
        <Link href='/' className="flex items-center gap-x-4 text-[#617480] text-sm py-6 justify-start  w-20">
            <RiArrowGoBackLine className="p-1 box-content rounded-full border-2 border-[#617480]  font-bold"/>
            Volver
        </Link>
        <section className='grid grid-cols-12 gap-x-8'>
            <section className='col-span-8'>
                <h3 className='text-[#41414D]  font-medium text-2xl mb-1.5'>TU CARRITO</h3>
                <p className='text-[#41414D] font-light mb-6'>Total ({value.length} productos) <span className='text-black font-bold'>{cartTotal}</span></p>

                <section className='grid grid-cols-1 gap-y-4'>
                    {
                        value.map(product => (
                            <CartItem handleUpdateQuantity={handleUpdateQuantity} product={product}
                            handleDelete={handleDeleteItem}
                            />
                        ))
                    }
                </section>
            </section>
            <section className='col-span-4 flex flex-col bg-white px-6 py-4 h-full justify-between '>
                <section>
                <h3 className='text-xl font-semibold text-[#41414D] mb-7'>RESUMEN DE PEDIDO</h3>
                <section className='flex flex-col gap-y-3 mb-10'>
                    <div className='flex items-center w-full justify-between'>
                        <h5 className='font-normal text-[#41414D]'>Subtotal de productos</h5>
                        <p className='text-[#41414D] font-normal'>{cartTotal}</p>
                    </div>
                    <div className='flex items-center w-full justify-between pb-6 border-b border-[#DCE2E5]'>
                        <h5 className='font-normal text-[#41414D]'>Entrega</h5>
                        <p className='text-[#41414D] font-normal'>$40,00</p>
                    </div>
                    <div className='flex items-center w-full justify-between'>
                        <h5 className='font-semibold text-[#41414D]'>Total</h5>
                        <p className='font-semibold text-[#41414D]'>{cartTotal + 40}</p>
                    </div>
                </section>
                <button className='bg-[#51B853] rounded text-white font-medium w-full text-2xl py-1.5 '>FINALIZAR COMPRA</button>
                </section>
                <footer className=''>
                    <ul className='flex flex-col gap-y-3 font-medium text-sm text-[#737380] underline'>
                        <li>AYUDA</li>
                        <li>REMBOLSOS</li>
                        <li>ENTREGAS</li>
                        <li>DEVOLUCIONES</li>
                    </ul>
                </footer>
            </section>
        </section>
    </main>
  )
}

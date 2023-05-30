import { ProductInCart } from '@/types/Product'
import { RiDeleteBinLine } from 'react-icons/ri'
import { formatPrice } from '@/utils/formatPrice'
import { ChangeEvent } from 'react'

type CartItemProps  = {
    product : ProductInCart
    handleUpdateQuantity : (id : string, quantity :number) => void
    handleDelete : (id : string) => void
}

export function CartItem({ product, handleUpdateQuantity, handleDelete } : CartItemProps) {

  const price = formatPrice(product.price_in_cents)

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id , Number(e.target.value))
  }

  return (
    <article className='flex items-center gap-x-8 bg-white rounded-lg overflow-hidden pr-4'>
        <img src={product.image_url} alt={product.name} className='w-auto h-52 object-cover'/>
        <section>
            <div className='flex w-full items-center justify-between'>
                <h3 className='font-light text-[#41414D] text-xl'>{product.name}</h3>
                <button onClick={() => handleDelete(product.id)} aria-label='delete button'>
                    <RiDeleteBinLine className='text-2xl text-red-500'/>
                </button>
            </div>
            <p className='mb-6 mt-3 font-normal text-xs text-[#41414D]'>{product.description}</p>
            <div className='flex w-full items-center justify-between'>
                <select value={product.quantity} 
                onChange={(e) => handleChange(e)}
                className='rounded-lg border py-2 px-2.5 border-[#A8A8B3] text-[#737380] font-normal outline-none'>
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

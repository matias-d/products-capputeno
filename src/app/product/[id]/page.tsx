"use client"
import { useProduct } from "@/hooks/useProduct";
import { RiArrowGoBackLine, RiShoppingBag3Line } from "react-icons/ri";
import { formatPrice } from '../../../utils/formatPrice'
import Link from "next/link";
import { toast } from "react-hot-toast";


type data = {
  success : (product : string) => void
  errorM : () => void
}

export default function HomeProduct({params} : {params : {id : string}}) {
  
  
  const { data } = useProduct(params.id)
  const price = formatPrice(data?.price_in_cents!)

  const handleAddToCart = () => {

    const msg : data  = {
      success : (product) => toast.success(`El producto ${product} ha sido agregado`),
      errorM : () => toast.error('Solo se admiten 5 items por producto')
    }

    let cartItems = localStorage.getItem('cart-items')

    if(cartItems) { // Si existen productos en el localStorage *
      let cartItemsArray = JSON.parse(cartItems)

      let productExistIndex = cartItemsArray.findIndex((item : {id : string }) => item.id === params.id)

      if(productExistIndex !== -1) { // Verificamos si el producto esta en el carrito
        if(cartItemsArray[productExistIndex].quantity < 5) { // Verificamos si ese producto no supera el limite de 5 productos que se pueden seleccionar 
          cartItemsArray[productExistIndex].quantity += 1 // Si el producto esta y no supera el el limite aumentamos la cantidad
          msg.success(data?.name!)
        }
        else msg.errorM() // Si supera el limite mandamos un mensaje de error
      }else{ // Si el producto no esta en el carrito insertamos ese producto al carrito, 
        cartItemsArray.push({...data, quantity : 1, id: params.id})
        msg.success(data?.name!)
      }
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else { // Si no existen productos en el localStorage, creamos el primero con los datos.

      const newCart = [{...data, quantity : 1,  id: params.id}]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
      msg.success(data?.name!)
    }

  }
  


  return (
    <main className="bg-[#F0F0F5] min-h-screen text-black font-bold px-8 lg:px-40">
      <Link href='/' className="flex items-center gap-x-4 text-[#617480] text-sm py-6">
        <RiArrowGoBackLine className="p-1 box-content rounded-full border-2 border-[#617480]  font-bold"/>
        Volver
      </Link>
      <section className="flex w-full  gap-x-8">
       <section className="flex-1">
        <img src={data?.image_url} alt={data?.name}/>
       </section>
        <section className="flex flex-col flex-1">
          <h4 className="text-[#41414D] font-normal mb-3 capitalize">{data?.category}</h4>
         <div className="mb-6 flex flex-col gap-y-1">
          <h2 className="text-[#41414D] text-3xl font-light">{data?.name}</h2>
            <p className="text-black font-semibold text-xl">{price}</p>
         </div>
          <p className="text-[#41414D] text-xs font-normal mb-14">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <div className="flex flex-col gap-y-2 basis-full">
            <h3 className="text-[#737380]">DESCRIPCION</h3>
            <p className="text-[#41414D] text-sm font-normal"> {data?.description}</p>
          </div>
          <button className="bg-[#115D8C] py-2.5 text-white flex gap-x-4 items-center justify-center font-normal tracking-widest rounded justify-self-end" onClick={handleAddToCart}><RiShoppingBag3Line className="text-2xl"/>AGREGAR AL CARRO</button>
        </section>
      </section>
    </main>
  )
}

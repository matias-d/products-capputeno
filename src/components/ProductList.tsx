"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard"
import { RiLoader4Fill } from "react-icons/ri"

export function ProductList() {

  const { data, loading } = useProducts()
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 px-8 lg:px-40 ">

      {
        loading && <div className="flex justify-center w-full items-center">
          <RiLoader4Fill className="text-4xl text-orange-400 animate-spin"/>
        </div>
      }

      {
        !loading && data?.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </section>
  )
}

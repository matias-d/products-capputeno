"use client"

import { FilterBar } from "@/components/FilterBar";
import { ProductList } from "@/components/ProductList";

export default function Home() {
  return (
      <main className="bg-[#F0F0F5] h-screen w-full">
        <FilterBar />
        <ProductList />
      </main>
  )
}

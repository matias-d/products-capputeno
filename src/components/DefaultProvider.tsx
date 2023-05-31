"use client"

import { FilterProvider } from "@/context/FilterContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

type DefaultProviderProps = {
    children : React.ReactNode
}

export function DefaultProvider({ children } : DefaultProviderProps) {

  const client  = new QueryClient()

  return (
    <QueryClientProvider client={client}>
        <FilterProvider>
            { children }
            <Toaster 
             position="top-right"
             reverseOrder={false}/>
        </FilterProvider>
    </QueryClientProvider>
  )
}

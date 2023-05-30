"use client"

import { FilterProvider } from "@/context/FilterContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type DefaultProviderProps = {
    children : React.ReactNode
}



export function DefaultProvider({ children } : DefaultProviderProps) {

  const client  = new QueryClient()

  return (
    <QueryClientProvider client={client}>
        <FilterProvider>
            { children }
        </FilterProvider>
    </QueryClientProvider>
  )
}

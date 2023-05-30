"use client"

import { TFilter } from "@/types/Filter";
import { EPriority } from "@/types/Priority";
import { createContext, useState } from "react";

export const FilterContext = createContext({
    search : '',
    page: 0,
    type : TFilter.ALL,
    priority : EPriority.NEWS,
    setPriority : (value : EPriority) => {},
    setSearch : (value: string) => {},
    setPage : (value: number) => {},
    setType : (value: TFilter) => {}
})

interface ProviderProps {
    children : React.ReactNode
}

export function FilterProvider ({children} : ProviderProps) {

    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(TFilter.ALL)
    const [priority, setPriority] = useState(EPriority.POPULARITY)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            priority,
            setSearch,
            setPage,
            setType,
            setPriority        
        }}>
            {children}
        </FilterContext.Provider>
    )
}
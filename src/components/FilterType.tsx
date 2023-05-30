"use client"
import { useFilter } from "@/hooks/useFilter"
import { TFilter } from "@/types/Filter"

export function FilterType() {

   const {type, setType} = useFilter()

   const handleChangeType = (value : TFilter) => setType(value)

  return (
    <ul className="flex gap-x-4 lg:gap-x-10 w-full">
        <li className={`${type === TFilter.ALL && 'border-b-4 font-semibold text-[#41414D]'} text-[#737380] font-normal cursor-pointer border-0 border-orange-400 pb-2`} onClick={() => handleChangeType(TFilter.ALL)}>TODOS LOS PRODUCTOS</li>
        <li className={`${type === TFilter.SHIRT && 'border-b-4 font-semibold text-[#41414D]'} text-[#737380] font-normal cursor-pointer border-0 border-orange-400 pb-2`} onClick={() => handleChangeType(TFilter.SHIRT)}>CAMISETAS</li>
        <li className={`${type === TFilter.MUG && 'border-b-4 font-semibold text-[#41414D]'} text-[#737380] font-normal cursor-pointer border-0 border-orange-400 pb-2`} onClick={() => handleChangeType(TFilter.MUG)}>TAZAS</li>
    </ul>
  )
}

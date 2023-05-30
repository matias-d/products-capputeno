import { RiSearchLine } from 'react-icons/ri'


type SearchProps = {
  onSearch : (value : string) => void
}

export function SearchBar( {onSearch} : SearchProps ) {
  return (
    <form className="relative">
        <input onChange={(event) => onSearch(event.target.value)} type="text" placeholder="Buscando por algo en especifico?" className="bg-[#F3F5F6] rounded-lg py-2.5 pl-4 text-[#737380] w-auto lg:w-80 outline-none pr-12"/>
        <RiSearchLine className='absolute top-1/2 -translate-y-1/2 right-4 text-[#737380] text-2xl'/>
    </form>
  )
}

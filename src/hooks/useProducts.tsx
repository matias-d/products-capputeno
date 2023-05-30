
import { ProductsFetch } from "@/types/ProductsFetch";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "./useFilter";
import axios, {AxiosPromise} from "axios";
import { mountQuery } from "@/utils/graphFilters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query : string): AxiosPromise<ProductsFetch> => {
    return axios.post(
    API_URL,{query}
    )
}

export function useProducts () {

    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query =  mountQuery(type, priority)
    const { data, isLoading } = useQuery({
        queryFn : () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime : 1000 * 60 * 1
    })

    const products = data?.data?.data?.allProducts

    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))


    return {
        data : filteredProducts,
        loading : isLoading
    }
}
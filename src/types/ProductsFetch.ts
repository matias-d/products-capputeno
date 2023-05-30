import { Product } from "./Product"

export interface ProductsFetch {
    data : {
        allProducts : Product[]
    }
}
export interface Product {
    name : string
    id: string
    price_in_cents : number
    image_url : string
    description? : string
    category? : string
}

export interface ProductFetch {
    data : {
        Product : Product
    }
}
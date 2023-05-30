import { Product } from "@/types/Product"
import { formatPrice } from "@/utils/formatPrice"
import Link from "next/link"

type ProductCardProp = {
    product : Product
}

export function ProductCard({product} : ProductCardProp) {

  const price = formatPrice(product.price_in_cents)

  return (
    <article className="flex flex-col gap-y-2  pb-2 bg-white rounded">
        <Link href={`/product/${product.id}`}>
          <img src={product.image_url} alt={product.name} className="rounded w-auto h-44 lg:h-72 object-cover"/>
        </Link>
        <div className="flex flex-col gap-y-2 px-3">
            <h3 className="font-light text-[#41414D] border-b-2 border-[#DCE2E6] pb-2">{product.name}</h3>
            <p className="font-semibold text-sm">{price}</p>
        </div>
    </article>
  )
}

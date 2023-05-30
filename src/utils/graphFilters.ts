import { EPriority } from "@/types/Priority"
import { TFilter } from "@/types/Filter";

function getCategoryByType(type : TFilter) {
    if(type === TFilter.MUG) return "mugs"
    if(type = TFilter.SHIRT) return "t-shirts"
    return ""
}

function getFieldByPriority(priority : EPriority) {
    if(priority === EPriority.NEWS) return {field : "created_at", order : "ASC"}
    if(priority === EPriority.BIGGEST_PRICE) return {field : "price_int_cents", order : "ASC"}
    if(priority === EPriority.MINOR_PRICE) return {field : "price_int_cents", order : "DSC"}
    return {field : "sales", order  : "DSC"}
}

export function mountQuery (type : TFilter, priority : EPriority) {

    if(type === TFilter.ALL && priority === EPriority.POPULARITY) return `query{
        allProducts {
          image_url  
          id
          name
          price_in_cents
        }
      }
    `

    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `query{
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''})  {
          image_url  
          id
          name
          price_in_cents
          category
        }
      }
    `
}
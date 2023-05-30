import { FilterPriority } from "./FilterPriority";
import { FilterType } from "./FilterType";

export function FilterBar() {
  return (
    <section className="px-8 gap-y-4 lg:px-40 py-8 flex flex-col lg:flex-row lg:items-center justify-between">
        <FilterType />
        <FilterPriority />
    </section>
  )
}

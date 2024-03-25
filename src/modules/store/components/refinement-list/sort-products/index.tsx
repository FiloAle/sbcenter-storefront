"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Ultimi arrivi",
  },
  {
    value: "price_asc",
    label: "Prezzo crescente",
  },
  {
    value: "price_desc",
    label: "Prezzo decrescente",
  },
]

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <FilterRadioGroup
      title="Ordina per"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
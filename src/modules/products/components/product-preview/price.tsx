import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-slate-400">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-slate-400", {
          "text-yellow-500 font-medium": price.price_type === "sale",
        })}
      >
        {price.calculated_price}
      </Text>
    </>
  )
}

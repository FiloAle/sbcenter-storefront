import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-ui-fg-base">
      <span
        className={clx("text-xl font-semibold", {
          "text-yellow-500": selectedPrice.price_type === "sale",
        })}
      >
        {selectedPrice.calculated_price}
        {selectedPrice.price_type === "sale" && (
          <>
            {" "}
            <span className="text-sm font-normal line-through text-slate-400">
              {selectedPrice.original_price}
            </span>
            <span className="text-xs font-normal text-yellow-500">
              {" ("}-{selectedPrice.percentage_diff}%{") "}
            </span>
          </>
        )}
      </span>
    </div>
  )
}

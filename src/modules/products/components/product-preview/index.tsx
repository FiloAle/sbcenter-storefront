import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { getProductsByCollectionHandle, retrievePricedProductById } from "@lib/data"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div className="transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
          className="!rounded-none !shadow-none border-b border-slate-600"
        />
        <div className="flex flex-col text-md mt-4 px-3 pb-4 sm:px-4 sm:pt-1 sm:pb-4 justify-between items-start">
          <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">{productPreview.title}</Text>
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}

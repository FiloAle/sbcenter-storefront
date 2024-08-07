"use client"

import { formatAmount } from "@lib/util/prices"
import { InformationCircleSolid } from "@medusajs/icons"
import { Cart, Order } from "@medusajs/medusa"
import { Tooltip } from "@medusajs/ui"
import React from "react"

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const { subtotal, discount_total, gift_card_total, shipping_total, total } =
    data

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: true,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 text-md text-slate-600">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            Subtotale
            <Tooltip
              className="font-sans"
              content="Totale dei prodotti, spedizione esclusa."
            >
              <InformationCircleSolid className="hidden lg:block text-slate-400" />
            </Tooltip>
          </span>
          <span>{getAmount(subtotal)}</span>
        </div>
        {!!discount_total && (
          <div className="flex items-center justify-between">
            <span>Sconto</span>
            <span className="text-yellow-500">
              - {getAmount(discount_total)}
            </span>
          </div>
        )}
        {!!gift_card_total && (
          <div className="flex items-center justify-between">
            <span>Gift card</span>
            <span className="text-yellow-500">
              - {getAmount(gift_card_total)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Spedizione</span>
          <span>{getAmount(shipping_total)}</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between text-ui-fg-base mb-2 text-xl">
        <span>Totale</span>
        <span className="text-xl">{getAmount(total)}</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals

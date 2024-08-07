"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { PillButton } from "@modules/common/components/pill-button"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Riepilogo
      </Heading>
      <Divider />
      <CartTotals data={cart} />
      <DiscountCode cart={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step}>
        <PillButton size="lg" variant="secondary_dark">Procedi all&apos;acquisto</PillButton>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary

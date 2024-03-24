import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer, getRegion } from "@lib/data"

import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Indirizzi",
  description: "Visualizza i tuoi indirizzi",
}

export default async function Addresses() {
  const nextHeaders = headers()
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Indirizzi di consegna</h1>
        <p className="text-base-regular">
          Visualizza e modifica i tuoi indirizzi di consegna per i prossimi acquisti. 
          Salvarli qui ti permetterà di risparmiare tempo al checkout.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}

import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveOrder } from "@lib/data"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return {
    title: `SB Center | Ordine #${order.display_id}`,
    description: `Visualizza i tuoi ordini`,
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}

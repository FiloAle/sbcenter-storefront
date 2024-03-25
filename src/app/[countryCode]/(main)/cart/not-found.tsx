import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "SB Center | 404",
  description: "Qualcosa è andato storto",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Pagina non trovata</h1>
      <p className="text-small-regular text-ui-fg-base">
        Il carrello che hai tentato di accedere non esiste. Cancella i tuoi cookies e riprova.
      </p>
      <InteractiveLink href="/">Torna alla pagina iniziale</InteractiveLink>
    </div>
  )
}

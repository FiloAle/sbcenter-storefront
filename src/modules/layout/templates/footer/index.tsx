import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import logo from "../../../../../public/sbcenter.svg"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="px-6 flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20 font-sans">
          <div>
            <LocalizedClientLink href="/">
              <Image
                src={logo}
                alt="SB Center"
                height={48}
                className="!cursor-pointer"
              />
            </LocalizedClientLink>
          </div>
          <div className="text-sm gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2 xsmall:col-end-3 col-span-1">
              <span className="text-sm txt-ui-fg-base">SB Center</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle text-sm">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-ui-fg-base">
                    Chi siamo
                  </LocalizedClientLink>
                </li>
                <li>
                  <a
                    href="mailto:candidature@sbcenter.it?subject=Candidatura di lavoro&body=Ciao! Vi lascio in allegato il mio Curriculum Vitae e rimango in attesa di una vostra valutazione in merito. Grazie!"
                    className="hover:text-ui-fg-base"
                  >
                    Lavora con noi
                  </a>
                </li>
                <li>
                  <LocalizedClientLink href="/credits" className="hover:text-ui-fg-base">
                    Crediti
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 xsmall:col-end-4 col-span-1">
              <span className="text-sm txt-ui-fg-base">Contatti</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle text-sm">
              <li>
                  <a href="mailto:servizioclienti@sbcenter.it" className="hover:text-ui-fg-base">
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:0323641369" className="hover:text-ui-fg-base">
                    Telefono
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sbcenter_di_simonabionda/" target="_blank" className="hover:text-ui-fg-base">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sbcenterdisimonabionda/" target="_blank" className="hover:text-ui-fg-base">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col xsmall:flex-row w-full mb-8 xsmall:mb-16 justify-between text-ui-fg-muted">
          <Text className="text-sm">
            © {new Date().getFullYear()} SB Center. Tutti i diritti riservati.
          </Text>
          <Text className="text-sm">
            P. IVA 01282460037
          </Text>
        </div>
      </div>
    </footer>
  )
}

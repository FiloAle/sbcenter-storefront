import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Credits from "@modules/layout/components/credits"
import logo from "../../../../../public/sbcenter.svg"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40 font-sans">
          <div>
            <LocalizedClientLink
              href="/"
            >
              <Image
              src={logo}
              alt="SB Center"
              height={48}
              className="!cursor-pointer"
              />
            </LocalizedClientLink>
          </div>
          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-sm txt-ui-fg-base">
                  Categorie
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle text-sm"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "text-sm"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-sm txt-ui-fg-base">
                  Prodotti
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="text-sm txt-ui-fg-base">SB Center</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle text-sm">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Dove trovarci
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="text-sm">
            © {new Date().getFullYear()} SB Center. Tutti i diritti riservati.
          </Text>
          <Credits />
        </div>
      </div>
    </footer>
  )
}

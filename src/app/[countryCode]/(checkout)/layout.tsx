import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/credits"
import Image from "next/image"
import logo from "../../../../public/sbcenter.svg"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-16 bg-white border-b ">
        <nav className="flex h-full items-center px-6 justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-sm text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0 transition-all text-slate-600 hover:text-yellow-500"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block text-md">
              Torna al carrello
            </span>
            <span className="mt-px block small:hidden text-md text-ui-fg-subtle hover:text-ui-fg-base">
              Indietro
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
          >
            <Image
              src={logo}
              alt="SB Center"
              height={36}
              className="transition-all duration-300 !cursor-pointer hover:scale-105"
            />
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative">{children}</div>
      <div className="py-4 w-full flex items-center justify-center">
        <MedusaCTA />
      </div>
    </div>
  )
}

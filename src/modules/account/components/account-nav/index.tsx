"use client"

import { Customer } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle, User, ChevronDown, MapPin, ReceiptPercent } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"

import { signOut } from "@modules/account/actions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AccountNav = ({
  customer,
}: {
  customer: Omit<Customer, "password_hash"> | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <div>
      <div className="small:hidden">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2"
          >
            <>
              <ChevronDown className="transform rotate-90" />
              <span>Account</span>
            </>
          </LocalizedClientLink>
        ) : (
          <>
            <div className="text-xl-semi mb-4 px-8">
              Ciao, {customer?.first_name}!
            </div>
            <div className="text-base-regular">
              <ul>
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <User />
                        <span>Profilo</span>
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <MapPin />
                        <span>Indirizzi</span>
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <div className="flex items-center gap-x-2">
                      <ReceiptPercent />
                      <span>Ordini</span>
                    </div>
                    <ChevronDown className="transform -rotate-90" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8 w-full text-red-500 focus:text-red-700"
                    onClick={handleLogout}
                  >
                    <div className="flex items-center gap-x-2">
                      <ArrowRightOnRectangle />
                      <span>Esci</span>
                    </div>
                    <ChevronDown className="transform -rotate-90" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="hidden small:block">
        <div>
          <div className="pb-4">
            <h3 className="text-base-semi">Account</h3>
          </div>
          <div className="text-base-regular">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink href="/account" route={route!}>
                  Riepilogo
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/profile" route={route!}>
                  Profilo
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/addresses" route={route!}>
                  Indirizzi
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/orders" route={route!}>
                  Ordini
                </AccountNavLink>
              </li>
              <li className="text-red-500 hover:text-red-700">
                <button type="button" onClick={handleLogout}>
                  Esci
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
}

const AccountNavLink = ({ href, route, children }: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  return (
    <LocalizedClientLink
      href={href}
      className={clx("text-ui-fg-subtle hover:text-ui-fg-base", {
        "text-ui-fg-base font-semibold": active,
      })}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav

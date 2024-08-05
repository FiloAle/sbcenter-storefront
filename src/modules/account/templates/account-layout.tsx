import React from "react"

import AccountNav from "../components/account-nav"
import { Customer } from "@medusajs/medusa"
import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"

interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
        <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">Domande?</h3>
            <span className="text-md">
              Chiedi aiuto al nostro servizio clienti.
            </span>
          </div>
          <a href="mailto:servizioclienti@sbcenter.it" className="flex gap-x-1 items-center group text-yellow-500 hover:text-yellow-600 transition-all duration-300">
            <Text>
              Servizio clienti
            </Text>
            <ArrowUpRightMini className="group-hover:rotate-45 transition-transform duration-300"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout

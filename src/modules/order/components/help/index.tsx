import { Heading, Text } from "@medusajs/ui"
import React from "react"
import { ArrowUpRightMini } from "@medusajs/icons"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Hai bisogno di aiuto?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
          <a href="mailto:servizioclienti@sbcenter.it" className="flex gap-x-1 items-center group text-yellow-500 hover:text-yellow-600 transition-all duration-300">
            <Text>
              Contattaci
            </Text>
            <ArrowUpRightMini className="group-hover:rotate-45 transition-transform duration-300"/>
          </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help

import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const Credits = () => {
  return (
    <Text className="flex txt-sm items-center">
      Realizzato da&nbsp;
      <a href="https://www.medusajs.com" target="_blank" className="transition-all hover:text-black">
        Filippo
      </a>
      &nbsp;e&nbsp;
      <a href="https://nextjs.org" target="_blank" className="transition-all hover:text-black">
        Luca
      </a>
      .
    </Text>
  )
}

export default Credits

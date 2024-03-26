import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Realizzato da
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa className="transition-all duration-300 fill-[#aaaaaa] hover:fill-[#000000]"/>
      </a>
      e
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs className="transition-all duration-300 fill-[#aaaaaa] hover:fill-[#000000]"/>
      </a>
    </Text>
  )
}

export default MedusaCTA

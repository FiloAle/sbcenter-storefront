import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group text-yellow-500 hover:text-yellow-600"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text>{children}</Text>
      <ArrowUpRightMini
        className="group-hover:rotate-45 duration-200"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink

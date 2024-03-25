import { Heading } from "@medusajs/ui"
import Image from 'next/image'
import { ChevronRightMini } from "@medusajs/icons"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import bgImage from "../../../../../public/spa.jpg"

const Hero = () => {
  return (
    <div className="h-[75vh] p-5 pb-0 w-full relative flex justify-center items-center">
      <Image
        src={bgImage}
        alt="SPA"
        quality={80}
        style={{
          objectFit: 'cover',
        }}
        className="h-full brightness-50 rounded-xl"
      />
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-4xl leading-10 text-ui-fg-on-color font-serif"
          >
            La tua bellezza<br/>ha un'anima.
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <PillButton variant="primary" className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none">
            Scopri la SPA <ChevronRightMini className="mt-px -me-1"/>
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
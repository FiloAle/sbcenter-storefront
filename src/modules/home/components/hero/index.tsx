import { Heading } from "@medusajs/ui"
import Image from 'next/image'
import { ChevronRightMini } from "@medusajs/icons"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import bgImage from '../../../../../public/spa.jpg'

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative">
      <Image
        src={bgImage}
        alt="SPA"
        quality={80}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-on-color font-normal"
          >
            La tua bellezza<br/>ha un'anima.
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <PillButton variant="primary">
            Scopri la SPA <ChevronRightMini />
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
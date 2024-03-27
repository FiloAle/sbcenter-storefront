import { Heading } from "@medusajs/ui"
import Image from 'next/image'
import { ChevronRightMini } from "@medusajs/icons"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import bgImage from "../../../../../public/servizi.jpg"

const HeroSecondary = () => {
  return (
    <div className="h-[75vh] py-5 px-6 w-full relative flex justify-center items-center">
      <Image
        src={bgImage}
        alt="Servizi"
        quality={100}
        style={{
          objectFit: 'cover',
        }}
        className="h-full brightness-75 rounded-xl shadow-md"
      />
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl leading-10 text-white font-serif"
          >
            Il tuo benessere<br/>parte da qui.
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <PillButton variant="primary" className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none">
            Scopri i servizi <ChevronRightMini className="-me-1"/>
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default HeroSecondary
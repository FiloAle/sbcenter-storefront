import { Metadata } from "next"

import HeroAbout from "@modules/home/components/hero-about"
import { Text } from "@medusajs/ui"
import Image from "next/image"
import omegna from "../../../../../public/omegna.jpg"
import arona from "../../../../../public/arona.jpg"

export const metadata: Metadata = {
  title: "SB Center | Chi siamo",
  description: "Scopri di più su di noi.",
}

export default async function About() {
  return (
    <>
      <HeroAbout />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <div className="px-6">
            <div className="flex justify-between mb-4">
              <Text className="text-2xl font-serif">Vieni a trovarci</Text>
            </div>
            <ul className="grid grid-cols-1 xsmall:grid-cols-2 gap-6">
              <li>
                <a
                  href="https://maps.app.goo.gl/JeWozpaRGnJWt6taA"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden">
                        <Image
                            src={omegna}
                            alt="Omegna"
                            className="h-52 xsmall:h-96 inset-0 object-cover object-center border-b border-slate-600 group-hover/card:opacity-80 transition-all duration-300"
                            draggable={false}
                        />
                        <div className="flex flex-col text-md p-4 pt-5 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Omegna (VB)
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    Via Luigi Comoli, 38
                                </Text>
                            </div>
                        </div>
                    </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sxNk7dsBxQFGrUKS6"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden">
                        <Image
                            src={arona}
                            alt="Arona"
                            className="h-52 xsmall:h-96 inset-0 object-cover object-center border-b border-slate-600 group-hover/card:opacity-80 transition-all duration-300"
                            draggable={false}
                        />
                        <div className="flex flex-col text-md p-4 pt-5 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Arona (NO)
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    Via Amizzone Conte, 4
                                </Text>
                            </div>
                        </div>
                    </div>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  )
}

import { Metadata } from "next"

import { Text } from "@medusajs/ui"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: "SB Center | Crediti",
  description: "Scopri di più sugli sviluppatori.",
}

export default async function Credits() {
  return (
    <>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <div className="px-6">
            <div className="flex justify-between mb-4">
              <Text className="text-2xl font-serif">Team di sviluppo</Text>
            </div>
            <ul className="grid grid-cols-1 xsmall:grid-cols-2 gap-6">
              <li>
                <a
                  href="https://www.filippoalessandrini.com"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden flex flex-row items-center justify-between">
                        <div className="flex flex-col text-md p-4 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Filippo Alessandrini
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    Sviluppatore
                                </Text>
                            </div>
                        </div>
                        <ChevronRightIcon className="h-6 pe-2 text-slate-600"/>
                    </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/molinari.lucaa"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden flex flex-row items-center justify-between">
                        <div className="flex flex-col text-md p-4 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Luca Molinari
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    UI/UX designer
                                </Text>
                            </div>
                        </div>
                        <ChevronRightIcon className="h-6 pe-2 text-slate-600"/>
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

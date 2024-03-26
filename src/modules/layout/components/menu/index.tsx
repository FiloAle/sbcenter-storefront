"use client"

import { Popover, Transition } from "@headlessui/react"
import { BarsThree } from "@medusajs/icons"
import { useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Cerca: "/search",
  Account: "/account",
  Carrello: "/cart",
}

const SideMenu = () => {
    const toggleState = useToggleState()
    
    return (
        <Popover className="h-full">
            {({ open, close }) => (
            <>
                <div className="h-full flex items-center">
                    <Popover.Button className="text-slate-600 transition-all focus:outline-none hover:text-yellow-500">
                        <BarsThree/>
                    </Popover.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-0"
                    enterTo="opacity-100 translate-y-1"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-1"
                    leaveTo="opacity-0 translate-y-0"
                >
                    <Popover.Panel className="absolute z-10 mt-4 -ms-1 w-56 origin-top-left rounded-xl bg-white shadow-md border border-slate-200 focus:outline-none">
                        <div className="py-3 px-4">
                            <ul className="flex flex-col gap-2 items-start justify-start">
                                {Object.entries(SideMenuItems).map(([name, href]) => {
                                return (
                                    <li key={name}>
                                    <LocalizedClientLink
                                        href={href}
                                        className="text-lg text-slate-600 transition-all hover:text-yellow-500"
                                        onClick={close}
                                    >
                                        {name}
                                    </LocalizedClientLink>
                                    </li>
                                )
                                })}
                            </ul>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    )
}

export default SideMenu
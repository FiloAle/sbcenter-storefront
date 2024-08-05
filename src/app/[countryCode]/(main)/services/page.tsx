import { Metadata } from "next"

import HeroSPA from "@modules/home/components/hero-spa"
import { Text } from "@medusajs/ui"
import sbservices from "./services.json"

export const metadata: Metadata = {
  title: "SB Center | Servizi",
  description: "Scopri tutti i nostri trattamenti.",
}

export default async function Services() {
  return (
    <>
        <HeroSPA />
        <div className="py-12 scroll-mt-10" id="treatments">
            <ul className="flex flex-col gap-x-6">
                <div className="px-6">
                    <div className="flex justify-between mb-4">
                        <Text className="text-2xl font-serif">Trattamenti SB Center</Text>
                    </div>
                    <div className="rounded-xl border border-slate-600 shadow-md px-6 pt-4">
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Personal care</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.sb.personalcare.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Epilazione</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.sb.epilazione.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Massaggi</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.sb.massaggi.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <div className="flex justify-between mb-4 mt-12">
                        <Text className="text-2xl font-serif">Trattamenti Esthelogue</Text>
                    </div>
                    <div className="rounded-xl border border-slate-600 shadow-md px-6 pt-4">
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Epilazione</Text>
                            </div>
                            <ul className="grid grid-cols-1 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.esth.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <div className="flex justify-between mb-4 mt-12">
                        <Text className="text-2xl font-serif">Trattamenti DiBi</Text>
                    </div>
                    <div className="rounded-xl border border-slate-600 shadow-md px-6 pt-4">
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti manuali viso</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.dibi.manualiviso.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti manuali corpo</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.dibi.manualicorpo.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti DiBi viso</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.dibi.dibiviso.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti DiBi corpo</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.dibi.dibicorpo.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-6 scroll-mt-10" id="SPA">
                    <div className="flex justify-between mb-4 mt-12">
                        <Text className="text-2xl font-serif">Trattamenti Comfort Zone</Text>
                    </div>
                    <div className="rounded-xl border border-slate-600 shadow-md px-6 pt-4">
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti viso</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.cz.viso.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Trattamenti corpo</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.cz.corpo.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Rituali</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.cz.rituali.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <Text className="text-lg font-sans text-yellow-500">Ingressi SPA</Text>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-1 text-slate-600">
                                {sbservices.cz.spa.map((service) => (
                                    <li className="flex flex-row justify-between">
                                        <Text>{service.name}</Text>
                                        <Text>{service.price}€</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </>
  )
}

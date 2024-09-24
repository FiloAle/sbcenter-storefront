"use client"

import { Heading } from "@medusajs/ui"
import { useEffect, useState } from "react";

export default function CookieModal() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(typeof window !== "undefined" && localStorage.getItem("cookie_consent") != "true") {
            setIsOpen((isOpen) => true);
        } else {
            setIsOpen((isOpen) => false);
        }
    }, []);

    function toggle() {
        setIsOpen((isOpen) => false);
        localStorage.setItem("cookie_consent","true");
    }

    return (
        <div>
            {isOpen &&
                <div className="z-50 fixed bottom-0 left-0">
                    <div className="p-6 h-64 w-full xsmall:w-96 content-end">
                        <div className="p-4 flex flex-col gap-y-3 bg-white shadow-lg rounded-xl border">
                            <Heading
                                level="h2"
                            >
                                Mmh, cookies! 🍪
                            </Heading>
                            <p className="font-light text-sm mb-2.5">
                                Questo sito utilizza soltanto alcuni cookie tecnici per funzionare correttamente.
                            </p>
                            <button
                                className="w-full p-2 mb-0.5 gap-x-1 bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-center text-white font-medium rounded-md transition-all duration-300"
                                onClick={toggle}
                            >
                                Va bene, accetto
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

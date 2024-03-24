import { Metadata } from "next"
import "styles/globals.css"
// import { Urbanist } from "next/font/google"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

/* const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
}) */

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="it" data-mode="light" /* className={urbanist.className} */>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

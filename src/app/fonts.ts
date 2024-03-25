import { Playfair, Urbanist } from 'next/font/google'
 
export const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})
 
export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})
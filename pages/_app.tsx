import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import Navbar from '@/components/sections/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  </>
  )
}
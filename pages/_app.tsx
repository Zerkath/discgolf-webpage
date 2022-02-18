import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

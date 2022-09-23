import '../styles/globals.css'
import "@jahlgren/react-drawer/dist/index.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: any) => page)
  return getLayout(<Component {...pageProps} />);
}

export default MyApp

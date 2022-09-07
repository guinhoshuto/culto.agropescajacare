import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp

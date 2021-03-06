import Layout from '../components/layout'
import React, { useEffect } from 'react'
import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
// eslint-disable-next-line @typescript-eslint/naming-convention
const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    OneSignal.push(() => {
      OneSignal.init({
        appId: '93b47c56-e8fa-434e-a102-06994dcf584c',
        safari_web_id:
          'web.onesignal.auto.2fe112ef-4554-4496-8fef-42f5ec2b9118',
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      })
    })

    return () => {
      window.OneSignal = undefined
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
export default MyApp

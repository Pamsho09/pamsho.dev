import Layout from '../components/layout'
import React, { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    OneSignal.push(() => {
      OneSignal.init({
        appId: '93b47c56-e8fa-434e-a102-06994dcf584c',
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

import Layout from '../components/layout'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: any): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
export default MyApp

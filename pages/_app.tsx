import Layout from '../components/layout'
import React from 'react'
const MyApp = ({ Component, pageProps }: any): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp

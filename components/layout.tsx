import React from 'react'

import Footer from './footer'
import { useAccessRoute } from 'hook/api/useLogin'

const Layout = ({ children }: any): JSX.Element => {
  useAccessRoute()
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'

import Footer from './footer'
import { useAccessRoute } from 'hook/api/useLogin'
import Header from './header'

const Layout = ({ children }: any): JSX.Element => {
  useAccessRoute()
  return (
    <div className="w-full max-w-[1152px] m-auto min-h-screen flex flex-col pl-5 pr-5 ">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: any): JSX.Element => (
  <div className="w-full max-w-[1152px] m-auto min-h-screen flex flex-col pl-5 pr-5 ">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout

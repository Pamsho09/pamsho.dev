import React from 'react'
import Header from './header'
import Footer from './footer'

import styled, { createGlobalStyle } from 'styled-components'
const LayoutC = styled.div`
  width: 100%;
  max-width: 1152px;
  margin: auto;
  display: grid;
  font-family: Inter;
`
const Global = createGlobalStyle`
body,html{
  margin:0;
  padding:0;
}`
const Layout = ({ children }: any): JSX.Element => (
  <LayoutC>
    <Header />
    {children}
    <Footer />
    <Global />
  </LayoutC>
)

export default Layout

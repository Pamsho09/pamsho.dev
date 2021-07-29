import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import styled from "styled-components";
const LayoutC = styled.div`
width: 100%;
max-width:1152px;
margin:auto;
display: grid;
font-family: Inter;

`
function Layout({ children }) {
  
  return (
    <LayoutC>
      <Header />
      {children}
      <Footer />
    </LayoutC>
  );
}

export default Layout;

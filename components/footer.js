import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterC = styled.footer`
@media (min-width: 450.1px) {
  width: 100%;
  height: 4em;
  padding: 0 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .container-social{
      display: flex;
     justify-content: space-between;
     align-items: center;
     a{
         margin-right: 1em
     }
     
  }
}
@media (max-width: 450px) { width: 100%;
  height: 4em;

  display:grid;
  place-items: center;
  
  .container-social{
    width: 50%;
      display: flex;
     justify-content: space-between;
     align-items: center;
    
     
  }}
 
`;
function Footer() {
  return (
    <FooterC>
      <div className="container">
        <span>
          <b>Pamsho_js</b> 2020 copyright all rights reserved
        </span>
      </div>
      <div className="container-social">
        <a
          rel="noreferrer"
          href="https://www.instagram.com/pamsho_js"
          target="_blank"
          className="social-fb"
        >
          <Image src="/icons/instagram.svg" width={20} height={20} alt="instagram"/>
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/pamsho-js/"
          target="_blank"
          className="social-tw"
        >
          <Image src="/icons/linkedin.svg" width={20} height={20} alt="linkedin" />{" "}
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/Pamsho09"
          target="_blank"
          className="social-ig"
        >
          <Image src="/icons/github.svg" width={20} height={20}  alt="Twitter"/>{" "}
        </a>
      </div>
    </FooterC>
  );
}

export default Footer;

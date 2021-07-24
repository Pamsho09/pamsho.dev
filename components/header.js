import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 3em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      list-style-type: none;
      padding: 0;
      margin: 0;
      font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #000000;
      li{
          margin: 1em;

    }}
  }
`;
//crea un nav con una lista con blog y home
function Header() {
  return (
    <HeaderContainer>
      <h1>Pamsho.dev</h1>

      <nav>
        <ul>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

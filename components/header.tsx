import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const HeaderContainer = styled.header`
  @media (min-width: 450.1px) {
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
    a {
      color: #000000;
      text-decoration: none;
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

        li {
          margin: 1em;
        }
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 3em;

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
    a {
      color: #000000;
      text-decoration: none;
    }
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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

        li {
          margin: 1em;
        }
      }
    }
  }
`

const Header = (): JSX.Element => (
  <HeaderContainer>
    <Link href="/">
      <a>
        <h1>Pamsho.dev</h1>
      </a>
    </Link>
    <nav>
      <ul>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <li>Proyectos</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
      </ul>
    </nav>
  </HeaderContainer>
)

export default Header

import React from 'react'
import Link from 'next/link'

const Header = (): JSX.Element => (
  <div className="w-full h-12 flex overflow-hidden justify-between items-center m-4 ">
    <Link href="/">
      <a>
        <h1 className="font-bold text-xl">Pamsho.dev</h1>
      </a>
    </Link>
    <nav className="w-full overflow-x-scroll  md:overflow-hidden flex flex-col justify-start items-center ">
      <ul className="w-full flex justify-start md:justify-end items-center p-0 m-0 text-base ">
        <Link href="/blog">
          <a>
            <li className="m-4">Blog</li>
          </a>
        </Link>
        <Link href="/courses">
          <a>
            <li className="m-4">Cursos</li>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <li className="m-4">Proyectos</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li className="m-4">About</li>
          </a>
        </Link>
      </ul>
    </nav>
  </div>
)

export default Header

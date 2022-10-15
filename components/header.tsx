import Link from 'next/link'
import React, { useState } from 'react'
import { useUserStore } from 'store/useUserStore'
import ItemNav from './itemNav'
export interface IRoutes {
  url?: string
  name: string
  child?: IRoutes[]
}
const Header = () => {
  const { activeUserAccount } = useUserStore()
  const routes: IRoutes[] = [
    {
      name: 'Proyectos',
      url: '/projects',
    },
    {
      name: 'About',
      url: '/about',
    },
  ]
  if (activeUserAccount.accessToken) {
    routes.push({
      name: 'tools',
      child: [
        {
          name: 'Dashboard',
          url: '/admin/dashboard',
        },
      ],
    })
  }
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <header className="w-full flex justify-between  items-center mt-4">
        <Link href={'/'}>
          <h1 className="font-bold text-2xl cursor-pointer">Pamsho.dev</h1>
        </Link>
        <div
          className="w-10 md:hidden cursor-pointer hover:border-2 rounded-md hover:border-slate-800"
          onClick={() => setIsShow(true)}
        >
          <img src="/icons/menu.svg " className="w-full" />
        </div>
        <div
          className={`w-full  md:w-auto fixed md:relative md:h-auto h-screen top-0   left-0 z-20 ${
            isShow ? 'flex' : 'hidden'
          } md:flex`}
        >
          <div
            className="w-full h-screen absolute bg-slate-800/30 md:hidden"
            onClick={() => setIsShow(false)}
          ></div>
          <nav
            className={`w-3/5 absolute md:relative md:flex z-20 h-screen md:h-auto bg-white rounded-r-xl p-4  `}
          >
            <ul className="md:flex md:gap-3 ">
              {routes.map((route, index) => (
                <ItemNav
                  key={index}
                  route={route}
                  action={() => setIsShow(false)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header

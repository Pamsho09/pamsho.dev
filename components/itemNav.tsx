import Link from 'next/link'
import React, { useState } from 'react'
import { IRoutes } from './header'
interface IProps {
  route: IRoutes
  action: () => void
}

const ItemNav = ({ route, action }: IProps) => {
  const [isShowOpt, setIsShowOpt] = useState(false)
  return (
    <div
      className={`w-full  transition  duration-100 ease-in-out md:relative  rounded-md ${
        route.child && isShowOpt ? 'bg-slate-400' : ''
      }`}
    >
      <Link href={route.url || '#'}>
        <div
          className="w-full py-4 px-2 md:py-2 hover:bg-slate-600 rounded-md hover:font-bold hover:text-white transition  duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            setIsShowOpt(!isShowOpt)
            if (!route.child) {
              action()
            }
          }}
        >
          {route.name}
        </div>
      </Link>
      <div
        className="md:absolute md:w-32
        md:h-auto
        z-50
        md:left-[-140%]
      md:bg-slate-400
      md:rounded-md
      "
      >
        {route.child &&
          isShowOpt &&
          route.child.map((route, index) => (
            <Link href={route.url || '#'} key={index}>
              <div
                className="w-full py-4 px-2 hover:bg-slate-600 rounded-md hover:font-bold text-white transition  duration-300 ease-in-out cursor-pointer "
                onClick={() => {
                  action()
                  setIsShowOpt(!isShowOpt)
                }}
              >
                {route.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
export default ItemNav

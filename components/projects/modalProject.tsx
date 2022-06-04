import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import { PortableText } from '@/lib/sanity'

interface IData {
  _id: string
  image: any
  name: string
  bio: any
  urlRepo: string
  urlDemo: string
}
interface IProps {
  data: IData
  click: () => void
}
const ModalProject = ({ click, data }: IProps) => (
  <>
    <div className="w-full h-screen fixed left-0 top-0 z-20  md:grid place-items-center">
      <div
        className="w-full h-screen  fixed left-0 top-0  bg-slate-900/40"
        onClick={click}
      ></div>
      <div className="bg-white w-full md:w-auto md:max-w-6/12 z-30 box-border flex flex-col p-8 h-[60vh] absolute rounded-t-lg md:rounded-xl items-center bottom-0 md:bottom-auto pb-0">
        <h2>{data.name}</h2>
        <div className="prose flex-1 overflow-auto">
          <PortableText className="" blocks={data.bio} />
        </div>
        <div className="w-full flex justify-between items-center pt-4">
          <a
            href={data.urlDemo}
            target="_blank"
            rel="noreferrer"
            className=" grid items-center text-slate-900"
          >
            <Image src="/icons/wool.svg" width={40} height={40} alt="demo" />
            <h5 className=" m-3">Demo</h5>
          </a>
          <a href={data.urlRepo} target="_blank" rel="noreferrer">
            <Image src="/icons/folder.svg" width={40} height={40} alt="repo" />
            <h5>Repo</h5>
          </a>
        </div>
      </div>
    </div>
  </>
)

export default ModalProject

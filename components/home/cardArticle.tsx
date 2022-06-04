import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { convertDate } from '../../lib/utils'

interface Idata {
  title: string
  body: any
  mainImage: any
  slug: any
  publishedAt: string
}
interface Iprops {
  data: Idata
  head: boolean
}
const CardArticle = ({ data }: Iprops): JSX.Element => {
  const { title, mainImage, slug, publishedAt } = data
  const date = convertDate(publishedAt)
  const widthDesktop = 433
  const heightDesktop = 247

  return (
    <div className="m-2 w-full overflow-hidden bg-white  box-border shadow-lg rounded-md flex  items-center justify-end flex-col-reverse h-80">
      <div className="grid p-0 pl-5 pr-5 mt-8 ">
        <h4 className="font-bold text-xl m-0 text-hero-color ">{title}</h4>
        <div className="w-full flex justify-between mt-6">
          <span className="text-xs text-slate-500">{date}</span>
          <Link href={`/post/${slug.current}`}>
            <a className="text-xs font-bold text-slate-800">Leer mas</a>
          </Link>
        </div>
      </div>
      <div className="grid place-items-center h-[179px] w-full ">
        <Image
          src={urlFor(mainImage).url()}
          width={widthDesktop}
          height={heightDesktop}
          className="m-auto h-[179px] w-full "
          alt=""
        />
      </div>
    </div>
  )
}

export default CardArticle

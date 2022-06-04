import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { convertDate } from '../../lib/utils'

const widthDesktop = 433
const heightDesktop = 247
const Card = (props: any): JSX.Element => {
  const date = convertDate(props.publishedAt)
  return (
    <>
      <Link href={`/post/${props.slug.current}`}>
        <a>
          <div className="w-full flex flex-col  gap-1  h-64 shadow-md overflow-hidden rounded-md">
            <div className="w-full h-48 rounded-md">
              <Image
                className="w-full h-48"
                src={urlFor(props.mainImage).url()}
                width={widthDesktop}
                height={heightDesktop}
                alt={props.title}
              />
            </div>
            <div className="w-full grid  p-3 ">
              <h4 className="font-bold text-sm m-0 text-hero-color">
                {props.title}
              </h4>

              <div className="w-full flex justify-between">
                <span className="font-normal text-xs text-slate-500">
                  {date}
                </span>
              </div>
            </div>
          </div>{' '}
        </a>
      </Link>
    </>
  )
}

export default Card

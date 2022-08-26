import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { PortableText, urlFor } from '@/lib/sanity'

interface ISocial {
  name: string
  url: string
  color: string
  icon: string
}

const About = ({ data }: any): JSX.Element => (
  <div className="w-full flex flex-col items-center pt-4 gap-3 md:flex-col-reverse ">
    <div className="w-full grid gap-4 ">
      <h3 className="w-full text-center font-bold text-2xl">
        Mas de pamsho aqui 👇
      </h3>
      <div className="w-full grid gap-2 ">
        {data.social.map((social: ISocial) => (
          <>
            <a
              key={social.name}
              className="my-1 mx-0 no-underline "
              rel="noreferrer"
              target="_blank"
              href={social.url}
            >
              <div
                className={`box-border p-2 border-t-2 border-l-4 border-r-2 border-b-4  flex items-center justify-between rounded-md hover:border-b-2 hover:border-l-2 animate-pulse `}
                style={{ borderColor: social.color, color: social.color }}
              >
                <div
                  className="p-2 flex items-center justify-between rounded-full "
                  style={{
                    background: social.color,
                  }}
                >
                  <Image
                    src={urlFor(social.icon).url()}
                    width={30}
                    height={30}
                  />
                </div>
                <span className=" capitalize font-bold">{social.name}</span>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>{' '}
    <div className="flex  flex-col-reverse gap-3 mt-10">
      <div className="w-full flex flex-col items-center pt-4 prose">
        <h4>{data.specialty}</h4>
        <PortableText blocks={data.bio[0]} />
      </div>
      <Image
        className="w-52 rounded-full object-contain h-52"
        src={urlFor(data.image).url()}
        width={300}
        height={300}
      />
      <h1 className="w-full font-bold text-xl text-center">{data.name}</h1>
    </div>
  </div>
)

export default About
const Query = groq`
*[_type == "author" ][0]{
  bio,image,name,social,specialty
}
`
export const getServerSideProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(Query)
  return {
    props: {
      preview,
      data,
    },
  }
}

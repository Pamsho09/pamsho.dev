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
  <div className="w-full flex flex-col items-center pt-4 ">
    <div className="grid place-items-center">
      <Image
        className="w-52 rounded-full"
        src={urlFor(data.image).url()}
        width={300}
        height={300}
      />
      <h1 className="w-full font-bold text-xl text-center">{data.name}</h1>
    </div>
    <div className="w-full flex flex-col items-center pt-4 prose">
      <h4>{data.specialty}</h4>
      <PortableText blocks={data.bio[0]} />

      <div className="w-full grid">
        <h3>Puedes seguirme en mis redes sociales uwu.</h3>
        <div className="w-full grid ">
          {data.social.map((social: ISocial) => (
            <>
              <a
                key={social.name}
                className="my-1 mx-0 no-underline"
                rel="noreferrer"
                target="_blank"
                href={social.url}
              >
                <div
                  className={`box-border p-2  flex items-center justify-between rounded-md`}
                  style={{ backgroundColor: social.color }}
                >
                  <Image
                    src={urlFor(social.icon).url()}
                    width={30}
                    height={30}
                  />
                  <span className="text-white capitalize font-bold">
                    {social.name}
                  </span>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
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

import { PortableText } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

const Video = ({ data }: any) => (
  <div className="w-full p-4 flex flex-col justify-center items-center    place-items-center">
    <div className="w-full flex justify-start">
      <h1 className="font-bold text-4xl my-4">Curso basico de react</h1>
    </div>
    <div className="w-full flex flex-col md:flex-row  m:h-auto flex-1 gap-4 ">
      <div className="w-full md:w-10/12 overflow-hidden  flex-1 m:h-auto">
        <iframe
          className=" w-full  h-[204px] md:h-[504px]
            mb-4 rounded-md"
          src={data.urlVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container-resource-bonus w-full md:w-2/12 flex flex-col gap-4">
        {data.nextVideo && (
          <Link href={`/courses/video/${data.nextVideo.slug.current}`}>
            <a className="w-full bg-green-600 rounded-md grid place-items-center box-border cursor-pointer">
              <h4 className="font-bold text-xl text-justify text-white">
                Siguiente leccion
              </h4>
              <span className="m-0 font-normal text-base text-white">
                {data.nextVideo.title}
              </span>
            </a>
          </Link>
        )}
        <h3 className="font-bold text-2xl text-justify">Recursos:</h3>
        <ul className="flex flex-wrap ">
          {data.resource.map((resource: any, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="m-2 cursor-pointer w-auto h-auto"
            >
              <li className="py-2 px-4 bg-red-500 rounded-md text-base text-center text-white">
                {resource.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
    <div className="prose md:prose-xl w-full mt-4">
      <PortableText blocks={data.body[0].body} />
    </div>
  </div>
)

export default Video
const videoQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    title,
    urlVideo,
    resource,
    "slug": slug.current,
    "body" : body[]->,
   "nextVideo": nextVideo->{title, slug}
  }
`

export const getServerSideProps = async ({ params, preview = false }) => {
  if (!params.slug || params.slug === '') {
    return {
      notFound: true,
    }
  }
  const video = await getClient(preview).fetch(videoQuery, {
    slug: params.slug,
  })

  if (!video || video.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      preview,
      data: { ...video },
    },
  }
}

// export const getStaticPaths = async () => {
//   const paths = await getClient().fetch(
//     groq`*[_type == "video" && defined(slug.current)][].slug.current`
//   )

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: false,
//   }
// }

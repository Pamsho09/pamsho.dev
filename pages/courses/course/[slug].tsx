import { CourseCard } from '@/components/course/card'
import { urlFor } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'

const Course = ({ data }: any) => {
  const router = useRouter()
  return (
    <div className="w-full p-4 flex-1">
      <div className="w-full flex items-center justify-center gap-4  px-4  md:justify-around flex-wrap bg-slate-900/50 py-8 md:py-12 rounded-md text-white">
        <div className=" w-72 md:w-96">
          <img
            src={urlFor(data.image).url()}
            className="w-full h-56 md:h-48 rounded-md"
            alt=""
          />
        </div>
        <div className="w-80 ">
          <h1 className="m-0 font-bold text-4xl">{data.title}</h1>
          <h4 className="font-bold text-base ">
            Estatus del curso : {data.status[0]}
          </h4>

          <div className="grid mt-4">
            <span className="font-normal text-lg">
              Conocimientos basicos para el curso:
            </span>
            <div className="flex flex-wrap">
              {data.skills.map((skill: any, index: number) => (
                <span
                  key={index}
                  className="mx-1 my-4 font-bold text-sm text-center  p-2 bg-green-500/60 rounded-full text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid mt-6 overflow-hidden">
        <h1 className="font-bold  text-2xl w-full">Curso</h1>
        <div className="w-full flex  flex-wrap items-start justify-start ">
          {data.video.map((item, index) => (
            <CourseCard
              key={item['_id']}
              course={{
                title: `Clase ${index + 1}`,
                description: item.title,
                image: urlFor(item.image).url(),
              }}
              onClick={() => router.push(`/courses/video/${item.slug.current}`)}
            />
          ))}
          {data.video.map((item, index) => (
            <CourseCard
              key={item['_id']}
              course={{
                title: `Clase ${index + 1}`,
                description: item.title,
                image: urlFor(item.image).url(),
              }}
              onClick={() => router.push(`/courses/video/${item.slug.current}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Course
const courseQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    status,
    image,
   "video":video[]->,
   skills, 
    "slug": slug.current
  }
`

export const getStaticProps = async ({ params, preview = false }) => {
  if (!params.slug || params.slug === '') {
    return {
      notFound: true,
    }
  }
  const course = await getClient(preview).fetch(courseQuery, {
    slug: params.slug,
  })

  if (!course || course.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview,
      data: { ...course },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "course" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

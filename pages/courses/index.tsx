import { CourseCard } from '@/components/course/card'
import { config } from '@/lib/config'
import { urlFor } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'

const postQuery = groq`
  *[_type == "course" ][0..10] {
    _id,
    title,
    image,
    status,
    slug,
    
  }
`

const Index = ({ status, course }: any) => {
  const router = useRouter()
  return (
    <div className="w-full flex-1">
      <h3 className="font-bold text-2xl">Cursos</h3>
      <div className="grid place-items-center">
        {status === 'true' ? (
          <div className="box-border w-full flex flex-wrap justify-start items-start w-full">
            {course.map((item: any) => (
              <CourseCard
                key={item['_id']}
                course={{
                  title: item.title,
                  description: item.status[0],
                  image: urlFor(item.image).url(),
                }}
                onClick={() =>
                  router.push(`/courses/course/${item.slug.current}`)
                }
              />
            ))}
          </div>
        ) : (
          <div className="m-auto grid place-items-center">
            <img src="./not_course.jpg" alt="no hay c" />
            <h2 className="m-0 font-bold">Horita no hay cursos </h2>
            <h3 className="font-bold">De nada, vuelva pronto</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
export const getServerSideProps = async ({ preview = false }) => {
  const course = await getClient(preview).fetch(postQuery)

  return {
    props: {
      course,
      status: config.course,
    },
  }
}

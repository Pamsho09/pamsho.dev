import { CourseCard } from '@/components/course/card'
import { config } from '@/lib/config'
import { urlFor } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const Course = styled.div`
  width: 100%;
  padding: 1em;
  min-height: 90vh;
  .container {
    display: grid;
    place-items: center;
    .container_cards {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .cheems {
      margin: auto;
      display: grid;
      place-items: center;
      h2 {
        margin: 0;
      }
    }
    width: 100%;
  }
`
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
  console.log(course)
  return (
    <Course>
      <h3>Cursos</h3>
      <div className="container">
        {status === 'true' ? (
          <div className="container_cards">
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
          <div className="cheems">
            <img src="./not_course.jpg" alt="no hay c" />
            <h2>Horita no hay cursos </h2>
            <h3>De nada, vuelva pronto</h3>
          </div>
        )}
      </div>
    </Course>
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

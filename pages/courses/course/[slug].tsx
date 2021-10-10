import { CourseCard } from '@/components/course/card'
import { urlFor } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const CourseC = styled.div`
  width: 100%;
  padding: 1em;
  min-height: 80vh;
  box-sizing: border-box;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (min-width: 450.1px) {
      .container-image {
        width: 404px;

        img {
          width: 100%;
          height: 230px;
          border-radius: 16px;
        }
      }
    }
    @media (max-width: 450px) {
      .container-image {
        width: 333px;
        img {
          width: 100%;
          height: 190px;
          border-radius: 16px;
        }
      }
    }
    .container-info {
      width: 333px;
      h1 {
        margin: 0;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;
      }
      h4 {
        margin: 0;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
      }
      .container-info-skills {
        display: grid;
        margin-top: 1em;
        .container-content {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 19px;
          line-height: 23px;
        }
        .container-info-skill {
          display: flex;
          flex-wrap: wrap;
          .skill {
            margin: 0.5em 1em;
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            padding: 0.5em;
            background: #65f711;
            border-radius: 11px;
            color: #ffffff;
          }
        }
      }
    }
  }
  .container-course {
    width: 100%;
    display: grid;
    .container-cards {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`
const Course = ({ data }: any) => {
  const router = useRouter()
  return (
    <CourseC>
      <div className="container">
        <div className="container-image">
          <img src={urlFor(data.image).url()} alt="" />
        </div>
        <div className="container-info">
          <h1>{data.title}</h1>
          <h4>Estatus del curso : {data.status[0]}</h4>

          <div className="container-info-skills">
            <span className="container-content">
              Conocimientos basicos para el curso:
            </span>
            <div className="container-info-skill">
              {data.skills.map((skill: any, index: number) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-course">
        <h1 className="cours-title">Curso</h1>
        <div className="container-cards">
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
    </CourseC>
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

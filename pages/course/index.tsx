import { CourseCard } from '@/components/course/card'
import { config } from '@/lib/config'
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
const dataCourse = {
  title: 'Curso de React',
  description: 'Curso de React',
  image:
    'https://images.ctfassets.net/51xdmtqw3t2p/7uZBRK6RYCqDyh3VJcCstt/fb73abd3fb2d1d82189163f84988f2eb/WEBHOOK4.jpg?w=1280&h=1080&q=50',
}
const index = ({ status }: any) => {
  console.log(status)
  return (
    <Course>
      <h3>Cursos</h3>
      <div className="container">
        {status === 'true' ? (
          <div className="container_cards">
            <CourseCard course={dataCourse} onClick={() => null} />
            <CourseCard course={dataCourse} onClick={() => null} />
            <CourseCard course={dataCourse} onClick={() => null} />
            <CourseCard course={dataCourse} onClick={() => null} />
            <CourseCard course={dataCourse} onClick={() => null} />
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

export default index
export const getServerSideProps = () => ({
  props: {
    status: config.course,
  },
})

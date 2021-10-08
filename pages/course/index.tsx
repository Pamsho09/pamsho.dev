import { CourseCard } from '@/components/course/card'
import React from 'react'
import styled from 'styled-components'
const Course = styled.div`
  width: 100%;
  padding: 1em;
  .container_cards {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
const dataCourse = {
  title: 'Curso de React',
  description: 'Curso de React',
  image:
    'https://images.ctfassets.net/51xdmtqw3t2p/7uZBRK6RYCqDyh3VJcCstt/fb73abd3fb2d1d82189163f84988f2eb/WEBHOOK4.jpg?w=1280&h=1080&q=50',
}
const index = () => (
  <Course>
    <div className="container">
      <h3>Cursos</h3>
      <div className="container_cards">
        <CourseCard course={dataCourse} onClick={() => null} />
        <CourseCard course={dataCourse} onClick={() => null} />
        <CourseCard course={dataCourse} onClick={() => null} />
        <CourseCard course={dataCourse} onClick={() => null} />
        <CourseCard course={dataCourse} onClick={() => null} />
      </div>
    </div>
  </Course>
)

export default index

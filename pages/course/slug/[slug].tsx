import { CourseCard } from '@/components/course/card'
import React from 'react'
import styled from 'styled-components'
const CourseC = styled.div`
  width: 100%;
  padding: 1em;
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
    }
  }
`
const Course = () => {
  const dataCourse = {
    title: 'Curso de React',
    description: 'Curso de React',
    image:
      'https://images.ctfassets.net/51xdmtqw3t2p/7uZBRK6RYCqDyh3VJcCstt/fb73abd3fb2d1d82189163f84988f2eb/WEBHOOK4.jpg?w=1280&h=1080&q=50',
  }
  return (
    <CourseC>
      <div className="container">
        <div className="container-image">
          <img
            src="https://images.ctfassets.net/51xdmtqw3t2p/7uZBRK6RYCqDyh3VJcCstt/fb73abd3fb2d1d82189163f84988f2eb/WEBHOOK4.jpg?w=1280&h=1080&q=50"
            alt=""
          />
        </div>
        <div className="container-info">
          <h1>Curso basico de react</h1>
          <h4>Cursos en progreso</h4>

          <div className="container-info-skills">
            <span className="container-content">
              Conocimientos basicos para el curso:
            </span>
            <div className="container-info-skill">
              <span className="skill">HTML</span>
              <span className="skill">JavaScript</span>
              <span className="skill">HTML</span>
              <span className="skill">JavaScript</span>
              <span className="skill">HTML</span>
              <span className="skill">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-course">
        <h1 className="cours-title">Curso</h1>
        <div className="container-cards">
          <CourseCard course={dataCourse} onClick={() => null} />
          <CourseCard course={dataCourse} onClick={() => null} />
          <CourseCard course={dataCourse} onClick={() => null} />
          <CourseCard course={dataCourse} onClick={() => null} />
          <CourseCard course={dataCourse} onClick={() => null} />
        </div>
      </div>
    </CourseC>
  )
}
export default Course

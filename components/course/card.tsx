import React from 'react'
import styled from 'styled-components'
const CourseCardC = styled.div`
  margin: 1em;
  width: 300px;
  height: 187px;
  position: relative;
  cursor: pointer;
  .course-card__image {
    width: 100%;
    img {
      width: 300px;
      height: 187px;
      border-radius: 16px;
    }
  }
  .course-card__content {
    position: absolute;
    width: 296px;
    background: rgba(0, 0, 0, 0.54);
    border-radius: 7px 7px 16px 16px;
    height: 40px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .course-card__title {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 21px;
      margin: 0px;

      color: #ffffff;
    }
    .course-card__description {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      margin: 0px;
      color: #ffffff;
    }
  }
`
interface IProps {
  course: {
    title: string
    description: string
    image: string
  }
  onClick: () => void
}

export const CourseCard = ({ course, onClick }: IProps): JSX.Element => (
  <CourseCardC className="course-card" onClick={onClick}>
    <div className="course-card__image">
      <img src={course.image} alt={course.title} />
    </div>
    <div className="course-card__content">
      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__description">{course.description}</p>
    </div>
  </CourseCardC>
)

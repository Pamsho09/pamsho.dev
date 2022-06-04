import React from 'react'
interface IProps {
  course: {
    title: string
    description: string
    image: string
  }
  onClick: () => void
}

export const CourseCard = ({ course, onClick }: IProps): JSX.Element => (
  <div
    className="m-4 w-72 min-w-72 h-48 cursor-pointer relative box-border"
    onClick={onClick}
  >
    <div className="w-full h-48 ">
      <img
        src={course.image}
        className="w-full h-full rounded-md"
        alt={course.title}
      />
    </div>
    <div className="absolute w-full grid place-items-center p-2 pb-1 bottom-[1px]">
      <div className=" w-full bg-black/70 rounded-t-sm rounded-b-md h-10   flex flex-col items-center justify-center ">
        <h3 className="font-bold text-base m-0 text-white">{course.title}</h3>
        <p className="font-normal text-sm m-0 text-white">
          {course.description}
        </p>
      </div>
    </div>
  </div>
)

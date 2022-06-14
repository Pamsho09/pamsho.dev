import React from 'react'

interface IProps {
  label: string
  onClick: () => void
}
const Button = (props: IProps) => (
  <div
    className="w-full  py-4 px-8 bg-slate-700 text-white rounded-md text-bold text-center "
    onClick={props.onClick}
  >
    {props.label}
  </div>
)

export default Button

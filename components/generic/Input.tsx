import React from 'react'

type input = 'text' | 'email' | 'password'
interface IProps {
  type: input
  value: string
  placeholder: string
  onChange: (value: string) => void
}
const Input = (props: IProps) => (
  <div className="w-full py-4 px-8 border-2 bg-white rounded-md">
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      className="w-full bg-white d no-underline outline-none font-bold placeholder-inherit text-slate-700"
      onChange={(e) => props.onChange(e.currentTarget.value)}
    />
  </div>
)

export default Input

import Button from '../../components/generic/Button'
import Input from '../../components/generic/Input'
import { useLogin } from '../../hook/api/useLogin'
import React from 'react'

const Index = () => {
  const { user, changeUser, handleSubmit } = useLogin()
  return (
    <div className="flex-1 w-full grid place-items-center admin">
      <div className=" w-full md:w-6/12 m-auto shadow-md p-8 flex flex-col gap-8 rounded-md">
        <h1 className="font-bold text-lg text-center w-full">Login</h1>
        <Input
          onChange={(e: string) => {
            changeUser('email', e)
          }}
          placeholder="Email"
          value={user.email}
          type="email"
        ></Input>
        <Input
          onChange={(e: string) => {
            changeUser('password', e)
          }}
          placeholder="Password"
          value={user.password}
          type="password"
        ></Input>
        <Button label="Login" onClick={handleSubmit}></Button>
      </div>
    </div>
  )
}

export default Index

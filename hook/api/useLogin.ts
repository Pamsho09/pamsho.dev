import { useEffect, useState } from 'react'
import { useApiMutation } from './useApi'
import { useUserStore } from '../../store/useUserStore'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

const useLogin = () => {
  const route = useRouter()
  const { login, activeUserAccount } = useUserStore()
  const { data, mutate } = useApiMutation({
    key: 'login',
    method: 'POST',
    url: 'auth/login',
  })
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = () => {
    mutate(user)
  }
  const changeUser = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    })
  }
  useEffect(() => {
    if (!!activeUserAccount.accessToken) {
      route.push('/admin/dashboard')
    }
  }, [activeUserAccount])
  useEffect(() => {
    if (data) {
      const { access_token } = data as {
        access_token: string
      }
      const decoded = jwt_decode(access_token) as {
        email: string
      }
      login({
        accessToken: access_token,
        user: {
          username: decoded.email as string,
        },
      })
    }
  }, [data])
  return {
    handleSubmit,
    user,
    changeUser,
  }
}
const useAccessRoute = () => {
  const router = useRouter()
  const { activeUserAccount } = useUserStore()
  useEffect(() => {
    if (router.asPath.includes('dashboard')) {
      if (!!!activeUserAccount.accessToken) {
        router.push('/')
      }
    }
  }, [router.asPath])
}
export { useLogin, useAccessRoute }

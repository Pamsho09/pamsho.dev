import create from 'zustand'
import { persist } from 'zustand/middleware'
export interface IAccountUser {
  username: string
}

export interface IActiveUserAccount {
  user: IAccountUser
  accessToken: string
}

export interface IUserState {
  activeUserAccount: IActiveUserAccount
  login: (activeUserAccount: IActiveUserAccount) => void
  logout: () => void
}

const defaultUser: IAccountUser = {
  username: '',
}

export const accountUser: IActiveUserAccount = {
  user: { ...defaultUser },
  accessToken: '',
}
const initialState: IActiveUserAccount = accountUser
const useUserStore = create<IUserState>()(
  persist(
    (set) => ({
      activeUserAccount: initialState,
      login: (activeUserAccount: IActiveUserAccount) => {
        set((state) => ({
          ...state,
          activeUserAccount,
        }))
      },
      logout: () => {
        set((state) => ({
          ...state,
          activeUserAccount: initialState,
        }))
      },
    }),
    {
      name: 'account-storage',
    }
  )
)
export { useUserStore }

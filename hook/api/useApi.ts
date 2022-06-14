import { useMutation, useQuery } from 'react-query'
import { useUserStore } from '../../store/useUserStore'
import api from '../../utils/axios'
interface IBaseQueryArgs {
  key: string | string[]
  url: string
  method: string
  transformResponse?: (r: any) => any
  initialData?: any
  condition?: {
    skip?: boolean
  }
}
const useApiQuery = (arg: IBaseQueryArgs) => {
  const { accessToken } = useUserStore((state) => state.activeUserAccount)
  const { data, isLoading } = useQuery(
    arg.key,
    () =>
      api({
        url: arg.url,
        method: arg.method,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        transformResponse: (r) =>
          arg.transformResponse
            ? arg.transformResponse(JSON.parse(r))
            : JSON.parse(r),
      }),
    {
      cacheTime: 0,
      enabled: arg.condition ? arg.condition.skip : true,
      initialData: arg.initialData || {},
    }
  )
  return { data, isLoading }
}

const useApiMutation = (arg: IBaseQueryArgs) => {
  const { accessToken } = useUserStore((state) => state.activeUserAccount)

  const { data, mutate } = useMutation(
    (body: any) =>
      api({
        url: arg.url,
        method: arg.method,
        data: {
          ...body,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      mutationKey: arg.key,
    }
  )

  return { data, mutate }
}

export { useApiQuery, useApiMutation }

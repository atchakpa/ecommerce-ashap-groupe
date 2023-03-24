import http from '@/helpers/http'
import params from '@/params'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

export default function useListeCategorieArticle (paramsRequest = '') {
  const url = [`/categorie-article/ecommerce${paramsRequest}`]
  const apiUrl = process.env.NODE_ENV === 'development' ? `${params.DEV_API_URL}` : `${params.API_URL}`
  const { data, refetch, isFetching } = useQuery({
    queryKey: url,
    queryFn: () => http.get(url[0]),
    initialData: [],
    enabled: true
  })

  useEffect(() => {
    refetch()
  }, [params])

  return {
    data: data.map((oneArticle) => {
      return {
        ...oneArticle,
        imageCategorieArticle: `${apiUrl}${oneArticle.imageCategorieArticle}`
      }
    }),
    refetch,
    isFetching
  }
}

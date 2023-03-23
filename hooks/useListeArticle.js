import http from "@/helpers/http"
import params from "@/params"
import { useQuery } from 'react-query'
import {useEffect} from 'react'

export default function useListeArticle(paramsRequest = '') {
  const url = [`/article/ecommerce${paramsRequest}`]
  const apiUrl = process.env.NODE_ENV === 'development' ? `${params.DEV_API_URL}` : `${params.API_URL}`
  const { data, refetch, isFetching } = useQuery({
    queryKey: url,
    queryFn: () => http.get(url[0]),
    initialData: [],
    enabled: true
  })

  const transformDataImage = (article) => {
    if (!article.images) {
      return []
    }
    return article.images.split(',').reduce((acc, oneImage) => {
      if (oneImage !== '') {
        acc.push(`${apiUrl}${oneImage}`)
      }
      return acc
    }, [])
  }

  useEffect(() => {
    refetch()
  }, [params])

  return {
    data: data.map((oneArticle) => {
      return {
        ...oneArticle,
        images: transformDataImage(oneArticle)
      }
    }),
    refetch,
    isFetching
  }
}
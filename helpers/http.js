import axios from 'axios'
import params from '@/params'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? `${params.DEV_API_URL}` : `${params.API_URL}`
})

http.interceptors.request.use((req) => {
  const token = window.localStorage.getItem(params.JWT_KEY)
  if (token !== null) {
    req.headers.authorization = `Bearer ${token}`
  }
  return req
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error.response.data.message)
})

export default http

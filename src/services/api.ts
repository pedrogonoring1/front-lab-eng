import axios, { AxiosRequestConfig } from 'axios'

const baseURL = 'http://127.0.0.1:3003'

export const api = axios.create({
  baseURL,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error
  }
)

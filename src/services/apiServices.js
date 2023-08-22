import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
})

instance.interceptors.request.use((config) => {
  const token = process.env.REACT_APP_TOKEN
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance

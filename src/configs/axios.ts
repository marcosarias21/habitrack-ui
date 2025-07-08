import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const data = JSON.parse(localStorage.getItem('auth-storage') ?? '')
  if (data) {
    config.headers.Authorization = `Bearer ${data.state.token}`
  }
  return config
})

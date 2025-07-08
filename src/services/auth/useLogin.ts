import { api } from '@/configs/axios'
import type { loginFormSchema } from '@/schemas/forms-schemas'
import type z from 'zod'

export const login = async (e: z.infer<typeof loginFormSchema>) => {
  const { data } = await api.post('/auth/login', { ...e })
  return data
}

export const getMyUser = async () => {
  const { data } = await api.post('/auth/me')
  console.log(data)
  return data
}

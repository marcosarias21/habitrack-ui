import { api } from '@/configs/axios'

export const getAllHabits = async (idUser: string) => {
  const { data } = await api.get(`/habit/allHabits/${idUser}`)
  return data.allUserHabits
}

import { api } from '@/configs/axios'

export const useCreateHabit = async (
  idUser: string | undefined,
  name: string,
  frequency: string,
  days: number[],
) => {
  const { data } = await api.post('/habit/createHabit', {
    idUser,
    name,
    frequency,
    daysOfWeek: days,
  })
  alert(data.message)
}

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

export const useGetHabit = async (
  idUser: string | undefined,
  today: number,
  fullDate: string,
) => {
  const { data } = await api.get('/habit/getHabits', {
    params: {
      idUser,
      today,
      date: fullDate,
    },
  })
  return data
}

export const completeHabit = async (id: string, date: string) => {
  const { data } = await api.put(`/completeHabit/${id}`, {
    date,
  })
  if (data) alert(data.message)
}

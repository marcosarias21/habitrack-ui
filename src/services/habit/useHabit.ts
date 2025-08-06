import { api } from '@/configs/axios'

export const useCreateHabit = async (
  idUser: string | undefined,
  name: string,
  frequency: string,
  days: number[],
  area: string,
) => {
  const { data } = await api.post('/habit/createHabit', {
    idUser,
    name,
    frequency,
    daysOfWeek: days,
    area,
  })
  alert(data.message)
}

export const useGetHabit = async (
  idUser: string | undefined,
  today: number,
  fullDate: string,
  filter: string,
) => {
  const { data } = await api.get('/habit/getHabits', {
    params: {
      idUser,
      today,
      date: fullDate,
      filter,
    },
  })
  return data
}

export const completeHabit = async (id: string, date: string) => {
  const { data } = await api.put(`/habit/completeHabit/${id}`, {
    date,
  })
  if (data) alert(data.message)
}

export const useEditHabit = async (
  id: string,
  name: string,
  days: number[],
  frequency: string,
) => {
  const { data } = await api.put(`/habit/editHabit/${id}`, {
    name,
    days,
    frequency,
  })
  return data
}

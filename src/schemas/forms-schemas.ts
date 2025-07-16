import z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(1, {
    message: "Password it's required.",
  }),
})

export const habitSchema = z.object({
  user: z.string().min(2),
  name: z.string().min(2, {
    message: 'Min 2 char are required!',
  }),
  frequency: z.string().min(1).default('daily'),
  datesDone: z.array(z.number()),
  daysOfWeek: z.array(z.number()),
})

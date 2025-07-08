import z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(1, {
    message: "Password it's required.",
  }),
})

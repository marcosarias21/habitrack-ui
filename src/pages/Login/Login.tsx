import type z from 'zod'
import { LoginUserForm } from '../../components/auth/LoginUserForm'
import { api } from '@/configs/axios'
import type { loginFormSchema } from '@/schemas/forms-schemas'

const Login = () => {
  const onSubmitLogin = async (e: z.infer<typeof loginFormSchema>) => {
    const { data } = await api.post('/auth/login', { ...e })
    console.log(data)
  }

  return (
    <section className="flex h-dvh items-center justify-center">
      <LoginUserForm onSubmitLogin={onSubmitLogin} />
    </section>
  )
}

export default Login

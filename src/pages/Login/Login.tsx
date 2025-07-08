import type z from 'zod'
import { LoginUserForm } from '../../components/auth/LoginUserForm'
import type { loginFormSchema } from '@/schemas/forms-schemas'
import { login } from '@/services/auth/useLogin'
import { useAuthStore } from '@/store/authStore'

const Login = () => {
  const { saveToken } = useAuthStore()

  const onSubmitLogin = async (e: z.infer<typeof loginFormSchema>) => {
    const { message, token } = await login(e)
    if (!token) alert(message)
    saveToken(token)
  }

  return (
    <section className="flex h-dvh items-center justify-center">
      <LoginUserForm onSubmitLogin={onSubmitLogin} />
    </section>
  )
}

export default Login

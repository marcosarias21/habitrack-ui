import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { loginFormSchema } from '@/schemas/forms-schemas'
import type z from 'zod'

type LoginFormSchema = z.infer<typeof loginFormSchema>

interface Prop {
  onSubmitLogin: (e: LoginFormSchema) => void
}

const LoginUserForm: React.FC<Prop> = ({ onSubmitLogin }) => {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(loginFormSchema),
  })
  const handleLogin = (e: LoginFormSchema) => {
    onSubmitLogin(e)
  }
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full max-w-md rounded-xl border-1 px-4 py-10 text-gray-800"
    >
      <div className="flex flex-col gap-2">
        <FormItem>
          <Label>Email:</Label>
          <Input placeholder="Enter email..." {...register('email')}></Input>
        </FormItem>
        <FormItem>
          <Label>Password:</Label>
          <Input
            type="password"
            placeholder="Enter password..."
            {...register('password')}
          ></Input>
        </FormItem>
      </div>
      <div className="mt-5 w-full">
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-400">
          Sign In
        </Button>
      </div>
    </form>
  )
}

export default LoginUserForm

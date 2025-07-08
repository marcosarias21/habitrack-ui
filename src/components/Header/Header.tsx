import type { UserAuthenticated } from '@/interfaces/user/UserAuthenticated'
import { Button } from '../ui/button'

const Header = ({ email }: UserAuthenticated) => {
  return (
    <div className="mt-2 flex h-fit w-full justify-between rounded-lg bg-[#fff] p-4 shadow">
      <div className="flex flex-col">
        <h2 className="text-lg">
          <span className="font-bold">Hi There</span> {email}
        </h2>
        <span>Welcome back!</span>
      </div>
      <div>
        <Button>System</Button>
      </div>
    </div>
  )
}

export default Header

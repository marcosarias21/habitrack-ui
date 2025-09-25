import { Button } from '@/components/ui/button'
import type { UserAuthenticated } from '@/interfaces/user/UserAuthenticated'

const Header = ({ email }: UserAuthenticated) => {
  return (
    <div className="rounded-lgs mt-4 flex h-fit w-full justify-between bg-[#FEFEFE] p-4">
      <div className="flex w-full flex-col">
        <h2 className="text-lg">
          <span className="font-bold">Hi There,</span> {email}
        </h2>
        <span className="text-sm text-gray-500">Welcome back!</span>
      </div>
      <div>
        <Button>System</Button>
      </div>
    </div>
  )
}

export default Header

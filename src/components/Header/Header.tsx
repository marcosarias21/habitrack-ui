import type { UserAuthenticated } from '@/interfaces/user/UserAuthenticated'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const Header = ({ email }: UserAuthenticated) => {
  return (
    <div className="mt-4 flex h-fit w-full justify-between rounded-lg bg-[#FEFEFE] p-4">
      <div className="flex w-full flex-col">
        <h2 className="text-lg">
          <span className="font-bold">Hi There,</span> {email}
        </h2>
        <span className="text-sm text-gray-500">Welcome back!</span>
      </div>
      <div className="flex w-full gap-10">
        <div className="relative flex w-full">
          <input
            className="h-fit w-full rounded-2xl bg-[#f7f9fb] py-2 pl-10"
            placeholder="Search..."
            type="text"
          />
          <Search
            size={20}
            className="absolute top-2.5 left-3 text-[#5d6e80]"
          />
        </div>
        <div>
          <Button>System</Button>
        </div>
      </div>
    </div>
  )
}

export default Header

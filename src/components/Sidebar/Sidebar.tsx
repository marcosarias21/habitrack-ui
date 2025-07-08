import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
const Sidebar = () => {
  return (
    <div className="flex w-70 flex-col items-center justify-between border-r-1 bg-[#fff]">
      <div className="mt-5">
        <h3 className="text-2xl font-bold tracking-wider">
          <span className="text-blue-400">Habit</span> Track
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        <Link to={''}>All habits</Link>
        <Link to={''}>Statistic</Link>
      </div>
      <div className="mb-5 w-full">
        <Button className="h-full w-full py-5" variant={'secondary'}>
          <LogOut color="black" /> Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar

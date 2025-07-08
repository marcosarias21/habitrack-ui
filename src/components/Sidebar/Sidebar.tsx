import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
const Sidebar = () => {
  return (
    <div className="flex w-50 flex-col items-center justify-between border-r-1">
      <div className="mt-5">
        <h3 className="text-2xl font-bold tracking-wider">
          <span className="text-blue-400">Habit</span> Track
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        <Link to={''}>All habits</Link>
        <Link to={''}>Statistic</Link>
      </div>
      <div className="mb-5">
        <Button variant={'ghost'}>
          <LogOut color="black" /> Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar

import { Link, useLocation } from 'react-router-dom'
import { Button } from '../../ui/button'
import { Folder, LogOut } from 'lucide-react'
const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="z-99 col-span-2 flex flex-col items-center justify-between bg-[#fff]">
      <div className="mt-5">
        <h3 className="text-2xl font-bold tracking-wider">
          <span className="ml-0.5 rounded-sm bg-blue-400 p-1 px-2 leading-none font-medium text-white">
            Habit
          </span>{' '}
          Track
        </h3>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div
          className={`flex w-40 gap-2 rounded px-2 py-2 text-center font-medium tracking-wide text-gray-500 transition-colors hover:bg-blue-400 hover:text-white ${pathname == '/dashboard' && 'bg-blue-400 text-white'}`}
        >
          <Folder />
          <Link to="/dashboard">All Habits</Link>
        </div>
        <div
          className={`flex w-40 gap-2 rounded px-2 py-2 text-center font-medium tracking-wide text-gray-500 transition-colors hover:bg-blue-400 hover:text-white ${pathname == '/statistics' && 'bg-blue-400 text-white'}`}
        >
          <Folder />
          <Link to="/statistics">Stadistics</Link>
        </div>
      </div>
      <div className="mb-5 w-full">
        <Button
          className="h-full w-full rounded-none py-5"
          variant={'secondary'}
        >
          <LogOut color="black" /> Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar

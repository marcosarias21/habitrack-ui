import { Edit, Menu, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const DropdownActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={17} color="gray" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Edit /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash color="red" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownActions

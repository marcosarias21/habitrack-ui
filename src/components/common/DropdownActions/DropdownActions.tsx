import { Edit, Menu, Trash } from 'lucide-react'

import { useModalStore } from '@/store/modalStore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Prop = { onClick?: () => void }

const DropdownActions: React.FC<Prop> = ({ onClick }) => {
  const { setOpen } = useModalStore()

  const handleEdit = () => {
    onClick?.()
    setOpen(true)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={17} color="gray" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleEdit}>
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

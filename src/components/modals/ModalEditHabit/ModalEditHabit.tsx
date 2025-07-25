import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Habit } from '@/interfaces/habit/Habit'
import { useModalStore } from '@/store/modalStore'
import { DialogTitle } from '@radix-ui/react-dialog'

type Prop = Partial<Habit>

const ModalEditHabit: React.FC<Prop> = ({ name }) => {
  const { open, setOpen } = useModalStore()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Edit Habit</DialogTitle>
        <form>
          <div className="flex flex-col gap-1">
            <Label>{name}</Label>
            <Input type="text" placeholder="Read a book..." />
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium">Repeat</h2>
            <div className="flex gap-2"></div>
            <div></div>
          </div>
          <div className="mt-5 w-full">
            <Button
              type="reset"
              className="w-full bg-red-500 py-5 hover:bg-red-400"
            >
              Edit Habit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalEditHabit

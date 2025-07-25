import { DaysGroup } from '@/components/habits/DaysGroup'
import { WeeklyOption } from '@/components/habits/WeeklyOption'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Habit } from '@/interfaces/habit/Habit'
import { useModalStore } from '@/store/modalStore'
import { DialogTitle } from '@radix-ui/react-dialog'

type Prop = Partial<Habit>

const ModalEditHabit: React.FC<Prop> = ({ name, frequency, daysOfWeek }) => {
  console.log(daysOfWeek)
  const { open, setOpen } = useModalStore()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="text-center text-lg font-medium">
          Modify Habit
        </DialogTitle>
        <form>
          <div className="flex gap-1">
            <Label>Habit:</Label>
            <Input type="text" value={name} placeholder="Read a book..." />
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium">Repeat</h2>
            <div className="flex gap-2">
              <button
                className={`rounded border-1 px-4 py-2 text-sm font-medium opacity-30 ${frequency === 'daily' && 'bg-red-500 text-white opacity-100'}`}
              >
                Daily
              </button>
              <button
                className={`rounded border-1 px-4 py-2 text-sm font-medium opacity-30 ${frequency === 'weekly' && 'bg-red-500 text-white opacity-100'}`}
              >
                Weekly
              </button>
            </div>
            <div>
              {frequency === 'daily' ? (
                <DaysGroup daysOfWeek={daysOfWeek} />
              ) : (
                <WeeklyOption />
              )}
            </div>
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

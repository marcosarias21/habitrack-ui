import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { DaysGroup } from '../../habits/DaysGroup'
import { WeeklyOption } from '../../habits/WeeklyOption'
import { Button } from '@/components/ui/button'
import { useHabitStore } from '@/store/habitStore'

interface Prop {
  createHabit: (name: string, frequency: string, days: number[]) => void
}

const ModalCreateHabit: React.FC<Prop> = ({ createHabit }) => {
  const [isSelected, setIsSelected] = useState<string>('daily')
  const { days } = useHabitStore()
  const [name, setName] = useState<string>('')

  const onSubmit = () => {
    createHabit(name, isSelected, days)
  }

  return (
    <Dialog>
      <DialogTrigger className="h-fit rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white">
        + New Habit
      </DialogTrigger>
      <DialogContent>
        <form>
          <div className="flex flex-col gap-1">
            <Label>Habit Name</Label>
            <Input
              type="text"
              placeholder="Read a book..."
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium">Repeat</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsSelected('daily')}
                type="reset"
                className={`rounded border-1 px-4 py-2 text-sm font-medium opacity-30 ${isSelected === 'daily' && 'bg-red-500 text-white opacity-100'}`}
              >
                Daily
              </button>
              <button
                type="reset"
                onClick={() => setIsSelected('weekly')}
                className={`rounded border-1 px-4 py-2 text-sm font-medium opacity-30 ${isSelected === 'weekly' && 'bg-red-500 text-white opacity-100'}`}
              >
                Weekly
              </button>
            </div>
            <div>
              {isSelected === 'daily' ? <DaysGroup /> : <WeeklyOption />}
            </div>
          </div>
          <div className="mt-5 w-full">
            <Button
              type="reset"
              onClick={onSubmit}
              className="w-full bg-red-500 py-5 hover:bg-red-400"
            >
              Add Habit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalCreateHabit

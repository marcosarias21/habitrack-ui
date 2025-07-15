import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const ModalCreateHabit = () => {
  const [isSelected, setIsSelected] = useState<string>('daily')
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white">
        + New Habit
      </DialogTrigger>
      <DialogContent>
        <form>
          <div className="flex flex-col gap-1">
            <Label>Habit Name</Label>
            <Input type="text" placeholder="Read a book..." />
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
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalCreateHabit

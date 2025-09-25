import { Button } from '@/components/ui/button'

const HeaderStatistic = () => {
  return (
    <div className="rounded-lgs mt-4 flex h-fit w-full justify-between bg-[#FEFEFE] p-4">
      <div className="flex w-full flex-col">
        <h2 className="text-lg">
          <span className="font-bold">Statistic</span>
        </h2>
      </div>
      <div>
        <Button>System</Button>
      </div>
    </div>
  )
}

export default HeaderStatistic

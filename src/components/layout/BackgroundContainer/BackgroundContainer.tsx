import type { ReactNode } from 'react'

interface Prop {
  children: ReactNode
}

const BackgroundContainer: React.FC<Prop> = ({ children }) => {
  return <div className="rounded-lg bg-[#FEFEFE] p-4">{children}</div>
}

export default BackgroundContainer

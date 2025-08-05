import type { Area } from '@/interfaces/habit/Habit'
import { Activity, Bed, Book, GlassWater, ScanHeart } from 'lucide-react'

export const areas: Area[] = [
  {
    name: 'Health',
    value: 'health',
    icon: <ScanHeart />,
  },
  {
    name: 'Fitness',
    value: 'fitness',
    icon: <Activity />,
  },
  {
    name: 'Sleep',
    value: 'sleep',
    icon: <Bed />,
  },
  {
    name: 'Learning',
    value: 'learning',
    icon: <Book />,
  },
  {
    name: 'Hydratation',
    value: 'hydratation',
    icon: <GlassWater />,
  },
]

import { getMyUser } from '@/services/auth/useLogin'
import { useEffect, useState } from 'react'

const useGetMyUser = () => {
  const [user, setUser] = useState()
  const getUserAuth = async () => {
    const { user } = await getMyUser()
    setUser(user)
  }

  useEffect(() => {
    getUserAuth()
  }, [])
  return { user }
}

export default useGetMyUser

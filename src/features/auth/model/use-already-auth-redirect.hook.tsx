import { useAppSelector } from '@shared/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAlreadyAuthRedirect = () => {
  const navigate = useNavigate()
  const accessToken = useAppSelector((state) => state.auth.accessToken)

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true })
    }
  }, [accessToken, navigate])
}

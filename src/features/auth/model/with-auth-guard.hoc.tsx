import { useAppSelector } from '@shared/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IwithEditModeProperties {}

export const withAuthGuard =
  (Component: any) => (properties: JSX.IntrinsicAttributes) => {
    const navigate = useNavigate()
    const user = useAppSelector((state) => state.auth.accessToken)
    useEffect(() => {
      if (!user) {
        navigate('/auth/login')
      }
    }, [navigate, user])

    return (
      <>
        <Component {...properties} />
      </>
    )
  }

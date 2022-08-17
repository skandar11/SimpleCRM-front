import { useAppSelector } from '@app/store/store.hook'
import { useNavigate } from 'react-router-dom'

export interface IPrivateRouteProperties {
  children: JSX.Element
}

export function PrivateRoute(properties: IPrivateRouteProperties) {
  const { children } = properties
  const navigate = useNavigate()
  const token = useAppSelector((state) => state.auth.accessToken)
  if (!token) {
    navigate('/login', { replace: true })
  }
  return children
}

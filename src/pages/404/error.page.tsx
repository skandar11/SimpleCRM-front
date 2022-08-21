import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IErrorPageProperties {}

export function ErrorPage(props: IErrorPageProperties) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])
  return <div></div>
}

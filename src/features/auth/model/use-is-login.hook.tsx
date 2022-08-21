import * as React from 'react'
import { useLocation } from 'react-router-dom'

export function useIsLogin() {
  const location = useLocation()
  return React.useMemo(() => {
    return location.pathname.includes('login')
  }, [location.pathname])
}

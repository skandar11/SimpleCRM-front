import { ErrorPage } from '@pages/404/error.page'
import { ROUTES } from '@shared/constants'
import { Route, Routes } from 'react-router-dom'

export function AppRouter(): JSX.Element {
  return (
    <Routes>
      {ROUTES.map(({ path, component: Component }, index) => {
        return <Route path={path} key={`${path}${index}`} element={<Component />} />
      })}

      {/* <React.Suspense fallback={<div>Loading...</div>}>
        {ROUTES.map(({ Component, path, exact }, index) => (
          <Route path={path} key={path + index} element={<Component />} />
        ))}
      </React.Suspense> */}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

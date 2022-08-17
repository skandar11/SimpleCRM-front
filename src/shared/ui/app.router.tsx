import MainLayout from 'app/main.layout'
import { Route, Routes } from 'react-router-dom'
import ROUTES from 'shared/constants/routes.constant'

export interface IRoutesProperties {}

export function AppRouter(props: IRoutesProperties): JSX.Element {
  const {} = props
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {ROUTES.map(({ path, component: Component }, index) => {
          return <Route path={path} key={`${path}${index}`} element={<Component />} />
        })}

        {/* <React.Suspense fallback={<div>Loading...</div>}>
        {ROUTES.map(({ Component, path, exact }, index) => (
          <Route path={path} key={path + index} element={<Component />} />
        ))}
      </React.Suspense> */}

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

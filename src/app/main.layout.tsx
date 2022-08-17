import Footer from '@shared/ui/footer/footer.component'
import Header from 'features/shared/header/header.component'
import { Outlet } from 'react-router-dom'

export interface ILayoutProperties {}

export default function MainLayout(props: ILayoutProperties): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

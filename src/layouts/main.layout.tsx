import Footer from '@components/shared/footer/footer.component'
import Header from '@components/shared/header/header.component'
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

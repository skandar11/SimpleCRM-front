import { Footer } from '@shared/ui/footer'
import { Header } from '@shared/ui/header'
import { Outlet } from 'react-router-dom'

export interface ILayoutProperties {}

export default function MainLayout(props: ILayoutProperties): JSX.Element {
  return (
    <>
      <Header>a</Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <div></div>
      </Footer>
    </>
  )
}

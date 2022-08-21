import { Footer, Header } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { Main } from '@shared/ui/main/main.component'

export interface IHomePageProperties {}

export function HomePage(props: IHomePageProperties) {
  return (
    <>
      <Header>header</Header>
      <Main>main</Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

import { AbonementUiService } from '@entities/abonement'
import { BackIcon, Footer, Header, MoreIcon, PlusIcon } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { Main } from '@shared/ui/main/main.component'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export interface IAbonementsPageProperties {}

export function AbonementsPage(props: IAbonementsPageProperties) {
  const navigate = useNavigate()
  return (
    <>
      <Header className="w-full flex justify-between items-center">
        <button
          onClick={() => {
            navigate(-1)
          }}
          className="w-6"
        >
          <BackIcon />
        </button>
        <h1 className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <span className="font-bold mr-4">Абонементы</span>
        </h1>

        <div className="flex items center space-x-2">
          <button onClick={() => {}} className="w-6">
            <PlusIcon />
          </button>
          <button onClick={() => {}} className="w-6">
            <MoreIcon />
          </button>
        </div>
      </Header>
      <Main className="flex flex-col space-y-2 pt-4">
        <AbonementUiService.AbonementCard
          price={10_000}
          monthsCount={1}
          trainingCount={1}
        />
        <AbonementUiService.AbonementCard
          price={10_000}
          monthsCount={1}
          trainingCount={1}
        />
        <AbonementUiService.AbonementCard
          price={10_000}
          monthsCount={1}
          trainingCount={1}
        />
      </Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

import './clients-page.scss'

import { Clients, ClientsApi } from '@entities/clients'
import { CreateClientIcon, Footer, Header } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { Main } from '@shared/ui/main/main.component'
import { Label } from '@shared/ui/status-badge.component'
import { useNavigate } from 'react-router-dom'

export interface IClientsPageProperties {}

export function ClientsPage(props: IClientsPageProperties) {
  const { data: clients } = ClientsApi.useGetAllClientsInfoQuery()
  const navigate = useNavigate()
  return (
    <>
      <Header className="w-full flex justify-between">
        <h1 className="flex items-center justify-center">
          Мои клиенты <Label text={clients?.length.toString() || '0'} />
        </h1>

        <button onClick={() => navigate('/create-client/')}>
          <CreateClientIcon />
        </button>
      </Header>
      <Main className="clients__container">
        <div className="clients__content">
          <Clients.ClientsList clients={clients} />
        </div>
      </Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

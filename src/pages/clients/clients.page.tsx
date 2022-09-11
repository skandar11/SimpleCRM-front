import './clients-page.scss'

import { ClientsApiService, ClientsUiService } from '@entities/clients'
import { AuthModelService } from '@features/auth'
import { Footer, Header, Input, SearchIcon, SettignsUtilsIcon } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { AddClientIcon } from '@shared/ui/icons/add-client'
import { Main } from '@shared/ui/main/main.component'
import { useNavigate } from 'react-router-dom'

export interface IClientsPageProperties {}

export const ClientsPage = AuthModelService.withAuthGuard(
  (props: IClientsPageProperties) => {
    const { data: clients } = ClientsApiService.useGetAllClientsInfoQuery()
    const navigate = useNavigate()
    return (
      <>
        <Header className="w-full flex justify-between ">
          <h1 className="flex items-center justify-center">
            <span className="font-bold mr-4">Мои клиенты</span>
            <span className="text-secondary-text">
              {' '}
              {clients?.length.toString() || '0'}
            </span>
          </h1>

          <button onClick={() => {}} className="w-6">
            <SettignsUtilsIcon />
          </button>
        </Header>
        <Main className="clients__container">
          <div className="frame rounded-b-frame p-2 pt-4">
            <Input
              placeholder="Имя или телефон"
              inputClassName="border-none"
              leftIcon={<SearchIcon />}
            />
          </div>
          <div className="clients__content">
            <ClientsUiService.ClientsList clients={clients} />
          </div>
          <button
            className="w-16 fixed right-4 bottom-20 z-30"
            onClick={() => navigate('/create-client/')}
          >
            <AddClientIcon />
          </button>
        </Main>
        <Footer>
          <FooterNav />
        </Footer>
      </>
    )
  }
)

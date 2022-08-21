import { Clients, ClientsApi } from '@entities/clients'
import { TargetsApi } from '@entities/targets'
import { TargetStatusEnum } from '@entities/targets/model'
import { EditClient } from '@features/edit-client'
import { ArrowBackIcon, Footer, Header } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { Main } from '@shared/ui/main/main.component'
import { useMemo } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { ClientInfoField } from './ui'

export interface IClientPageProperties {}

export function ClientPage(props: IClientPageProperties) {
  const navigate = useNavigate()
  const location = useLocation()

  const { clientId } = useParams()
  const { data: clientInfo } = ClientsApi.useGetClientInfoQuery({
    id: clientId as string,
  })
  const { data: targets } = TargetsApi.useGetAllTargetsByUserQuery({
    id: clientId as string,
  })

  const currentTarget = useMemo(() => {
    return targets?.find((el) => el.status === TargetStatusEnum.Active)
  }, [targets])

  const content = useMemo(() => {
    if (location.pathname.includes('edit-client')) {
      return (
        clientInfo && (
          <EditClient.EditClientWidget target={currentTarget} clientInfo={clientInfo} />
        )
      )
    }
    return null
  }, [clientInfo, currentTarget, location.pathname])

  return (
    content || (
      <>
        <Header className="w-full flex justify-between">
          <div className="flex space-x-2 items-center justify-center">
            <Link to="/clients" className="flex items-center justify-center">
              <ArrowBackIcon />
            </Link>
            <p>{clientInfo?.name}</p>
          </div>

          <Clients.ClientStatusLabel status={clientInfo?.status || 1} />

          <button onClick={() => navigate(`/clients/edit-client/${clientInfo?.id}`)}>
            Редактировать
          </button>
        </Header>
        <Main>
          <div className="flex flex-col items-start justify-center mx-auto space-y-5 mt-4">
            <ClientInfoField title="Имя" content={clientInfo?.name} />
            <ClientInfoField title="Номер телефона" content={clientInfo?.phoneNumber} />
            <ClientInfoField title="Дата рождения" content={clientInfo?.birthDay} />
            <ClientInfoField title="Email" content={clientInfo?.email} />
            <ClientInfoField
              title="Противопоказания"
              content={clientInfo?.contraindications}
            />
          </div>
        </Main>
        <Footer>
          <FooterNav />
        </Footer>
      </>
    )
  )
}

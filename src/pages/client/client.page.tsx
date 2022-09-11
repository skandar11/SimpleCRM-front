import { ClientsApiService, ClientsUiService } from '@entities/clients'
import type { IComment } from '@entities/clients/model/comment.model'
import { TargetsApiService } from '@entities/targets'
import { TargetStatusEnum } from '@entities/targets/model'
import { TargetInput } from '@entities/targets/ui'
import { AuthModelService } from '@features/auth'
import { EditClientModelService, EditClientUiService } from '@features/edit-client'
import { formatDate } from '@shared/lib'
import { DateFormatsEnum } from '@shared/lib/enums/date-format.enum'
import {
  BackIcon,
  ContraIcon,
  FileInput,
  Footer,
  Header,
  Input,
  MoreIcon,
} from '@shared/ui'
import { BirthdayIcon } from '@shared/ui/icons/birthday.component'
import { PhoneIcon } from '@shared/ui/icons/phone.component'
import { TelegramIcon } from '@shared/ui/icons/telegram.icon'
import { WhatsappIcon } from '@shared/ui/icons/whatsapp.icon'
import { Main } from '@shared/ui/main/main.component'
import { useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { ClientInfoField } from './ui'

export interface IClientPageProperties {}

export const ClientPage = AuthModelService.withAuthGuard(
  (props: IClientPageProperties) => {
    const navigate = useNavigate()
    const location = useLocation()

    const { clientId } = useParams()
    const { data: clientInfo } = ClientsApiService.useGetClientInfoQuery({
      id: clientId as string,
    })
    const { data: targets } = TargetsApiService.useGetAllTargetsByUserQuery({
      id: clientId as string,
    })

    const { onAddNewTarget } = EditClientModelService.useEditClient({
      clientId,
      target: targets && targets[0],
    })

    const reference = useRef(null)

    // useEventListener(
    //   'keydown',
    //   (e) => {
    //     if (e.key == 'Enter') console.log(e)
    //   },
    //   reference
    // )

    const [newComment, setNewComment] = useState<IComment>({
      images: [],
      text: 'Результат взвешивания составил 80 кг',
      date: '12.02.2022',
      author: 'Тренер',
    })

    const currentTarget = useMemo(() => {
      return targets?.find((el) => el.status === TargetStatusEnum.Active)
    }, [targets])

    const content = useMemo(() => {
      if (location.pathname.includes('edit-client')) {
        return (
          clientInfo && (
            <EditClientUiService.EditClientWidget
              target={currentTarget}
              clientInfo={clientInfo}
            />
          )
        )
      }
      return null
    }, [clientInfo, currentTarget, location.pathname])

    return (
      content || (
        <>
          <Header className="w-full flex justify-between items-center">
            <div className="flex space-x-2 items-center justify-center">
              <Link to="/clients" className="flex items-center justify-center w-4">
                <BackIcon />
              </Link>
            </div>
            <div className="flex flex-col items-center text-sm">
              <p>{clientInfo?.name}</p>
              <ClientsUiService.ClientStatusLabel status={clientInfo?.status || 1} />
            </div>

            <button
              className="w-6"
              // onClick={() => navigate(`/clients/edit-client/${clientInfo?.id}`)}
            >
              <MoreIcon />
            </button>
          </Header>
          <Main>
            <div className="min-h-full flex flex-col w-full ">
              <div className="flex flex-col items-start justify-center mx-auto space-y-2 mt-4 w-full mb-2">
                <ClientInfoField icon={<BirthdayIcon />}>
                  {clientInfo?.birthDay &&
                    formatDate(clientInfo?.birthDay, DateFormatsEnum['mo-y'])}
                </ClientInfoField>
                <ClientInfoField icon={<PhoneIcon />} className="w-full">
                  <div className="w-full flex justify-between">
                    {clientInfo?.phoneNumber}
                    <div className="flex space-x-2">
                      <a
                        href={`
                        https://telegram.me/${clientInfo?.phoneNumber}`}
                        className=" border-l-2 border-page-border pl-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-6">
                          <TelegramIcon />
                        </div>
                      </a>
                      <a
                        href={`
                        https://api.whatsapp.com/send/?phone=${clientInfo?.phoneNumber}`}
                        className=" border-l-2 border-page-border pl-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-6">
                          <WhatsappIcon />
                        </div>
                      </a>
                    </div>
                  </div>
                </ClientInfoField>
                <ClientInfoField icon={<ContraIcon />}>
                  {clientInfo?.contraindications}
                </ClientInfoField>
                <TargetInput
                  errors={''}
                  register=""
                  target={targets && targets[0]}
                  onSubmit={(e) => {
                    console.log(e)
                  }}
                  ref={reference}
                  onKeyDown={(e) => {
                    if (e.code == 'Enter' && clientInfo) {
                      onAddNewTarget({
                        ...clientInfo,
                        target: (e.target as HTMLInputElement).value,
                      })
                    }
                  }}
                />
              </div>

              <ClientsUiService.EventsList newComment={undefined} events={[]} />
            </div>
          </Main>
          <Footer>
            <div className="flex items-center justify-center w-full px-8 h-full">
              <FileInput
                onChange={(blobArray: Blob[]) =>
                  setNewComment({
                    ...newComment,
                    images: blobArray,
                  })
                }
                className="w-6"
              />
              <Input
                containerClassName="flex items-center justify-center w-full mb-0"
                setValue={() => {}}
                placeholder="Добавить комментарий"
                inputClassName="w-full"
              />
            </div>
          </Footer>
        </>
      )
    )
  }
)

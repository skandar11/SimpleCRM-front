import { Clients, ClientsApi } from '@entities/clients'
import type { IGetClientInfoDto } from '@entities/clients/model'
import { TargetsApi } from '@entities/targets'
import type { ITarget } from '@entities/targets/model'
import { yupResolver } from '@hookform/resolvers/yup'
import { Footer, Header, Input } from '@shared/ui'
import { AttachIcon } from '@shared/ui/icons/attach.icon'
import { Main } from '@shared/ui/main/main.component'
import { formatPhone } from '@shared/utils'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { editClientSchema } from '../model'
import { EditClientForm } from './edit-client-form.component'

export interface IEditClientWidgetProperties {
  clientInfo: IGetClientInfoDto
  target: ITarget | undefined
}

interface IEditClientForm {
  name: string
  phoneNumber: string
  email: string
  birthDay: string
  contraindications: string

  target?: string
  schedule?: string
}

export const EditClientWidget = ({ clientInfo, target }: IEditClientWidgetProperties) => {
  const methods = useForm<IEditClientForm>({
    resolver: yupResolver(editClientSchema),
    mode: 'onTouched',
  })

  const navigate = useNavigate()

  const [editClient] = ClientsApi.useEditClientMutation()
  const [addTarget] = TargetsApi.useAddTargetMutation()
  const [editTarget] = TargetsApi.useEditTargetMutation()

  const onSubmit: SubmitHandler<IEditClientForm> = async (data) => {
    console.log(data)

    if (clientInfo.id) {
      try {
        await editClient({
          body: {
            birthDay: data.birthDay,
            contraindications: data.contraindications,
            email: data.email,
            name: data.email,
            phoneNumber: formatPhone(data.phoneNumber),
          },
          id: clientInfo.id,
        }).unwrap()
        try {
          if (data.target) {
            await (!target
              ? addTarget({ clientInfoId: clientInfo.id, desire: data.target }).unwrap()
              : await editTarget({
                  id: target.id,
                  body: { desire: data.target, status: target.status },
                }).unwrap())
          }
        } catch {}

        navigate('/clients')
      } catch {}
    }
  }

  return (
    <FormProvider {...methods}>
      <Header className="w-full flex justify-between">
        <Link to="/clients" className="flex items-center justify-center">
          Отмена
        </Link>

        <div className="flex space-x-2 items-center justify-center">
          <p>{clientInfo?.name}</p>
          <Clients.ClientStatusLabel status={clientInfo?.status || 1} />
        </div>
        <button onClick={methods.handleSubmit(onSubmit)}>Сохранить</button>
      </Header>
      <Main className="clients-container">
        <div className="h-full flex flex-col items-center pt-4">
          <EditClientForm clientInfo={clientInfo} target={target} />
        </div>
      </Main>
      <Footer>
        <div className="flex items-center justify-center">
          <AttachIcon />
          <Input
            containerClasses="inline-flex items-center justify-center"
            setValue={() => {}}
            placeholder="Добавить комментарий"
          />
        </div>
      </Footer>
    </FormProvider>
  )
}

import { ClientsApi } from '@entities/clients'
import type { IPostClientInfoDto } from '@entities/clients/model'
import { yupResolver } from '@hookform/resolvers/yup'
import { Footer, Header, Input } from '@shared/ui'
import { AttachIcon } from '@shared/ui/icons/attach.icon'
import { Main } from '@shared/ui/main/main.component'
import { formatPhone } from '@shared/utils'
import * as React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { createClientSchema } from '../model'
import { CreateClientForm } from './create-client-form.component'

export interface ICreateClientWidgetProperties {}

export const CreateClientWidget = (props: ICreateClientWidgetProperties) => {
  const methods = useForm<IPostClientInfoDto>({
    resolver: yupResolver(createClientSchema),
    mode: 'onTouched',
  })

  const navigate = useNavigate()

  const [createClient] = ClientsApi.useCreateClientMutation()
  const [addClientInfo] = ClientsApi.usePostClientInfoMutation()

  const onSubmit: SubmitHandler<IPostClientInfoDto> = async (data) => {
    try {
      console.log(data)

      await createClient({ login: formatPhone(data.phoneNumber) }).unwrap()
    } catch {}
    try {
      await addClientInfo({
        ...data,
        phoneNumber: formatPhone(data.phoneNumber),
      }).unwrap()
      navigate('/clients')
    } catch {}
  }

  return (
    <FormProvider {...methods}>
      <Header className="w-full flex justify-between">
        <Link to="/" className="flex items-center justify-center">
          Отмена
        </Link>
        <p>Клиент</p>
        <button onClick={methods.handleSubmit(onSubmit)}>Добавить</button>
      </Header>
      <Main className="clients-container">
        <div className="h-full flex flex-col items-center">
          <CreateClientForm />
        </div>
      </Main>
      <Footer>
        <div className="flex items-center justify-center w-full px-8">
          <AttachIcon />
          <Input
            containerClasses="flex items-center justify-center w-full"
            setValue={() => {}}
            placeholder="Добавить комментарий"
            inputClasses='w-full'
          />
        </div>
      </Footer>
    </FormProvider>
  )
}

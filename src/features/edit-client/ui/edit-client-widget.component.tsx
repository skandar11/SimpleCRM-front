import { ClientsUiService } from '@entities/clients'
import type { IGetClientInfoDto } from '@entities/clients/model'
import type { IComment } from '@entities/clients/model/comment.model'
import { EventsList } from '@entities/clients/ui'
import type { ITarget } from '@entities/targets/model'
import { yupResolver } from '@hookform/resolvers/yup'
import { Footer, Header, Input } from '@shared/ui'
import { FileInput } from '@shared/ui/file-input.component'
import { Main } from '@shared/ui/main/main.component'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { editClientSchema } from '../model'
import { useEditClient } from '../model/use-edit-client.hook'
import { EditClientForm } from './edit-client-form.component'

export interface IEditClientWidgetProperties {
  clientInfo: IGetClientInfoDto
  target: ITarget | undefined
}

export interface IEditClientForm {
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

  const { onEditClient } = useEditClient({
    clientId: clientInfo.id,
    target,
  })

  const [newComment, setNewComment] = useState<IComment>({
    images: [],
    text: 'Результат взвешивания составил 80 кг',
    date: '12.02.2022',
    author: 'Тренер',
  })

  return (
    <FormProvider {...methods}>
      <Header className="w-full flex justify-between">
        <Link to="/clients" className="flex items-center justify-center">
          Отмена
        </Link>

        <div className="flex space-x-2 items-center justify-center">
          <p>{clientInfo?.name}</p>
          <ClientsUiService.ClientStatusLabel status={clientInfo?.status || 1} />
        </div>
        <button onClick={methods.handleSubmit(onEditClient)}>Сохранить</button>
      </Header>
      <Main className="clients-container">
        <div className="h-full flex flex-col items-center pt-4">
          <EditClientForm clientInfo={clientInfo} target={target} />
          <EventsList newComment={newComment} events={[]} />
        </div>
      </Main>
      <Footer>
        <div className="flex items-center justify-center w-full px-8">
          <FileInput
            onChange={(blobArray: Blob[]) =>
              setNewComment({
                ...newComment,
                images: blobArray,
              })
            }
          />
          <Input
            containerClassName="flex items-center justify-center w-full"
            setValue={() => {}}
            placeholder="Добавить комментарий"
            inputClassName="w-full"
          />
        </div>
      </Footer>
    </FormProvider>
  )
}

import { ClientsApiService } from '@entities/clients'
import { yupResolver } from '@hookform/resolvers/yup'
import { formatPhone } from '@shared/lib'
import { Header } from '@shared/ui'
import { Main } from '@shared/ui/main/main.component'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import type { CreateClientSchema } from '../model'
import { createClientSchema } from '../model'
import { CreateClientForm } from './create-client-form.component'

export interface ICreateClientWidgetProperties {}

export const CreateClientWidget = (props: ICreateClientWidgetProperties) => {
  const methods = useForm<CreateClientSchema>({
    resolver: yupResolver(createClientSchema),
    mode: 'onTouched',
  })

  const navigate = useNavigate()

  const [createClient] = ClientsApiService.useCreateClientMutation()
  const [addClientInfo] = ClientsApiService.usePostClientInfoMutation()

  const onSubmit: SubmitHandler<CreateClientSchema> = async (data) => {
    try {
      console.log(data)

      const promise = createClient({ login: formatPhone(data.phoneNumber) }).unwrap()
      await toast.promise(promise, {
        error: {
          render: (err) => {
            return err.data
          },
        },
      })
    } catch {
      return
    }
    try {
      await addClientInfo({
        birthDay: data.birthDay,
        contraindications: data.contraindications,
        email: data.email,
        name: data.name,
        phoneNumber: formatPhone(data.phoneNumber),
      }).unwrap()
      navigate('/clients')
    } catch {}
    // if (data.target) {
    //   const promise = await addTarget({desire: data.target, clientInfoId: })
    // }
  }

  return (
    <FormProvider {...methods}>
      <Header className="w-full flex justify-between font-semibold">
        <Link to="/" className="flex items-center justify-center text-secondary-text">
          Отменить
        </Link>
        <p className="text-primary-text">Клиент</p>
        <button
          onClick={methods.handleSubmit((data) => onSubmit(data))}
          className="text-accent opacity-50 hover:opacity-100 "
        >
          Добавить
        </button>
      </Header>
      <Main className="clients-container">
        <div className="h-full flex flex-col items-center">
          <CreateClientForm />
        </div>
      </Main>
      {/* <Footer></Footer> */}
    </FormProvider>
  )
}

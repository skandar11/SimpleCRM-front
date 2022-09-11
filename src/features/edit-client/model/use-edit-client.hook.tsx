import { ClientsApiService } from '@entities/clients'
import { TargetsApiService } from '@entities/targets'
import type { ITarget } from '@entities/targets/model'
import { formatPhone } from '@shared/lib'
import type { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import type { IEditClientForm } from '../ui'

export interface IuseEditClientProperties {
  clientId: string | undefined
  target: ITarget | undefined
}

export function useEditClient({ clientId, target }: IuseEditClientProperties) {
  const navigate = useNavigate()
  const [editClient] = ClientsApiService.useEditClientMutation()
  const [addTarget] = TargetsApiService.useAddTargetMutation()
  const [editTarget] = TargetsApiService.useEditTargetMutation()

  const onAddNewTarget = async (data: IEditClientForm) => {
    try {
      if (data.target && clientId) {
        await (!target
          ? addTarget({ clientInfoId: clientId, desire: data.target }).unwrap()
          : await editTarget({
              id: target.id,
              body: { desire: data.target, status: target.status },
            }).unwrap())
      }
    } catch {}
  }

  const onEditClient: SubmitHandler<IEditClientForm> = async (data) => {
    console.log(data)

    if (clientId) {
      try {
        await editClient({
          body: {
            birthDay: data.birthDay,
            contraindications: data.contraindications,
            email: data.email,
            name: data.email,
            phoneNumber: formatPhone(data.phoneNumber),
          },
          id: clientId,
        }).unwrap()

        onAddNewTarget(data)
        navigate('/clients')
      } catch {}
    }
  }
  return { onAddNewTarget, onEditClient }
}

import { ILabelVariant, Label } from '@shared/ui'
import * as React from 'react'

import { ClientStatusEnum, useClientStatus } from '../model'

export interface IClientStatusLabelProperties {
  status: ClientStatusEnum
}

export function ClientStatusLabel({ status }: IClientStatusLabelProperties) {
  const statusText = useClientStatus({ status })
  return (
    <Label
      variant={
        (status == ClientStatusEnum.Active && ILabelVariant.success) ||
        (status == ClientStatusEnum.WaitingPayment && ILabelVariant.waiting) ||
        ILabelVariant.default
      }
      text={statusText}
    />
  )
}

import { Label } from '@shared/ui'
import * as React from 'react'

import type { ClientStatusEnum } from '../model'
import { useClientStatus } from '../model'

export interface IClientStatusLabelProperties {
  status: ClientStatusEnum
}

export function ClientStatusLabel(props: IClientStatusLabelProperties) {
  const statusText = useClientStatus({ status: props.status })
  return <Label text={statusText} />
}

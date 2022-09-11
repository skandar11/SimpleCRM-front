import * as React from 'react'

import { ClientStatusEnum } from './client-status.enum'

export interface IuseClientStatusProperties {
  status: ClientStatusEnum
}

export function useClientStatus(props: IuseClientStatusProperties) {
  return React.useMemo(() => {
    switch (props.status) {
      case ClientStatusEnum.Active: {
        return 'Активный'
      }
      case ClientStatusEnum.Deleted: {
        return 'Удален'
      }
      case ClientStatusEnum.WaitingPayment:
        return 'Ожидаем оплату'
      default:
        return ''
    }
  }, [props.status])
}

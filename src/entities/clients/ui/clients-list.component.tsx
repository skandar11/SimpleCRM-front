import type { IGetAllClientsInfoDto } from '../model'
import { ClientCard } from './client-card.component'

export interface IClientsListProperties {
  clients: IGetAllClientsInfoDto | undefined
}

export function ClientsList(props: IClientsListProperties) {
  return (
    <ul className="clients-list">
      {props.clients?.map((client) => {
        return (
          <li>
            <ClientCard client={client} />
          </li>
        )
      })}
    </ul>
  )
}

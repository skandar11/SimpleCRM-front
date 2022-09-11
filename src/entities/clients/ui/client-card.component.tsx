import './client.scss'

import { useNavigate } from 'react-router-dom'

import type { IGetClientInfoDto } from '../model'
import { ClientStatusLabel } from './client-status-label.component'

export interface IClientCardProperties {
  client: IGetClientInfoDto
}

export function ClientCard({ client }: IClientCardProperties) {
  const navigate = useNavigate()

  return (
    <div
      className="frame rounded-frame client-card"
      onClick={() => navigate(`/clients/${client.id}`)}
    >
      <p>{client.name}</p>
      <ClientStatusLabel status={client.status} />
    </div>
  )
}

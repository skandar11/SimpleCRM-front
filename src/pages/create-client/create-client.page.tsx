import { CreateClient } from '@features/create-client'

export interface IClientsPageProperties {}

export function CreateClientPage(props: IClientsPageProperties) {
  return (
    <>
      <CreateClient.CreateClientWidget />
    </>
  )
}

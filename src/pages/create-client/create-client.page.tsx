import { CreateClientUiService } from '@features/create-client'

export interface IClientsPageProperties {}

export function CreateClientPage(props: IClientsPageProperties) {
  return (
    <>
      <CreateClientUiService.CreateClientWidget />
    </>
  )
}

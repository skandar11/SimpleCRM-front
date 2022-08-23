import { AuthModel } from '@features/auth'

export interface IClientsPageProperties {}

export const SchedulePage = AuthModel.withAuthGuard((props: IClientsPageProperties) => {
  return <div></div>
})

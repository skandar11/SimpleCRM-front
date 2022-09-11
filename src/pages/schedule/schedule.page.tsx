import { AuthModelService } from '@features/auth'

export interface IClientsPageProperties {}

export const SchedulePage = AuthModelService.withAuthGuard(
  (props: IClientsPageProperties) => {
    return <div></div>
  }
)

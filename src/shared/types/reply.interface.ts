import type { ReplyStateEnum } from '@shared/enums'

export interface IReply {
  id: number
  hhId: string
  avitoId?: any
  replyDate: string
  state: ReplyStateEnum
  name: string
  phoneNumber: string
}

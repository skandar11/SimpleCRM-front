export type IGetAllClientsInfoDto = IGetClientInfoDto[]

export interface IGetClientInfoDto {
  id: string
  phoneNumber: string
  name: string
  email: string
  birthDay: string
  contraindications: string
  status: number
  updateAt: string
  createAt: string
}

export interface IGetClientInfoRequest {
  id: string
}

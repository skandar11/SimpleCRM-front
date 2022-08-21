export interface IPostClientInfoDto {
  name: string
  phoneNumber: string
  email: string
  birthDay: string
  contraindications: string
}

export type IPutClientInfoDto = {
  body: IPostClientInfoDto
  id: string
}

export interface IDeleteClientDto {
  id: string
}

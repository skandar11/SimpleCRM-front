export interface IEditTargetDto {
  body: {
    desire: string
    status: number
  }
  id: string
}

export interface ITarget {
  id: string
  desire: string
  status: number
  createdAt: string
}

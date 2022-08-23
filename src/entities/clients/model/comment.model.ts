export interface IComment {
  images: Array<Blob | MediaSource>
  body: string
  timestamp: Date
}
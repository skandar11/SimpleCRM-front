import mockImg from '@shared/assets/mock-event.png'
import { DateFormatsEnum, formatDate } from '@shared/lib'
import * as React from 'react'

import type { IEventEntity } from '../model/event.entity'

export interface IEventCardProperties {
  event: IEventEntity
}

export function EventCard({ event }: IEventCardProperties) {
  const [previews, setPreviews] = React.useState<Array<string>>([])

  // React.useEffect(() => {
  //   // create the preview
  //   const objectUrls = comment?.images?.map((el) => URL.createObjectURL(el))
  //   setPreviews(objectUrls)
  //   // free memory when ever this component is unmounted
  //   return () => objectUrls.forEach((el) => URL.revokeObjectURL(el))
  // }, [comment])

  return (
    <div className="grid grid-cols-[1fr_10fr] gap-4">
      <img src={mockImg} alt="" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>{event.author}</p>
          <p>{formatDate(event.date, DateFormatsEnum['mo-y'])}</p>
        </div>
        <div className="progress-card__body">{event.text}</div>
      </div>
    </div>
  )
}

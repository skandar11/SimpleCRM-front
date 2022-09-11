import { Banner, FirstCommentIcon } from '@shared/ui'
import { Link } from 'react-router-dom'

import type { IComment } from '../model/comment.model'
import type { IEventEntity } from '../model/event.entity'
import { EventCard } from './event-card.component'

export interface IEventsListProperties {
  events: IEventEntity[]
  newComment: IComment | undefined
}

export function EventsList({ events, newComment }: IEventsListProperties) {
  return (
    <Banner>
      <Banner.Header>
        <div className="w-full flex justify-between">
          <p className="font-semibold">
            События <span className="text-secondary-text">2</span>
          </p>
          <Link to="/" className="text-secondary-text">
            Показать все
          </Link>
        </div>
      </Banner.Header>
      <Banner.Body>
        <div className="overflow-scroll h-full">
          {events.length === 0 && !newComment ? (
            <div className="flex items-center justify-center py-3 w-3/4 mx-auto">
              <FirstCommentIcon />
            </div>
          ) : (
            <div className="flex items-end justify-center py-3 ">
              <div className="flex flex-col gap-3">
                {events?.map((e) => {
                  return <EventCard event={e} />
                })}
                {newComment && <EventCard event={newComment} />}
              </div>
            </div>
          )}
        </div>
      </Banner.Body>
    </Banner>
  )
}

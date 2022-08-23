import addCommentsImg from '@shared/assets/add-comments.png'

import type { IComment } from '../model/comment.model'
import { CommentCard } from './comment-card.component'

export interface ICommentsListProperties {
  comments: IComment[]
  newComment: IComment
}

export function CommentsList({ comments, newComment }: ICommentsListProperties) {
  return (
    <div className="progress-list overflow-scroll">
      <div className="progress-list__header">Активность</div>
      <div className="overflow-scroll h-full bg-[#EDEDED]">
        {comments.length === 0 && !newComment ? (
          <div className="flex  items-center justify-center py-3">
            <img src={addCommentsImg} alt="" />
          </div>
        ) : (
          <div className="flex items-end justify-center py-3 ">
            <div className="flex flex-col gap-3">
              {newComment && <CommentCard comment={newComment} />}
              {newComment && <CommentCard comment={newComment} />}
              {newComment && <CommentCard comment={newComment} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

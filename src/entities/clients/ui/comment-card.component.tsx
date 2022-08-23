import * as React from 'react'

import type { IComment } from '../model/comment.model'

export interface ICommentCardProperties {
  comment: IComment
}

export function CommentCard({ comment }: ICommentCardProperties) {
  const [previews, setPreviews] = React.useState<Array<string>>([])

  React.useEffect(() => {
    // create the preview
    const objectUrls = comment?.images?.map((el) => URL.createObjectURL(el))
    setPreviews(objectUrls)
    // free memory when ever this component is unmounted
    return () => objectUrls.forEach((el) => URL.revokeObjectURL(el))
  }, [comment])

  return (
    <div className="progress-card">
      <div className="progress-card__header">
        <p>Комментарий</p>
        <p>{comment.timestamp.toLocaleString()}</p>
      </div>
      <div className="progress-card__body">{comment.body}</div>
      <div className="progress-card__images ">
        {previews.map((el) => (
          <img className="progress-card__img" src={el} alt="" />
        ))}
      </div>
    </div>
  )
}

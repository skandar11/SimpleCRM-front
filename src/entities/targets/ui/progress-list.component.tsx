import './target.scss'

import addCommentsImg from '@shared/assets/add-comments.png'

import type { IGetAllTargetsDto } from '../model'

export interface IProgressListProperties {
  targets: IGetAllTargetsDto
}

export function ProgressList({ targets }: IProgressListProperties) {
  return (
    <div className="progress-list">
      <div className="progress-list__header">Прогресс</div>
      <div className="flex items-center justify-center py-3">
        {targets.length === 0 ? <img src={addCommentsImg} alt="" /> : <div></div>}
      </div>
    </div>
  )
}

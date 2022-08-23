import './target.scss'

import addCommentsImg from '@shared/assets/add-progress.png'

import type { IGetAllTargetsDto, IProgressItem } from '../model'
import { ProgressCard } from './progress-card.component'
import { TargetCard } from './target-card.component'

export interface IProgressListProperties {
  targets: IGetAllTargetsDto | undefined
  newProgress: IProgressItem
}

export function ProgressList({ targets, newProgress }: IProgressListProperties) {
  return (
    <div className="progress-list overflow-scroll">
      <div className="progress-list__header">Прогресс</div>
      <div className="overflow-scroll h-full">
        {targets?.length === 0 && !newProgress ? (
          <div className="flex  items-center justify-center py-3">
            <img src={addCommentsImg} alt="" />
          </div>
        ) : (
          <div className="flex items-end justify-center py-3 bg-[#EDEDED] ">
            <div className="flex flex-col gap-3">
              {targets?.map((el) => (
                <TargetCard target={el} />
              ))}
              {newProgress && <ProgressCard progressItem={newProgress} />}
              {newProgress && <ProgressCard progressItem={newProgress} />}
              {newProgress && <ProgressCard progressItem={newProgress} />}
              {newProgress && <ProgressCard progressItem={newProgress} />}
              {newProgress && <ProgressCard progressItem={newProgress} />}
              {newProgress && <ProgressCard progressItem={newProgress} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

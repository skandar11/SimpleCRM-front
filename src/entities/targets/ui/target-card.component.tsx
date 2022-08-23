import * as React from 'react'

import type { ITarget } from '../model'
import { TargetStatusEnum } from '../model'

export interface ITargetCardProperties {
  target: ITarget
}

export function TargetCard({ target }: ITargetCardProperties) {
  return target.status === TargetStatusEnum.Done ? (
    <div className="progress-card">
      <div className="progress-card__header">
        <p>Цель выполнена</p>
        <p>{target.createdAt.toLocaleString()}</p>
      </div>
      <div className="progress-card__body line-through">{target.desire}</div>
    </div>
  ) : null
}

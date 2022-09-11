import { ScheduleIcon, SettingsIcon } from '@shared/ui'
import { Row } from '@shared/ui/row.component'
import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IGraphicPickerProperties {}

export function GraphicPicker(props: IGraphicPickerProperties) {
  return (
    <Row>
      <Row.Left>
        <div className="w-6">
          <ScheduleIcon />
        </div>
      </Row.Left>

      <Row.Body>
        <p className="text-secondary-text">График тренировок</p>
      </Row.Body>
      <Row.Right>
        <Link to={'/'} className="w-6 flex">
          <SettingsIcon />
        </Link>
      </Row.Right>
    </Row>
  )
}

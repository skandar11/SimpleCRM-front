import { AbonementIcon, PlusIcon } from '@shared/ui'
import { Row } from '@shared/ui/row.component'
import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IAbonementPickerProperties {}

export function AbonementPicker(props: IAbonementPickerProperties) {
  return (
    <Row>
      <Row.Left>
        <div className="w-6">
          <AbonementIcon />
        </div>
      </Row.Left>

      <Row.Body>
        <p className="text-secondary-text">Абонемент</p>
      </Row.Body>
      <Row.Right>
        <Link to={'/abonements'} className="w-6 flex">
          <PlusIcon />
        </Link>
      </Row.Right>
    </Row>
  )
}

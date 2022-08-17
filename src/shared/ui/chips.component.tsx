import classNames from 'classnames'
import type { MouseEvent, ReactElement } from 'react'

import { LabelTheme } from './label.component'

interface ILabelProperties {
  onClick?: (event: MouseEvent) => void
  children: ReactElement
  theme?: LabelTheme
  additionalClasses?: string
}

export function Chips(properties: ILabelProperties) {
  const {
    theme = LabelTheme.primary,
    additionalClasses,
    onClick = () => null,
    children,
  } = properties

  function getTheme() {
    switch (theme) {
      case LabelTheme.primary:
        return 'text-blue bg-lightBlue'
      case LabelTheme.error:
        return 'text-red bg-lightRed'
      case LabelTheme.warn:
        return 'text-yellow bg-lightYellow'
      case LabelTheme.success:
        return 'text-green bg-lightGreen'
      case LabelTheme.transparent:
        return 'text-blue bg-transparent border border-lightblue2'
    }
  }

  return (
    <button
      className={classNames(
        'rounded-[37px] py-1 px-2 font-bold text-xs',
        getTheme(),
        additionalClasses
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

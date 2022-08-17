import classNames from 'classnames'
import type { MouseEvent } from 'react'

export enum LabelTheme {
  'primary',
  'error',
  'warn',
  'success',
  'transparent',
}

interface ILabelProperties {
  text: string
  theme?: LabelTheme
  additionalClasses?: string
  onClick?: (event: MouseEvent) => void
}

export function Label(properties: ILabelProperties) {
  const {
    theme = LabelTheme.primary,
    text,
    additionalClasses,
    onClick = () => null,
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
      default:
        return 'text-blue bg-transparent border border-lightblue2'
    }
  }

  return (
    <button
      className={classNames(
        'rounded-[37px] py-1 px-2 font-bold text-xs z-0',
        getTheme(),
        additionalClasses
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

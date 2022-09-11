import classNames from 'classnames'
import * as React from 'react'

export enum ILabelVariant {
  success,
  error,
  default,
  waiting,
  disabled,
}

export interface ILabelProperties {
  text: string
  variant?: ILabelVariant
  className?: string
}

export function Label({
  text,
  variant = ILabelVariant.default,
  className,
}: ILabelProperties) {
  const styleSheets = React.useMemo(() => {
    switch (variant) {
      case ILabelVariant.default:
        return 'bg-new'
      case ILabelVariant.success:
        return 'bg-active'
      case ILabelVariant.error:
        return 'bg-error'
      case ILabelVariant.waiting:
        return 'bg-waiting'
      case ILabelVariant.disabled:
        return 'bg-closed'
      default:
        return ''
    }
  }, [variant])

  return (
    <div
      className={classNames(
        'py-[0.1rem] px-1 rounded-[4px] text-xs',
        styleSheets,
        className
      )}
    >
      {text}
    </div>
  )
}

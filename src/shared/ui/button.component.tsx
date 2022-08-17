import classNames from 'classnames'
import type { DetailedHTMLProps } from 'react'
import { useMemo } from 'react'

export enum ButtonTheme {
  'primary',
  'light',
  'warn',
  'white',
}

interface IButtonProperties
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ButtonTheme
  additionalClasses?: string
  children?: any
}

export const Button = (properties: IButtonProperties) => {
  const {
    theme = ButtonTheme.primary,
    children,
    additionalClasses,
    ...nativeButtonAttribute
  } = properties

  const themeClasses = useMemo(() => {
    switch (theme) {
      case ButtonTheme.primary:
        return 'bg-blue text-white'
      case ButtonTheme.warn:
        return 'bg-lightRed text-red'
      case ButtonTheme.light:
        return 'bg-lightBlue2 text-blue'
      case ButtonTheme.white:
        return 'bg-white text-blue'
    }
  }, [theme])

  return (
    <button
      {...nativeButtonAttribute}
      className={classNames(
        'rounded-[0.75rem] px-3 py-[0.8438rem] font-bold duration-200 ease-out hover:opacity-70',
        themeClasses,
        additionalClasses
      )}
    >
      {children}
    </button>
  )
}

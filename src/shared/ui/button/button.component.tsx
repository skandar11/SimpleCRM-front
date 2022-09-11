import classNames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { ButtonTheme } from './button-themes.constant'

export interface IButtonProperties
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  theme?: ButtonTheme
  children: any
  href?: string
  className?: string
}
export function Button(props: IButtonProperties) {
  const { children, theme = ButtonTheme.primary, href, className, ...rest } = props
  const styles = React.useMemo(() => {
    switch (theme) {
      case ButtonTheme.primary:
        return 'bg-primary-button-bg hover:bg-primary-button-bg--pressed text-white'
      case ButtonTheme.secondary:
        return 's'
      case ButtonTheme.light:
        return 'bg-light-button-bg hover:bg-light-button-bg--pressed text-light-button-text'
      default:
        return 'bg-primary-text text-white'
    }
  }, [theme])
  return !href ? (
    <button
      className={classNames(
        'flex items-center justify-center rounded-[4px] px-[1.9rem] py-[0.8rem] font-bold',
        styles,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <Link
      to={href}
      className={classNames(
        'flex items-center justify-center rounded-[4px] px-[1.9rem] py-[0.8rem] font-bold',
        styles,
        className
      )}
    >
      {children}
    </Link>
  )
}

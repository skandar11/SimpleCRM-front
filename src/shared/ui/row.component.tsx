import classNames from 'classnames'
import * as React from 'react'

export interface IRowProperties {
  children: any
  className?: string
}

function Row({ children, className }: IRowProperties) {
  return (
    <div
      className={classNames(
        'w-full frame rounded-base px-2 py-3 flex items-center',
        className
      )}
    >
      {children}
    </div>
  )
}

const Left: React.FC<any> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('row__left mr-2', className)} {...rest}>
      {children}
    </div>
  )
}

const Right: React.FC<any> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('row__right ml-auto', className)} {...rest}>
      {children}
    </div>
  )
}

const Body: React.FC<any> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('row__body', className)} {...rest}>
      {children}
    </div>
  )
}

Row.Left = Left
Row.Right = Right
Row.Body = Body

export { Row }

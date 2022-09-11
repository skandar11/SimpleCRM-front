import classNames from 'classnames'
import * as React from 'react'

export interface IBannerProperties {
  children: any
  className?: string
}

function Banner({ children, className }: IBannerProperties) {
  return (
    <div className="frame banner rounded-frame  flex flex-col w-full">{children}</div>
  )
}

const Header: React.FC<any> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('banner__header py-2 px-2 text-sm', className)} {...rest}>
      {children}
    </div>
  )
}

const Body: React.FC<any> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        'banner__body border-t-2 border-t-page-border py-2 px-2',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Banner.Header = Header
Banner.Body = Body

export { Banner }

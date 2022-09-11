import * as React from 'react'

export interface IClientInfoFieldProperties {
  icon: any
  children: any
  className?: string
}

export function ClientInfoField({
  children,
  icon,
  className,
}: IClientInfoFieldProperties) {
  return (
    <div className="frame w-full px-2 flex rounded-frame py-3">
      <div className="mr-2 w-6">{icon}</div>
      <span className={className}>{children}</span>
    </div>
  )
}

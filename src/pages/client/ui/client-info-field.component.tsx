import * as React from 'react'

export interface IClientInfoFieldProperties {
  title: string | undefined
  content: string | undefined
}

export function ClientInfoField({ content, title }: IClientInfoFieldProperties) {
  return (
    <p className="w-full grid grid-cols-2 gap-3">
      <span className="font-semibold">{title}: </span>
      <span>{content}</span>
    </p>
  )
}

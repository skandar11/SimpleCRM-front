import type { ISwitcherItem } from '@shared/ui'
import * as React from 'react'

export interface IuseSwitcherProperties {
  items: ISwitcherItem[]
}

export default function useSwitcher(properties: IuseSwitcherProperties) {
  const { items } = properties
  const [switcher, setSwitcher] = React.useState(items[0])
  function handleSwitcher(index: number) {
    setSwitcher(items[index])
  }

  return { switcher, handleSwitcher }
}

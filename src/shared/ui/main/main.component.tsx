import './main.scss'

import classNames from 'classnames'

export interface IMainProperties {
  children: any
  className?: string
}

export function Main(props: IMainProperties) {
  return <main className={classNames('main', props.className)}>{props.children}</main>
}

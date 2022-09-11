import { NavLink } from 'react-router-dom'

export interface IFooterItemProperties {
  children: any
  to: string
}

function FooterItem(props: IFooterItemProperties) {
  return (
    <NavLink to={props.to} className="footer__item">
      {props.children}
    </NavLink>
  )
}

function FooterItemIcon(props: any) {
  return <div className="flex flex-col w-6">{props.children}</div>
}

FooterItem.Icon = FooterItemIcon

export { FooterItem, FooterItemIcon }

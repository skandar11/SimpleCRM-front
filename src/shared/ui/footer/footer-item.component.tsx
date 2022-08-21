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
  return <div className="flex flex-col">{props.children}</div>
}

function FooterItemTitle(props: any) {
  return <div className="flex flex-col">{props.children}</div>
}

FooterItem.Icon = FooterItemIcon
FooterItem.Title = FooterItemTitle

export { FooterItem, FooterItemIcon, FooterItemTitle }

import { ClientsIcon, HomeIcon, ScheduleIcon } from '../icons'
import { GraphicIcon } from '../icons/graphic.icon'
import { ProfileIcon } from '../icons/profile.icon'
import { FooterItem } from './footer-item.component'

export interface IFooterNavProperties {}

export function FooterNav(props: IFooterNavProperties) {
  return (
    <nav className="footer__nav">
      <FooterItem to="/">
        <FooterItem.Icon>
          <HomeIcon />
        </FooterItem.Icon>
      </FooterItem>

      <FooterItem to="/schedule">
        <FooterItem.Icon>
          <ScheduleIcon />
        </FooterItem.Icon>
      </FooterItem>

      <FooterItem to="/clients">
        <FooterItem.Icon>
          <ClientsIcon />
        </FooterItem.Icon>
      </FooterItem>

      <FooterItem to="/finances">
        <FooterItem.Icon>
          <GraphicIcon />
        </FooterItem.Icon>
      </FooterItem>

      <FooterItem to="/notifications">
        <FooterItem.Icon>
          <ProfileIcon />
        </FooterItem.Icon>
      </FooterItem>
    </nav>
  )
}

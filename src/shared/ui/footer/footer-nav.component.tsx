import {
  ClientsIcon,
  FinancesIcon,
  HomeIcon,
  NotificationsIcon,
  ScheduleIcon,
} from '../icons'
import { FooterItem } from './footer-item.component'

export interface IFooterNavProperties {}

export function FooterNav(props: IFooterNavProperties) {
  return (
    <nav className="footer__nav">
      <FooterItem to="/">
        <FooterItem.Icon>
          <HomeIcon />
        </FooterItem.Icon>
        <FooterItem.Title>Главная</FooterItem.Title>
      </FooterItem>

      <FooterItem to="/schedule">
        <FooterItem.Icon>
          <ScheduleIcon />
        </FooterItem.Icon>
        <FooterItem.Title>Расписание</FooterItem.Title>
      </FooterItem>

      <FooterItem to="/clients">
        <FooterItem.Icon>
          <ClientsIcon />
        </FooterItem.Icon>
        <FooterItem.Title>Клиенты</FooterItem.Title>
      </FooterItem>

      <FooterItem to="/finances">
        <FooterItem.Icon>
          <FinancesIcon />
        </FooterItem.Icon>
        <FooterItem.Title>Финансы</FooterItem.Title>
      </FooterItem>

      <FooterItem to="/notifications">
        <FooterItem.Icon>
          <NotificationsIcon />
        </FooterItem.Icon>
        <FooterItem.Title>Уведомления</FooterItem.Title>
      </FooterItem>
    </nav>
  )
}

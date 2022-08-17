import { useAppDispatch } from '@app/store/store.hook'
import { useGetMeQuery } from '@features/auth/api/auth.api'
import { logout } from '@features/auth/model/auth.slice'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import AuthForm from '../../features/auth/ui/auth-form/auth-form.component'
import { FoldersIcon, UsersIcon } from './icons'
import { TabButton } from './tab-button.component'

export const Sidebar = () => {
  const location = useLocation()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { data: user } = useGetMeQuery()

  const role = useMemo(() => {
    switch (user?.data.role) {
      case 0:
        return 'Пользователь'
      case 1:
        return 'Администратор'
      case 2:
        return 'Менеджер'
      default:
        break
    }
  }, [user?.data.role])

  return (
    <aside className="bg-blue h-full p-6 max-w-[18.75rem] text-white">
      {!location.pathname.includes('/login') ? (
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl">
              {user?.data?.surname || ''} {user?.data?.name || ''}
            </h2>
            <div className="mt-2">{role}</div>
            <TabButton
              additionalClasses="mt-8"
              buttonConfig={{ text: 'Пользователи', icon: <UsersIcon /> }}
              active={location.pathname.includes('/users')}
              link="users"
            ></TabButton>
            <TabButton
              additionalClasses="mt-[0.9375rem]"
              buttonConfig={{ text: 'Вакансии', icon: <FoldersIcon /> }}
              active={location.pathname.includes('/vacancies')}
              link="vacancies"
            ></TabButton>
          </div>
          <span
            className="font-bold text-2xl cursor-pointer"
            onClick={() => {
              dispatch(logout())
              navigate('/login')
            }}
          >
            Выйти
          </span>
        </div>
      ) : (
        <AuthForm />
      )}
    </aside>
  )
}

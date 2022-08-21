import { Auth, AuthModel } from '@features/auth'
import { Footer, Header } from '@shared/ui'
import { Main } from '@shared/ui/main/main.component'
import { Link } from 'react-router-dom'

export interface IClientsPageProperties {}

export function AuthPage(props: IClientsPageProperties) {
  const isLogin = AuthModel.useIsLogin()
  AuthModel.useAlreadyAuthRedirect()

  return (
    <>
      <Header>
        <h1>Авторизация</h1>
      </Header>
      <Main>
        <div className="h-full flex flex-col items-center justify-evenly">
          <Auth.AuthForm />
          {isLogin ? (
            <div>
              <h2>Еще не зарегистрированы?</h2>
              <Link to="/auth/registration">Зарегистрироваться</Link>
            </div>
          ) : (
            <div>
              <h2>Уже зарегистрированы?</h2>
              <Link to="/auth/login">Войти</Link>
            </div>
          )}
        </div>
      </Main>
      <Footer>
        <div></div>
      </Footer>
    </>
  )
}

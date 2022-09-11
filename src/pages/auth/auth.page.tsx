import { AuthModelService, AuthUiService } from '@features/auth'
import image from '@shared/assets/main-logo.png'
import { Header } from '@shared/ui'
import { Button, ButtonTheme } from '@shared/ui/button'
import { OrRegistration } from '@shared/ui/icons/or-registratoin'
import { Main } from '@shared/ui/main/main.component'

export interface IClientsPageProperties {}

export function AuthPage(props: IClientsPageProperties) {
  const isLogin = AuthModelService.useIsLogin()
  AuthModelService.useAlreadyAuthRedirect()

  return (
    <>
      <Header>
        <h1></h1>
      </Header>
      <Main>
        <div className="container h-full flex flex-col items-center justify-between py-6">
          <div className="flex flex-col items-center justify-center font-bold text-3xl">
            <img src={image} alt="" />
            <p>SimpleFit</p>
          </div>

          <AuthUiService.AuthForm />
          {isLogin ? (
            <div className="flex flex-col w-full">
              <div className="w-3/4 mx-auto">
                <OrRegistration />
              </div>
              <Button theme={ButtonTheme.light} href="/auth/registration">
                Зарегистрироваться
              </Button>
            </div>
          ) : (
            <div>
              <h2>Уже зарегистрированы?</h2>
              <Button theme={ButtonTheme.light} href="/auth/login">
                Войти
              </Button>
            </div>
          )}
        </div>
      </Main>
    </>
  )
}

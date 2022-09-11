import './auth-form.scss'

import { useLoginMutation, useSignupMutation } from '@features/auth/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import { formatPhone } from '@shared/lib/formatters/format-phone'
import { Form, Input, PhoneInput } from '@shared/ui'
import { Button } from '@shared/ui/button'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { loginSchema, signupSchema } from '../model/auth-form.schema'
import { useIsLogin } from '../model/use-is-login.hook'

export interface IAuthFormProperties {}

export function AuthForm(properties: IAuthFormProperties) {
  const [phone, setPhone] = React.useState('')

  const isLogin = useIsLogin()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : signupSchema),
    mode: 'onTouched',
  })

  const [login] = useLoginMutation()
  const [signup] = useSignupMutation()

  const onLoginSubmit = async (e: any) => {
    try {
      await login({ ...e, login: formatPhone(e.login) }).unwrap()
      navigate('/', { replace: false })
    } catch {}
  }

  const onSignupSubmit = async (e: any) => {
    try {
      await signup({ ...e, login: formatPhone(e.login) }).unwrap()
      await login({ password: e.password, login: formatPhone(e.login) }).unwrap()
      navigate('/', { replace: false })
    } catch {}
  }

  return isLogin ? (
    <Form defaultValues={''} className="auth-form">
      <div className="auth-form__content">
        <PhoneInput name="login" control={control} />
        <Input
          setValue={() => {}}
          placeholder="Пароль"
          containerClassName="flex-1"
          name="password"
          register={register}
          errors={errors}
          type="password"
        />

        <Button onClick={handleSubmit(onLoginSubmit)}>Войти</Button>
      </div>
    </Form>
  ) : (
    <Form defaultValues={''} className="auth-form">
      <div className="auth-form__content">
        <PhoneInput name="login" control={control} />
        <Input
          setValue={() => {}}
          defaultValue={''}
          placeholder="Пароль"
          containerClassName="flex-1"
          name="password"
          register={register}
          errors={errors}
          type="password"
        />
        <Input
          setValue={() => {}}
          placeholder="Повторите пароль"
          containerClassName="flex-1"
          name="retryPassword"
          register={register}
          errors={errors}
          type="password"
        />
        <Button onClick={handleSubmit(onSignupSubmit)}>Зарегистрироваться</Button>
      </div>
    </Form>
  )
}

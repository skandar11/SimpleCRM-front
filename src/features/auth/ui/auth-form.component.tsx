import './auth-form.scss'

import { useLoginMutation, useSignupMutation } from '@features/auth/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Input } from '@shared/ui'
import { formatPhone } from '@shared/utils/format-phone'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
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
        <Controller
          name="login"
          control={control}
          // @ts-ignore
          render={({ field: { onChange, onBlur, value, name, ref } }) => {
            return (
              <ReactInputMask
                mask="+7 (999) 999-99-99"
                maskPlaceholder="+7"
                placeholder="+7"
                value={value}
                onChange={onChange}
                className="input"
              />
            )
          }}
        />
        <Input
          setValue={() => {}}
          placeholder="Пароль"
          containerClasses="flex-1"
          name="password"
          register={register}
          errors={errors}
          type="password"
        />

        <button onClick={handleSubmit(onLoginSubmit)}>Войти</button>
      </div>
    </Form>
  ) : (
    <Form defaultValues={''} className="auth-form">
      <div className="auth-form__content">
        <Controller
          name="login"
          control={control}
          // @ts-ignore
          render={({ field: { onChange, onBlur, value, name, ref } }) => {
            return (
              <ReactInputMask
                mask="+7 (999) 999-99-99"
                maskPlaceholder="+7"
                placeholder="+7"
                value={value}
                onChange={onChange}
                className="input"
              />
            )
          }}
        />
        <Input
          setValue={() => {}}
          defaultValue={''}
          placeholder="Пароль"
          containerClasses="flex-1"
          name="password"
          register={register}
          errors={errors}
          type="password"
        />
        <Input
          setValue={() => {}}
          placeholder="Повторите пароль"
          containerClasses="flex-1"
          name="retryPassword"
          register={register}
          errors={errors}
          type="password"
        />
        <button onClick={handleSubmit(onSignupSubmit)}>Зарегистрироваться</button>
      </div>
    </Form>
  )
}

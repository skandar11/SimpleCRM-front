import * as yup from 'yup'

export const signupSchema = yup.object().shape({
  login: yup.string().required('Поле "Номер телефона" обязательное!'),
  password: yup.string().required('Поле "Пароль" обязательное!'),
  retryPassword: yup
    .string()
    .required('Поле "Повторите пароль" обязательное!')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

export const loginSchema = yup.object().shape({
  login: yup.string().required('Поле "Номер телефона" обязательное!'),
  password: yup.string().required('Поле "Пароль" обязательное!'),
})

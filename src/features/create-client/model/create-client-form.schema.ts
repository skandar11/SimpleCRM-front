import * as yup from 'yup'

export const createClientSchema = yup.object().shape({
  name: yup.string().required('Поле "Имя" обязательное!'),
  phoneNumber: yup.string().required('Поле "Номер телефона" обязательное!'),
  birthDay: yup.string().required('Поле "Дата рождения" обязательное!'),
  contraindications: yup.string().required('Поле "Противопоказания" обязательное!'),
  email: yup
    .string()
    .email('Email введен не корректно')
    .required('Поле "Email" обязательное!'),
})

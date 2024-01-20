import * as yup from 'yup'

import { UserEnum } from './enum-type'

// NEWSLETTER
export const newsletterInitialValues = {
  email: '',
}
export const newsletterValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
})

// AUTH
export const authCardValidationSchema = yup.object().shape({
  _type: yup.string().required('Usuário tipo é obrigatório'),
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
})
export const authCardInitialValues = {
  _type: UserEnum.Customer,
  email: '',
  password: '',
}

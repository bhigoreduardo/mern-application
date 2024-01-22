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
export const signInValidationSchema = yup.object().shape({
  _type: yup.string().required('Usuário tipo é obrigatório'),
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
})
export const signIninitialValues = {
  _type: UserEnum.Customer,
  email: '',
  password: '',
}
export const signUpvalidationSchema = signInValidationSchema.shape({
  name: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  whatsApp: yup.string().required('Número de telefone é obrigatório'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .required('Repetir senha é obrigatório'),
  terms: yup.bool().oneOf([true], 'Termos é obrigatório'),
})
export const signUpinitialValues = {
  ...signIninitialValues,
  name: '',
  cpf: '',
  whatsApp: '',
  repeatPassword: '',
  terms: false,
}

// TRACKER
export const trackerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  code: yup
    .string()
    .length(8, 'Número do pedido possui 8 caracteres')
    .required('Número do pedido é obrigatório'),
})
export const trackerInitialValues = {
  email: '',
  code: '',
}

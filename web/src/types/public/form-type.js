import * as yup from 'yup'

import { UserEnum } from './enum-type'
import { checkFileSize, checkImageFormat } from '../../utils/helper'

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

export const activatedTokenValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
})
export const activatedTokenInitialValues = { email: '' }

export const generateRecoveryPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
})
export const generateRecoveryPasswordInitialValues = {
  _type: UserEnum.Customer,
  email: '',
}

export const recoveryPasswordValidationSchema = yup.object().shape({
  password: yup.string().required('Senha é obrigatório'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .required('Repetir senha é obrigatório'),
})
export const recoveryPasswordInitialValues = {
  _type: UserEnum.Customer,
  password: '',
  repeatPassword: '',
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

// CHECKOUT
export const checkoutValidationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  whatsApp: yup.string().required('Número de telefone é obrigatório'),
  address: yup
    .object({
      street: yup.string().required('Rua é obrigatório'),
      neighborhood: yup.string().required('Bairro é obrigatório'),
      city: yup.string().required('Cidade é obrigatório'),
      state: yup
        .string()
        .max(2, 'Informe somente a UF. Ex.: SP')
        .required('Estado é obrigatório'),
      number: yup.string().optional(),
      zipCode: yup.string().required('CEP é obrigatório'),
      complement: yup.string().optional(),
    })
    .required('Endereço é obrigatório'),
  payment: yup
    .object({
      method: yup.string().required('Forma de pagamento é obrigatório'),
      availableInstallments: yup.bool(),
      cardName: yup
        .string()
        .when('availableInstallments', (value) =>
          value.includes(true)
            ? yup.string().required('Nome no cartão é obrigatório')
            : yup.string().optional()
        ),
      cardNumber: yup
        .string()
        .when('availableInstallments', (value) =>
          value.includes(true)
            ? yup.string().required('Número do cartão é obrigatório')
            : yup.string().optional()
        ),
      cardDate: yup
        .string()
        .when('availableInstallments', (value) =>
          value.includes(true)
            ? yup.string().required('Data do cartão é obrigatório')
            : yup.string().optional()
        ),
      cardCvv: yup
        .string()
        .when('availableInstallments', (value) =>
          value.includes(true)
            ? yup.string().required('CVV é obrigatório')
            : yup.string().optional()
        ),
      installments: yup
        .string()
        .when('availableInstallments', (value) =>
          value.includes(true)
            ? yup.string().required('Parcelas é obrigatório')
            : yup.string().optional()
        ),
    })
    .required('Pagamento é obrigatório'),
  obs: yup.string().optional(),
  cart: yup
    .array()
    .of(
      yup.object({
        product: yup.string().required('Produto é obrigatório'),
        color: yup.string().required('Cor é obrigatório'),
        quantity: yup.number().required('Quantidade é obrigatório'),
      })
    )
    .min(1, 'Pelo menos um produto é obrigatório'),
})
export const checkoutInitialValues = {
  name: '',
  email: '',
  whatsApp: '',
  address: {
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    number: '',
    zipCode: '',
    complement: '',
  },
  payment: {
    method: '',
    availableInstallments: false,
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCvv: '',
    installments: '',
  },
  obs: '',
}

// REVIEW
export const reviewValidationSchema = yup.object().shape({
  image: yup.string().optional(),
  order: yup.string().required('Pedido é obrigatório'),
  cartItem: yup.string().required('Item é obrigatório'),
  stars: yup.number().required('Avaliação é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
})

// ACCOUNT
export const profileSignUpValidationSchema = yup.object().shape({
  _type: yup.string().required('Usuário tipo é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  whatsApp: yup.string().required('Número de telefone é obrigatório'),
})
export const profileUpdateValidationSchema =
  profileSignUpValidationSchema.shape({
    image: yup
      .mixed()
      .optional()
      .test('fileType', 'Formato inválido', (value) =>
        checkImageFormat(value, true)
      )
      .test('fileSize', 'Máximo 70kb', (value) =>
        checkFileSize(value, 1024 * 70, true)
      ),
  })

export const addressValidationSchema = yup.object().shape({
  street: yup.string().required('Rua é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  state: yup
    .string()
    .max(2, 'Informe somente a UF. Ex.: SP')
    .required('Estado é obrigatório'),
  number: yup.string().optional(),
  zipCode: yup.string().required('CEP é obrigatório'),
  complement: yup.string().optional(),
})
export const addressInitialValues = {
  street: '',
  neighborhood: '',
  city: '',
  state: '',
  number: '',
  zipCode: '',
  complement: '',
}

export const passwordValidationSchema = yup.object().shape({
  password: yup.string().required('Senha atual é obrigatório'),
  newPassword: yup.string().required('Nova senha é obrigatório'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Devem ser igual a nova senha')
    .required('Repetir nova senha é obrigatório'),
})
export const passwordInitialValues = {
  password: '',
  newPassword: '',
  repeatPassword: '',
}

// CONTACT
export const contactValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, 'Informe email válido')
    .required('Email é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
  message: yup.string().required('Mensagem é obrigatório'),
})
export const contactInitialValues = {
  email: '',
  name: '',
  message: '',
}

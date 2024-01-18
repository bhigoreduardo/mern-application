import * as yup from 'yup'

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

import * as yup from 'yup'

import { checkFileSize, checkImageFormat } from '../../utils/helper'

// PRODUCT
export const categoryValidationSchema = yup.object().shape({
  image: yup
    .mixed()
    .required('Imagem é obrigatório')
    .test('fileType', 'Formato inválido', (value) => checkImageFormat(value))
    .test('fileSize', 'Máximo 70kb', (value) =>
      checkFileSize(value, 1024 * 70)
    ),
  name: yup.string().required('Nome é obrigatório'),
  parent: yup.string().optional(),
  description: yup.string().optional(),
  product: yup.array().of(yup.string()).optional(),
})
export const categoryInitalValues = {
  image: '',
  name: '',
  parent: '',
  description: '',
  product: [],
}

export const colorValidationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  color: yup.string().required('Cor é obrigatório'),
  description: yup.string().optional(),
})
export const colorInitialValues = {
  name: '',
  color: '',
  description: '',
}

export const brandValidationSchema = yup.object().shape({
  image: yup
    .mixed()
    .required('Imagem é obrigatório')
    .test('fileType', 'Formato inválido', (value) => checkImageFormat(value))
    .test('fileSize', 'Máximo 70kb', (value) =>
      checkFileSize(value, 1024 * 70)
    ),
  name: yup.string().required('Nome é obrigatório'),
  description: yup.string().optional(),
})
export const brandInitialValues = {
  image: '',
  name: '',
  description: '',
}

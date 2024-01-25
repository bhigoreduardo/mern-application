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

export const otherInfoValidationsSchema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
})
export const otherInfoInitialValues = {
  title: '',
  description: '',
}

export const inventoryValidationInfoSchema = yup.object().shape({
  color: yup.string().required('Cor é obrigatório'),
  stock: yup.number().required('Quantidade é obrigatório'),
  price: yup.number().required('Preço é obrigatório'),
  offer: yup
    .object({
      offerValue: yup.number().optional(),
      offerType: yup.string().optional(),
      offerPrice: yup.number().optional(),
      offerPriceDates: yup.array().optional(),
    })
    .optional(),
  featured: yup.bool().required('Pronta entrega é obrigatório'),
})

const coverValidation = yup
  .mixed()
  .required('Imagem é obrigatório')
  .test('fileType', 'Formato inválido', (value) => checkImageFormat(value))
  .test('fileSize', 'Máximo 70kb', (value) => checkFileSize(value, 1024 * 70))
export const productValidationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  sku: yup.string().optional(),
  code: yup.string().optional(),
  status: yup.bool().required('Status é obrigatório'),
  description: yup
    .object({
      overview: yup.string().required('Descrição é obrigatório'),
      otherInfos: yup.array().of(otherInfoValidationsSchema).optional(),
    })
    .required('Descrição é obrigatório'),
  additional: yup
    .object({
      detail: yup.string().required('Detalhe é obrigatório'),
      otherInfos: yup.array().of(otherInfoValidationsSchema).optional(),
    })
    .required('Informação adicional é obrigatório'),
  specification: yup
    .array()
    .of(otherInfoValidationsSchema)
    .min(1, 'Pelo menos 1 especificação é obrigatório'),
  productData: yup.object({
    inventory: yup.object({
      manageStock: yup.bool().required('Controle de estoque é obrigatório'),
      stockStatus: yup.bool().required('Exibir estoque é obrigatório'),
      lowStockWarning: yup.bool().required('Aviso de estoque é obrigatório'),
      info: yup
        .array()
        .of(inventoryValidationInfoSchema)
        .min(1, 'Pelo menos 1 produto deve ser adicionado'),
    }),
    shippingInfo: yup
      .object({
        weight: yup.number().required('Peso é obrigatório'),
        length: yup.number().required('Comprimento é obrigatório'),
        width: yup.number().required('Largura é obrigatório'),
        height: yup.number().required('Altura é obrigatório'),
        fee: yup.number().optional(),
        timeDelivery: yup.number().required('Tempo de entrega é obrigatório'),
        isFree: yup.bool().required('Frete grátis é obrigatório'),
      })
      .required('Informações de entrega é obrigatório'),
  }),
  seoData: yup
    .object({
      slug: yup.string().required('Slug é obrigatório'),
      metaTitle: yup.string().required('Título é obrigatório'),
      metaDescription: yup.string().optional(),
    })
    .required('Dados de busca é obrigatório'),
  published: yup
    .object({
      step: yup.string().required('Etapa da publicação é obrigatório'),
      visibility: yup
        .string()
        .required('Visibilidade da publicação é obrigatório'),
    })
    .required('Publicação é obrigatório'),
  category: yup
    .array()
    .of(yup.string())
    .min(1, 'Pelo menos 1 categoria deve ser selecionada'),
  brand: yup.string().required('Marca é obrigatório'),
  tags: yup.array(yup.string()).optional(),
  cover: coverValidation,
  backCover: coverValidation,
  gallery: yup
    .array()
    .of(
      yup
        .mixed()
        .required('Imagem é obrigatório')
        .test('fileType', 'Formato inválido', (value) =>
          checkImageFormat(value)
        )
        .test('fileSize', 'Máximo 300kb', (value) =>
          checkFileSize(value, 1024 * 300)
        )
    )
    .min(2, 'Mínimo 2 imagens'),
  video: yup.string().optional(),
})
export const productInitialValues = {
  name: '',
  sku: '',
  code: '',
  status: true,
  description: {
    overview: '',
    otherInfos: [],
  },
  additional: {
    detail: '',
    otherInfos: [],
  },
  specification: [],
  productData: {
    inventory: {
      manageStock: true,
      stockStatus: true,
      lowStockWarning: true,
      info: [],
    },
    shippingInfo: {
      weight: '',
      length: '',
      width: '',
      height: '',
      fee: 0,
      timeDelivery: '',
      isFree: false,
    },
  },
  seoData: {
    slug: '',
    metaTitle: '',
    metaDescription: '',
  },
  published: {
    step: '',
    visibility: '',
  },
  category: [],
  brand: '',
  tags: [],
  cover: '',
  backCover: '',
  gallery: [],
  video: '',
}

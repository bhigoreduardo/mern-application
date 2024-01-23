const SUPPORTED_IMAGE_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/bmp',
  'image/svg+xml',
  'image/webp',
]

export const checkImageFormat = (value, allowNullable = false) => {
  if (value && typeof value === 'object')
    return SUPPORTED_IMAGE_FORMATS.includes(value.type)
  return allowNullable || !!value
}

export const checkFileSize = (value, limit, allowNullable = false) => {
  if (value && typeof value === 'object') return value.size <= limit
  return allowNullable || !!value
}

export const imageMessage = (limit) =>
  `Tamanho máximo da imagem aceito é de até ${limit}, nos formatos: ${SUPPORTED_IMAGE_FORMATS.join(
    ', '
  )}`

export const phoneMask = (value) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{0})(\d)/, '$1($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})(\d+?$)/, '$1')
    : ''

export const mobileMask = (value) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{0})(\d)/, '$1($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d)(\d{1})(\d)/, '$1 $2$3')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})(\d+?$)/, '$1')
    : ''

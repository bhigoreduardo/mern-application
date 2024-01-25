import { UserEnum } from '../../types/public/enum-type'

// USER
export const store = {
  _id: '659edc43f26a45ceed256d3c',
  _type: UserEnum.Store,
  name: 'John Doe',
  email: 'email@email.com',
  whatsApp: '11999768890',
  image: 'users/customer.webp',
  address: {
    street: 'Avenida Walter Banho',
    neighborhood: 'Universidade',
    city: 'Macapá',
    state: 'AP',
    number: '837',
    zipCode: '68903516',
    complement: '',
  },
  password: {
    salt: 'uwLQ0FNKQl',
    hash: 'uwLQ0FNKQl',
  },
  recoveryPassword: {
    passwordResetToken: '',
    passwordResetExpires: '',
    passwordChangedAt: '',
  },
  status: true,
  activatedStatus: true,
  cpf: '13767503255',
  terms: true,
  activated: {
    activatedToken: '',
    activatedTokenExpire: '',
    activatedChangedAt: '',
  },
  chatStatus: true,
  createdAt: '10 Jan 2020',
}

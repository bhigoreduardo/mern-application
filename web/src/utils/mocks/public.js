import {
  OfferEnum,
  OrderStatusEnum,
  StepEnum,
  UserEnum,
  VisibilityEnum,
} from '../../types/public/enum-type'

export const categories = []
export const brands = []
export const colors = []
export const reviews = []

export const product = {
  _id: '659edb43f26a45ceed256d3a',
  name: 'Lorem Ipsum is simply dummy',
  sku: '4fafc201',
  code: '4fafc201-1fb5',
  description: {
    overview: 'It is a long established fact that',
    otherInfos: [
      {
        title: 'There are many variations of passages',
        description:
          "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
      },
    ],
  },
  additional: {
    detail: 'It is a long established fact that',
    otherInfos: [
      {
        title: 'There are many variations of passages',
        description:
          "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
      },
    ],
  },
  specification: [
    {
      title: 'It is a long established fact that',
      description:
        "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    },
  ],
  productData: {
    media: {
      cover: 'products/cover.png',
      backCover: 'products/backCover.jpg',
      gallery: [
        'products/gallery-1.jpg',
        'products/gallery-2.jpg',
        'products/gallery-3.jpg',
        'products/gallery-4.jpg',
        'products/gallery-5.jpg',
        'products/gallery-6.jpg',
      ],
      video: '',
    },
    inventory: {
      manageStock: true,
      stockStatus: true,
      lowStockWarning: true,
      info: [
        {
          color: {
            _id: '659edb43f26a45ceed256d3b',
            name: 'Azul',
            color: '#1e40af',
          },
          stock: 10,
          price: 350,
          offer: {
            offerValue: 10,
            offerType: OfferEnum.Money,
            offerPrice: 340,
            offerPriceDates: [new Date(), new Date('20 jan 2023')],
          },
          featured: true,
        },
        {
          color: {
            _id: '659edb43f26a45ceed256d3c',
            name: 'Preto',
            color: '#000',
          },
          stock: 10,
          price: 550,
          offer: {
            offerValue: 0,
            offerType: OfferEnum.Default,
            offerPrice: 550,
            offerPriceDates: [],
          },
          featured: true,
        },
      ],
    },
    shippingInfo: {
      weight: 20,
      length: 100,
      width: 70,
      height: 80,
      fee: 0,
      timeDelivery: 2,
      isFree: true,
    },
  },
  seoData: {
    slug: 'lorem-ipsum-is-simply-dummy',
    metaTitle: 'Lorem Ipsum is simply dummy',
    metaDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  published: {
    step: StepEnum.Completed,
    visibility: VisibilityEnum.Public,
  },
  category: [
    {
      _id: '659edb43f26a45ceed256d3f',
      name: 'Cadeiras',
    },
    {
      _id: '659edb43f26a45ceed256d3q',
      name: 'Poltronas',
    },
  ],
  brand: {
    _id: '659edb43f26a45ceed256d3b',
    name: 'Castor',
    image: 'castor.webp',
  },
  tags: ['Cadeira', 'Conforto', 'Poltrona'],
  rangePrice: { min: 350, max: 550, avg: 450 },
  status: true,
  sales: 10,
  amountSales: 5500,
  reviews,
  reviewsAvg: {
    amount: 6,
    avg: 5,
    starAmount: {
      oneStar: 1,
      twoStar: 1,
      threeStar: 2,
      fourStar: 3,
      fiveStar: 5,
    },
  },
  createdAt: '10 Jan 2019',
}

export const compare = { ...product }

export const wishlist = { ...product }

export const history = {
  [new Date().toISOString().split('T')[0]]: new Array(10).fill(product),
  [new Date('20 Jan 2020').toISOString().split('T')[0]]: new Array(10).fill(
    product
  ),
}

// HOME
export const hero = {}

// STORE
export const payment = [
  {
    _id: '659edb43f26a45ceed256d5a',
    image: 'payments/transferencia-bancaria.png',
    method: 'Transferência bancária - Débito',
    availableGateway: false,
    availableInstallments: false,
    infoInstallments: [],
  },
  {
    _id: '659edb43f26a45ceef256d5a',
    image: 'payments/visa.png',
    method: 'Cartão de Crédito - VISA',
    availableGateway: true,
    availableInstallments: true,
    infoInstallments: [
      {
        installments: 3,
        fee: 0,
      },
      {
        installments: 6,
        fee: 1,
      },
      {
        installments: 9,
        fee: 1.25,
      },
      {
        installments: 12,
        fee: 1.5,
      },
    ],
  },
]

// ORDER
export const order = {
  _id: '659edc43f26a45ceed956d3c',
  customer: {
    user: {
      _id: '659edc43f26a45ceed256d3c',
      image: 'users/customer.webp',
    },
    name: 'John Doe',
    email: 'email@email.com',
    whatsApp: '11999768890',
  },
  code: '4fafc201-1fb5',
  address: {
    street: 'Avenida Walter Banho',
    neighborhood: 'Universidade',
    city: 'Macapá',
    state: 'AP',
    number: '837',
    zipCode: '68903516',
    complement: '',
  },
  cart: [
    {
      product,
      // color: colors[0],
      // background: colors[0].color,
      // colorName: colors[0].name,
      name: product.name,
      cover: 'products/cover.png',
      price: 299,
      regularPrice: 280,
      fee: 12,
      timeDelivery: 2,
      quantity: 3,
      subAmount: 690,
      review: reviews[0],
      reviewd: false,
    },
  ],
  payment: {
    method: {},
    fee: 10,
    amount: 459.99,
    cartQuantity: 5,
  },
  status: [
    {
      history: OrderStatusEnum.Pending,
      dateTime: Date.now(),
    },
  ],
  obs: '',
  createdAt: '10 Jan 2020',
}

export const cart = {
  product: '659edb43f26a45ceed256d3a',
  color: '659edb43f26a45ceed256d3b',
  cover: 'products/cover.png',
  name: 'Lorem Ipsum is simply dummy',
  background: '#1e40af',
  colorName: 'Azul',
  stock: 20,
  price: 350,
  regularPrice: 400,
  quantity: 2,
  fee: 10,
}

// USER
export const customer = {
  _id: '659edc43f26a45ceed256d3c',
  _type: UserEnum.Customer,
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
  historyAvailable: true,
  // orders: [],
  amountSpend: 1000,
  createdAt: '10 Jan 2020',
}

// CONTACT
export const faqItems = []

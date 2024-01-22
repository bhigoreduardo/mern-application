import {
  OfferEnum,
  StepEnum,
  UserEnum,
  VisibilityEnum,
} from '../../types/public/enum-type'

// PRODUCT
export const categories = [
  {
    _id: '659edb43f26a45ceed256d3d',
    parent: null,
    name: 'Mesas',
    slug: 'mesas',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/mesas.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3f',
    parent: null,
    name: 'Cadeiras',
    slug: 'cadeiras',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/cadeiras.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3g',
    parent: '659edb43f26a45ceed256d3f',
    name: 'Sofás',
    slug: 'sofas',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/sofas.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3q',
    parent: '659edb43f26a45ceed256d3f',
    name: 'Poltronas',
    slug: 'poltronas',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/poltronas.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3h',
    parent: null,
    name: 'Armários',
    slug: 'armarios',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/armarios.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3i',
    parent: null,
    name: 'Estantes',
    slug: 'estantes',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/estantes.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
  {
    _id: '659edb43f26a45ceed256d3o',
    parent: null,
    name: 'Decorações',
    slug: 'decoracoes',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'categories/decoracoes.jpg',
    products: [],
    spotlights: [],
    store: null,
    banner: [
      {
        product: null,
        shortDescription: '',
        bagde: '',
      },
    ],
  },
]

export const brands = [
  {
    _id: '659edb43f26a45ceed256d3b',
    name: 'Castor',
    slug: 'castor',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brands/castor.webp',
  },
  {
    _id: '659edb43f26a45ceed259d3b',
    name: 'Rimo',
    slug: 'rimo',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brands/rimo.webp',
  },
  {
    _id: '659edb43f26a45ceed250d3b',
    name: 'Patrimar',
    slug: 'patrimar',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brands/patrimar.png',
  },
  {
    _id: '659edb43f26a45ceed270d3b',
    name: 'Philips',
    slug: 'philips',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brands/philips.webp',
  },
  {
    _id: '659edb43f16a45ceed270d3b',
    name: 'Toshiba',
    slug: 'toshiba',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brands/toshiba.png',
  },
]

export const colors = [
  {
    _id: '659edb43f26a45ceed256d3b',
    name: 'Azul',
    slug: 'azul',
    color: '#1e40af',
    description: '',
    products: [],
  },
  {
    _id: '659edb43f26a45ceed256d3c',
    name: 'Preto',
    slug: 'preto',
    color: '#000',
    description: '',
    products: [],
  },
]

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
}

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
  reviews: [
    {
      customer: {
        _id: '659edc43f26a45ceed256d3c',
        name: 'John Doe',
        image: 'customer.webp',
      },
      stars: 5,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      createdAt: '10 Jan 2021',
    },
  ],
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
}

// HOME
export const hero = {
  slider: [
    {
      title: 'It is a long established fact that a reader',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      product: {
        _id: '659edb43f26a45ceed256d3a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'products/cover.png',
        price: 550,
        offer: 350,
      },
    },
    {
      title: 'It is a long established fact that a reader',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      product: {
        _id: '659edb43f26a45ceed256d3a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'products/cover.png',
        price: 550,
        offer: 350,
      },
    },
  ],
  banner: [
    {
      subTitle: 'It is a long established fact',
      product: {
        _id: '659edb43f26a45ceed256d3a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'products/cover.png',
        price: 550,
        offer: 350,
      },
      badge: '20% off',
    },
    {
      subTitle: '',
      product: {
        _id: '659edb43f26a45ceed256d3a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'products/cover.png',
        price: 550,
        offer: 350,
      },
      badge: '',
    },
  ],
}

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

// CUSTOMER
export const customer = [
  '{{repeat(11, 7)}}',
  {
    _id: '{{objectId()}}',
    _type: '',
    name: '{{firstName()}} {{surname()}}',
    email: '{{email()}}',
    whatsApp: '{{integer(10000000000, 100000000000)}}',
    image: 'customer/customer-{{index()+1}}.webp',
    address: {
      street: '{{street()}}',
      neighborhood: '{{street()}}',
      city: '{{city()}}',
      state: '{{state()}}',
      number: '{{integer(1, 1000)}}',
      zipCode: '{{integer(10000000, 100000000)}}',
      complement: '{{lorem(4, "words")}}',
    },
    password: {
      salt: '{{guid()}}',
      hash: '{{guid()}}',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt:
        '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    },
    status: '{{bool()}}',
    activatedStatus: '{{bool()}}',
    cpf: '{{integer(10000000000, 100000000000)}}',
    terms: '{{bool()}}',
    activated: {
      activatedToken: '{{bool()}}',
      activatedTokenExpire: '',
      activatedChangedAt:
        '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    },
    chatStatus: '{{bool()}}',
    historyAvailable: '{{bool()}}',
    orders: [],
    amountSpend: '{{floating(1000, 4000, 2, "00.00")}}',
    createdAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updatedAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  },
]

// PRODUCT
export const product = [
  ('{{repeat(11)}}',
  {
    _id: '{{objectId()}}',
    name: '{{lorem(2, "words")}}',
    sku: '{{guid()}}',
    code: '{{guid()}}',
    description: {
      overview: '{{lorem(4, "words")}}',
      otherInfos: [
        '{{repeat(4)}}',
        {
          title: '{{lorem(4, "words")}}',
          description: '{{lorem(20, "words")}}',
        },
      ],
    },
    additional: {
      detail: '{{lorem(4, "words")}}',
      otherInfos: [
        '{{repeat(4)}}',
        {
          title: '{{lorem(4, "words")}}',
          description: '{{lorem(20, "words")}}',
        },
      ],
    },
    specification: [
      '{{repeat(4)}}',
      {
        title: '{{lorem(4, "words")}}',
        description: '{{lorem(20, "words")}}',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-{{index()+1}}-cover.jpg',
        backCover: 'product/product-{{index()+1}}-backCover.jpg',
        gallery: [
          '{{repeat(6)}}',
          'product/product-{{index()+1}}-gallery-{{index()+1}}.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: '{{bool()}}',
        stockStatus: '{{bool()}}',
        lowStockWarning: '{{bool()}}',
        info: [
          '{{repeat(2)}}',
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: '{{integer(1, 100)}}',
            price: '{{floating(100, 1000, 2, "00.00")}}',
            offer: {
              offerValue: '{{floating(0, 80, 2, "00.00")}}',
              offerType: '',
              offerPrice: '{{floating(100, 1000, 2, "00.00")}}',
              offerPriceDates: [
                '{{repeat(2)}}',
                '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
              ],
            },
            featured: '{{bool()}}',
          },
        ],
      },
      shippingInfo: {
        weight: '{{integer(1, 100)}}',
        length: '{{integer(1, 100)}}',
        width: '{{integer(1, 100)}}',
        height: '{{integer(1, 100)}}',
        fee: '{{integer(0, 20)}}',
        timeDelivery: '{{integer(0, 30)}}',
        isFree: '{{bool()}}',
      },
    },
    seoData: {
      slug: '{{lorem(1,"words")}}',
      metaTitle: '{{lorem(10,"words")}}',
      metaDescription: '{{lorem(40,"words")}}',
    },
    published: {
      step: '',
      visibility: '',
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
      image: 'brand/brand-1.webp',
    },
    tags: ['{{repeat(5)}}', '{{lorem(1, "words")}}'],
    rangePrice: {
      min: '{{floating(100, 1000, 2, "00.00")}}',
      max: '{{floating(100, 1000, 2, "00.00")}}',
      avg: '{{floating(100, 1000, 2, "00.00")}}',
    },
    status: '{{bool()}}',
    sales: '{{integer(1, 1000)}}',
    amountSales: '{{floating(100, 100000, 2, "00.00")}}',
    reviews: [],
    reviewsAvg: {
      amount: '{{integer(0, 100)}}',
      avg: '{{floating(0, 5, 2, "0.0")}}',
      starAmount: {
        oneStar: '{{integer(0, 100)}}',
        twoStar: '{{integer(0, 100)}}',
        threeStar: '{{integer(0, 100)}}',
        fourStar: '{{integer(0, 100)}}',
        fiveStar: '{{integer(0, 100)}}',
      },
    },
    createdAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updatedAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }),
]

// PAYMENT
export const payment = [
  '{{repeat(10)}}',
  {
    _id: '{{objectId()}}',
    image: 'payment/payment-{{index()+1}}.png',
    method: '{{lorem(4, "words")}}',
    availableGateway: '{{bool()}}',
    availableInstallments: '{{bool()}}',
    infoInstallments: [
      '{{repeat(6)}}',
      {
        installments: '{{index()+1}}',
        fee: '{{(index()+1)*0.05}}',
      },
    ],
    createdAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updatedAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  },
]

// ORDER
export const order = [
  '{{repeat(10)}}',
  {
    _id: '{{objectId()}}',
    customer: {
      user: {
        _id: '{{objectId()}}',
        image: 'customer/customer-{{index()+1}}.webp',
      },
      name: '{{firstName()}} {{surname()}}',
      email: '{{email()}}',
      whatsApp: '{{integer(10000000000, 100000000000)}}',
    },
    code: '{{guid()}}',
    address: {
      street: '{{street()}}',
      neighborhood: '{{street()}}',
      city: '{{city()}}',
      state: '{{state()}}',
      number: '{{integer(1, 1000)}}',
      zipCode: '{{integer(10000000, 100000000)}}',
      complement: '{{lorem(4, "words")}}',
    },
    cart: [
      '{{repeat(4)}}',
      {
        product: 'products[{{index()}}]',
        color: 'colors[{{index()}}]',
        background: 'colors[{{index()}}].color',
        colorName: 'colors[{{index()}}].name',
        name: 'products[{{index()}}].name',
        cover: 'products[{{index()}}].productData.media.cover',
        price: '{{floating(100, 1000, 2, "00.00")}}',
        regularPrice: '{{floating(100, 1000, 2, "00.00")}}',
        fee: '{{integer(0, 10)}}',
        timeDelivery: '{{integer(1, 30)}}',
        quantity: '{{integer(1, 10)}}',
        subAmount: '{{floating(100, 1000, 2, "00.00")}}',
        review: 'reviews[{{index()}}]',
        reviewd: '{{bool()}}',
      },
    ],
    payment: {
      method: {
        _id: '{{objectId()}}',
        method: 'payments[{{index()}}].method',
        availableInstallments: '{{bool()}}',
      },
      installments: 'payments[{{index()}}].infoInstallments[0]',
      fee: '{{integer(0, 10)}}',
      amount: '{{floating(100, 1000, 2, "00.00")}}',
      cartQuantity: '{{integer(1, 10)}}',
    },
    status: [
      {
        history: 'OrderStatusEnum.Created',
        dateTime:
          '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      },
      {
        history: 'OrderStatusEnum.Pending',
        dateTime:
          '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      },
    ],
    obs: '{{lorem(40, "words")}}',
    createdAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updatedAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  },
]

// MESSAGE
export const message = [
  '{{repeat(10)}}',
  {
    _id: '{{objectId()}}',
    userId: '{{objectId()}}',
    combineId: '{{objectId()}}{{objectId()}}',
    userInfo: {
      name: '{{firstName()}} {{surname()}}',
      image: 'user/user-{{index()+1}}.webp',
    },
    lastMessage: '{{lorem(40, "words")}}',
    viewd: '{{bool()}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    createdAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updatedAt:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  },
]

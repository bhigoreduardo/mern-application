import {
  DiscountEnum,
  LayoutEnum,
  OfferEnum,
  OrderStatusEnum,
  StepEnum,
  UserEnum,
  VisibilityEnum,
} from '../types/enum-type'

// HOME
export const hero = {
  slider: [
    {
      title: 'It is a long established fact that a reader',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      product: {
        _id: '65b587e2808ac5bf6c58ba7a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'product/product-1-cover.png',
        price: 550,
        offer: 350,
      },
    },
    {
      title: 'It is a long established fact that a reader',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      product: {
        _id: '65b587e2808ac5bf6c58ba7a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'product/product-2-cover.png',
        price: 550,
        offer: 350,
      },
    },
  ],
  banner: [
    {
      subTitle: 'It is a long established fact',
      product: {
        _id: '65b587e2808ac5bf6c58ba7a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'product/product-3-cover.png',
        price: 550,
        offer: 350,
      },
      badge: '20% off',
    },
    {
      subTitle: '',
      product: {
        _id: '65b587e2808ac5bf6c58ba7a',
        name: 'Lorem Ipsum is simply dummy',
        cover: 'product/product-4-cover.png',
        price: 550,
        offer: 350,
      },
      badge: '',
    },
  ],
}

// CONTACT
export const faqItems = [
  {
    title: 'Suspendisse ultrices pharetra libero sed interdum.',
    description: `
    <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
    <ul>
      <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
      <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
      <li>Quisque ut dolor erat.</li>
    </ul>
    `,
  },
  {
    title: 'Fusce molestie condimentum facilisis.',
    description: `
    <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
    <ul>
      <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
      <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
      <li>Quisque ut dolor erat.</li>
    </ul>
    `,
  },
  {
    title: 'Quisque quis nunc quis urna tempor lobortis vel non orci. ',
    description: `
    <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
    <ul>
      <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
      <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
      <li>Quisque ut dolor erat.</li>
    </ul>
    `,
  },
  {
    title:
      'Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.',
    description: `
    <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
    <ul>
      <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
      <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
      <li>Quisque ut dolor erat.</li>
    </ul>
    `,
  },
  {
    title: 'Nulla sed sapien maximus, faucibus massa vitae.',
    description: `
    <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
    <ul>
      <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
      <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
      <li>Quisque ut dolor erat.</li>
    </ul>
    `,
  },
]

export const contact = {
  title: 'Perguntas frequentes (FAQ)',
  items: faqItems,
}

// USER
export const customers = [
  {
    _id: '65b573c77fce319a477e705a',
    _type: UserEnum.Customer,
    name: 'Gilmore Hoffman',
    email: 'gilmorehoffman@norsul.com',
    whatsApp: '87052951456',
    image: 'user/user-1.webp',
    address: {
      street: 'Lombardy Street',
      neighborhood: 'Nevins Street',
      city: 'Dexter',
      state: 'Indiana',
      number: '547',
      zipCode: '40041943',
      complement: 'exercitation exercitation cupidatat aliqua',
    },
    password: {
      salt: '137fffd4-675e-47f0-8bb0-7956a677ae5b',
      hash: 'f5e3c18e-b79c-4985-9c0f-47ce2beb688c',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2016-08-30T02:19:40+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '75903444147',
    terms: true,
    activated: {
      activatedToken: true,
      activatedTokenExpire: '',
      activatedChangedAt: '2023-02-13T01:19:42+04:00',
    },
    chatStatus: true,
    historyAvailable: true,
    orders: [],
    amountSpend: 2964.02,
    createdAt: '2022-08-17T10:31:05+04:00',
    updatedAt: '2020-09-21T09:27:49+04:00',
  },
  {
    _id: '65b573c702193c5f2d7f3acc',
    _type: UserEnum.Customer,
    name: 'Karen Odom',
    email: 'karenodom@norsul.com',
    whatsApp: '72644849262',
    image: 'user/user-2.webp',
    address: {
      street: 'Bristol Street',
      neighborhood: 'Reed Street',
      city: 'Beaverdale',
      state: 'American Samoa',
      number: '492',
      zipCode: '30843199',
      complement: 'labore occaecat reprehenderit ad',
    },
    password: {
      salt: '2a9cd8a6-032a-43c0-8338-3306c66adeda',
      hash: 'eb55a358-80c5-47ac-9a5d-679dcb610fac',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2017-03-25T02:57:18+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '62047358099',
    terms: false,
    activated: {
      activatedToken: false,
      activatedTokenExpire: '',
      activatedChangedAt: '2017-09-12T11:11:51+04:00',
    },
    chatStatus: true,
    historyAvailable: true,
    orders: [],
    amountSpend: 3786.11,
    createdAt: '2018-03-23T11:57:14+04:00',
    updatedAt: '2016-04-26T04:03:45+04:00',
  },
  {
    _id: '65b573c71c7318585171e97f',
    _type: UserEnum.Customer,
    name: 'Mia Sawyer',
    email: 'miasawyer@norsul.com',
    whatsApp: '88417942846',
    image: 'user/user-3.webp',
    address: {
      street: 'Sackett Street',
      neighborhood: 'Hinckley Place',
      city: 'Moscow',
      state: 'Alaska',
      number: '119',
      zipCode: '49752169',
      complement: 'labore quis consequat proident',
    },
    password: {
      salt: 'a1da2c97-34d8-4769-8ed0-33e2c9454177',
      hash: '6a2e0e55-44b3-4b49-8e17-cf424d3a1474',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2017-04-20T12:20:45+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '79153690682',
    terms: false,
    activated: {
      activatedToken: false,
      activatedTokenExpire: '',
      activatedChangedAt: '2015-08-18T07:42:16+04:00',
    },
    chatStatus: false,
    historyAvailable: true,
    orders: [],
    amountSpend: 1274.02,
    createdAt: '2015-03-03T11:57:25+04:00',
    updatedAt: '2021-03-24T07:21:56+04:00',
  },
  {
    _id: '65b573c7a0e0f0e93d582a24',
    _type: UserEnum.Customer,
    name: 'Rebekah Hines',
    email: 'rebekahhines@norsul.com',
    whatsApp: '99802159644',
    image: 'user/user-4.webp',
    address: {
      street: 'Durland Place',
      neighborhood: 'Schenck Street',
      city: 'Hall',
      state: 'North Dakota',
      number: '60',
      zipCode: '62400777',
      complement: 'commodo magna incididunt anim',
    },
    password: {
      salt: '7b571050-77c9-4903-9237-6cff1f579146',
      hash: '1c72f4c7-106d-4130-8ed2-449848c72241',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2019-03-09T10:01:37+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '17530185505',
    terms: false,
    activated: {
      activatedToken: true,
      activatedTokenExpire: '',
      activatedChangedAt: '2018-05-13T07:37:15+04:00',
    },
    chatStatus: true,
    historyAvailable: false,
    orders: [],
    amountSpend: 1238.45,
    createdAt: '2020-04-28T04:17:27+04:00',
    updatedAt: '2022-11-19T06:27:42+04:00',
  },
  {
    _id: '65b573c7af40a7536a8b691d',
    _type: UserEnum.Customer,
    name: 'Mccarty Reynolds',
    email: 'mccartyreynolds@norsul.com',
    whatsApp: '61060482472',
    image: 'user/user-5.webp',
    address: {
      street: 'Fountain Avenue',
      neighborhood: 'Sumpter Street',
      city: 'Limestone',
      state: 'District Of Columbia',
      number: '613',
      zipCode: '42111463',
      complement: 'irure aute anim do',
    },
    password: {
      salt: 'd8dd74b5-29f3-4411-9e86-0dd1f654188f',
      hash: '7e61fb94-2936-4ad1-a145-778eec0dda05',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2018-10-12T06:30:22+04:00',
    },
    status: true,
    activatedStatus: false,
    cpf: '83050713931',
    terms: false,
    activated: {
      activatedToken: false,
      activatedTokenExpire: '',
      activatedChangedAt: '2022-12-24T08:45:59+04:00',
    },
    chatStatus: false,
    historyAvailable: false,
    orders: [],
    amountSpend: 3704.56,
    createdAt: '2019-02-07T09:34:20+03:00',
    updatedAt: '2019-10-24T10:25:49+04:00',
  },
  {
    _id: '65b573c742bc92ad98fb61d3',
    _type: UserEnum.Customer,
    name: 'Pickett Dotson',
    email: 'pickettdotson@norsul.com',
    whatsApp: '99713799260',
    image: 'user/user-6.webp',
    address: {
      street: 'Ovington Avenue',
      neighborhood: 'Hewes Street',
      city: 'Hessville',
      state: 'Hawaii',
      number: '831',
      zipCode: '69229382',
      complement: 'est qui duis minim',
    },
    password: {
      salt: 'a30d4185-1cd7-4b74-b48f-98efe66949e1',
      hash: 'e958abe6-0b1f-470d-9c94-409a5f0a5756',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2023-12-29T04:31:51+04:00',
    },
    status: false,
    activatedStatus: false,
    cpf: '87234122582',
    terms: false,
    activated: {
      activatedToken: true,
      activatedTokenExpire: '',
      activatedChangedAt: '2019-03-20T05:13:47+04:00',
    },
    chatStatus: false,
    historyAvailable: false,
    orders: [],
    amountSpend: 3139.52,
    createdAt: '2014-07-12T09:48:35+04:00',
    updatedAt: '2018-12-05T06:22:33+03:00',
  },
  {
    _id: '65b573c75a55426fe2d3c111',
    _type: UserEnum.Customer,
    name: 'Katina Larsen',
    email: 'katinalarsen@norsul.com',
    whatsApp: '19541039069',
    image: 'user/user-7.webp',
    address: {
      street: 'Royce Street',
      neighborhood: 'Lott Avenue',
      city: 'Steinhatchee',
      state: 'Pennsylvania',
      number: '245',
      zipCode: '36776111',
      complement: 'non ad minim non',
    },
    password: {
      salt: '3682e264-0caf-4e6c-a6ee-7946fcd9eee3',
      hash: 'd191e217-fa7d-4530-903d-d95de3fbf1c1',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2014-05-24T01:46:38+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '84877287406',
    terms: true,
    activated: {
      activatedToken: true,
      activatedTokenExpire: '',
      activatedChangedAt: '2021-09-07T01:29:02+04:00',
    },
    chatStatus: false,
    historyAvailable: true,
    orders: [],
    amountSpend: 3258.06,
    createdAt: '2020-12-03T04:29:29+04:00',
    updatedAt: '2015-11-08T08:04:21+03:00',
  },
  {
    _id: '65b573c7f59c3d4b520f4939',
    _type: UserEnum.Customer,
    name: 'Patton Harper',
    email: 'pattonharper@norsul.com',
    whatsApp: '62597728923',
    image: 'user/user-8.webp',
    address: {
      street: 'Borinquen Pl',
      neighborhood: 'Bay Parkway',
      city: 'Tolu',
      state: 'Illinois',
      number: '637',
      zipCode: '33310590',
      complement: 'nisi aliquip ea elit',
    },
    password: {
      salt: '25fdf44f-9e90-4cb6-a124-558d42bc9e57',
      hash: 'b7c22c62-60fe-438d-ac41-1e03891f5ddb',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2017-03-25T05:02:56+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '75092348925',
    terms: false,
    activated: {
      activatedToken: false,
      activatedTokenExpire: '',
      activatedChangedAt: '2020-01-03T09:06:06+04:00',
    },
    chatStatus: false,
    historyAvailable: false,
    orders: [],
    amountSpend: 2620.69,
    createdAt: '2020-03-25T09:40:11+04:00',
    updatedAt: '2015-11-18T05:15:52+03:00',
  },
]

export const employees = [
  {
    _id: '65b5af4493f22642e70b4d14',
    _type: UserEnum.Employee,
    name: 'Nash Rich',
    email: 'nashrich@norsul.com',
    whatsApp: '95531688029',
    image: 'user/user-1.webp',
    address: {
      street: 'Pierrepont Street',
      neighborhood: 'Powers Street',
      city: 'Cascades',
      state: 'Nebraska',
      number: '37',
      zipCode: '59389676',
      complement: 'veniam cillum nulla velit',
    },
    password: {
      salt: 'd2663ebc-9d46-40a7-bab9-e423bce132b1',
      hash: 'b5cc6ca0-4010-4134-82f3-c3f4966d9f5a',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2015-03-30T06:07:05+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '46029537260',
    chatStatus: true,
    createdAt: '2018-06-06T01:10:04+04:00',
    updatedAt: '2020-03-10T03:34:35+04:00',
  },
  {
    _id: '65b5af44467894eed4c14dea',
    _type: UserEnum.Employee,
    name: 'Wise Malone',
    email: 'wisemalone@norsul.com',
    whatsApp: '52066671401',
    image: 'user/user-2.webp',
    address: {
      street: 'Folsom Place',
      neighborhood: 'Virginia Place',
      city: 'Berlin',
      state: 'California',
      number: '209',
      zipCode: '70400793',
      complement: 'voluptate commodo nostrud nostrud',
    },
    password: {
      salt: '61e784dd-cc3b-4bf0-a0f9-052adce7489f',
      hash: 'dd810ffe-75fe-4995-8373-8e7bbf5ae0ae',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2021-06-19T01:20:33+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '33031995304',
    chatStatus: false,
    createdAt: '2019-10-01T09:20:58+04:00',
    updatedAt: '2017-05-15T09:38:02+04:00',
  },
  {
    _id: '65b5af4435a4dd7d52be0e42',
    _type: UserEnum.Employee,
    name: 'Mathews Barrett',
    email: 'mathewsbarrett@norsul.com',
    whatsApp: '78309570753',
    image: 'user/user-3.webp',
    address: {
      street: 'Thornton Street',
      neighborhood: 'Grafton Street',
      city: 'Lowell',
      state: 'Georgia',
      number: '17',
      zipCode: '81021698',
      complement: 'laborum pariatur fugiat non',
    },
    password: {
      salt: '096f0daa-32e4-4f0d-824c-711aee07fcad',
      hash: '746e6d6a-962b-495d-8f64-8e3bc30f8d4a',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2015-01-07T04:22:45+03:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '48960774238',
    chatStatus: true,
    createdAt: '2014-11-17T02:14:15+03:00',
    updatedAt: '2018-06-28T05:48:49+04:00',
  },
  {
    _id: '65b5af443ffe96083a10df6e',
    _type: UserEnum.Employee,
    name: 'Guerra Cunningham',
    email: 'guerracunningham@norsul.com',
    whatsApp: '96868292430',
    image: 'user/user-4.webp',
    address: {
      street: 'Hull Street',
      neighborhood: 'Morton Street',
      city: 'Benson',
      state: 'Maine',
      number: '619',
      zipCode: '61049744',
      complement: 'nisi ut laborum excepteur',
    },
    password: {
      salt: '78e3dc5f-f495-40b4-919a-a7a8c4014f4c',
      hash: 'dc0b27b6-dc03-4754-ab11-d9b79d37acb1',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2016-05-23T01:51:05+04:00',
    },
    status: true,
    activatedStatus: false,
    cpf: '89222309222',
    chatStatus: true,
    createdAt: '2014-01-17T10:43:55+03:00',
    updatedAt: '2014-04-20T07:49:17+04:00',
  },
  {
    _id: '65b5af4429e9e5e99c3287c0',
    _type: UserEnum.Employee,
    name: 'Rivera Roberson',
    email: 'riveraroberson@norsul.com',
    whatsApp: '26772055784',
    image: 'user/user-5.webp',
    address: {
      street: 'Rockwell Place',
      neighborhood: 'Ridgewood Avenue',
      city: 'Durham',
      state: 'Illinois',
      number: '144',
      zipCode: '62580745',
      complement: 'incididunt adipisicing exercitation excepteur',
    },
    password: {
      salt: '6086171a-1cf2-42ee-8d54-767226d69795',
      hash: '1e89fd59-d7c2-4243-adb7-369b2bc139c2',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2014-03-26T10:46:28+04:00',
    },
    status: true,
    activatedStatus: false,
    cpf: '38786923280',
    chatStatus: true,
    createdAt: '2018-03-12T10:58:54+04:00',
    updatedAt: '2018-07-22T06:20:57+04:00',
  },
  {
    _id: '65b5af44a245a26f248507f5',
    _type: UserEnum.Employee,
    name: 'Heath Vaughn',
    email: 'heathvaughn@norsul.com',
    whatsApp: '66952346364',
    image: 'user/user-6.webp',
    address: {
      street: 'Coleridge Street',
      neighborhood: 'Homecrest Court',
      city: 'Machias',
      state: 'Alaska',
      number: '281',
      zipCode: '23405796',
      complement: 'exercitation cupidatat excepteur ut',
    },
    password: {
      salt: 'f1f6603f-9177-473c-a03a-46bdd854e89f',
      hash: '62dfbf7c-db22-4890-9377-e0de8a2aecd7',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2023-12-04T04:39:11+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '81696190779',
    chatStatus: true,
    createdAt: '2019-06-19T09:12:31+04:00',
    updatedAt: '2017-07-27T12:23:38+04:00',
  },
  {
    _id: '65b5af4449905074b55b40ac',
    _type: UserEnum.Employee,
    name: 'Byrd Acevedo',
    email: 'byrdacevedo@norsul.com',
    whatsApp: '93485779627',
    image: 'user/user-7.webp',
    address: {
      street: 'Batchelder Street',
      neighborhood: 'Tabor Court',
      city: 'Brogan',
      state: 'Arizona',
      number: '289',
      zipCode: '32556057',
      complement: 'ad cupidatat ipsum laborum',
    },
    password: {
      salt: 'ad5ce73d-6376-4903-aaae-a6e2bc25d9fd',
      hash: '0daabef5-449c-46b4-84f1-b95906fe6b54',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2021-06-22T08:18:45+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '86621457498',
    chatStatus: true,
    createdAt: '2015-05-15T11:32:33+04:00',
    updatedAt: '2017-05-02T11:51:30+04:00',
  },
  {
    _id: '65b5af447fa572707e69e88f',
    _type: UserEnum.Employee,
    name: 'Felicia Henson',
    email: 'feliciahenson@norsul.com',
    whatsApp: '59149102223',
    image: 'user/user-8.webp',
    address: {
      street: 'Kenmore Court',
      neighborhood: 'Forbell Street',
      city: 'Biddle',
      state: 'New York',
      number: '699',
      zipCode: '34940633',
      complement: 'eu nulla pariatur nulla',
    },
    password: {
      salt: '4b2eb06e-0a69-441b-aae1-c44a89946f32',
      hash: 'b075d350-5145-4e41-9598-1e1e701b4c31',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2020-05-18T04:14:03+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '92820240938',
    chatStatus: false,
    createdAt: '2018-10-08T01:32:51+04:00',
    updatedAt: '2023-12-09T01:09:48+04:00',
  },
  {
    _id: '65b5afbe1126075c8ae4f1d8',
    _type: UserEnum.Employee,
    name: 'Mckenzie Welch',
    email: 'mckenziewelch@norsul.com',
    whatsApp: '75138345680',
    image: 'user/user-9.webp',
    address: {
      street: 'Seagate Terrace',
      neighborhood: 'Chester Court',
      city: 'Dixonville',
      state: 'Vermont',
      number: '438',
      zipCode: '73945927',
      complement: 'labore reprehenderit laborum veniam',
    },
    password: {
      salt: '702162e2-ac84-44e4-bcc7-124db1431795',
      hash: 'bbddc3cb-0e86-4c24-bfc7-0051b4a69989',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2018-10-02T12:30:30+04:00',
    },
    status: false,
    activatedStatus: false,
    cpf: '45450510519',
    chatStatus: true,
    createdAt: '2017-02-10T11:32:23+03:00',
    updatedAt: '2018-03-16T10:42:58+04:00',
  },
  {
    _id: '65b5afbeea734d10f0cc74c7',
    _type: UserEnum.Employee,
    name: 'Darcy Kirby',
    email: 'darcykirby@norsul.com',
    whatsApp: '80734282056',
    image: 'user/user-10.webp',
    address: {
      street: 'Willoughby Avenue',
      neighborhood: 'Bath Avenue',
      city: 'Alafaya',
      state: 'Oklahoma',
      number: '88',
      zipCode: '49459325',
      complement: 'in veniam non sit',
    },
    password: {
      salt: 'f8747b5f-79f5-4675-9a93-01301c7cc7e0',
      hash: '97b49ea6-8794-4b4e-a271-e8a4dc2cd462',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2017-09-05T05:01:11+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '51652283311',
    chatStatus: true,
    createdAt: '2019-01-30T07:36:29+03:00',
    updatedAt: '2016-09-05T03:24:15+04:00',
  },
]

export const admins = [
  {
    _id: '65b5b0dec42e8637bddd1715',
    _type: UserEnum.Admin,
    name: 'Orr Vang',
    email: 'orrvang@norsul.com',
    whatsApp: '55768307910',
    image: 'user/user-1.webp',
    address: {
      street: 'Jamaica Avenue',
      neighborhood: 'Gates Avenue',
      city: 'Eden',
      state: 'Missouri',
      number: '537',
      zipCode: '12581948',
      complement: 'ea reprehenderit est id',
    },
    password: {
      salt: 'e9403b5b-149d-446d-8b25-6e2571691dac',
      hash: '04251f2a-4a76-477d-9bf7-976c062770cb',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2019-04-21T03:29:37+04:00',
    },
    status: true,
    activatedStatus: false,
    cpf: '35397683638',
    chatStatus: true,
    createdAt: '2022-12-21T12:14:48+04:00',
    updatedAt: '2017-07-29T03:19:44+04:00',
  },
  {
    _id: '65b5b0dedcbd9fb3d97d160e',
    _type: UserEnum.Admin,
    name: 'Leanne Watkins',
    email: 'leannewatkins@norsul.com',
    whatsApp: '52756342701',
    image: 'user/user-2.webp',
    address: {
      street: 'Vandam Street',
      neighborhood: 'Vanderveer Place',
      city: 'Kerby',
      state: 'Wisconsin',
      number: '597',
      zipCode: '99439935',
      complement: 'labore non deserunt deserunt',
    },
    password: {
      salt: '9bf4a36a-b418-4345-bef9-4396949a3579',
      hash: 'f9df22da-b86a-412e-a5fe-5e2c14f38434',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2021-02-22T06:51:41+04:00',
    },
    status: true,
    activatedStatus: false,
    cpf: '66214941123',
    chatStatus: false,
    createdAt: '2018-12-06T01:30:27+03:00',
    updatedAt: '2016-02-10T03:20:11+03:00',
  },
  {
    _id: '65b5b0de17854b0b3c9145b6',
    _type: UserEnum.Admin,
    name: 'Rosetta Mejia',
    email: 'rosettamejia@norsul.com',
    whatsApp: '60012390325',
    image: 'user/user-3.webp',
    address: {
      street: 'President Street',
      neighborhood: 'Remsen Street',
      city: 'Dahlen',
      state: 'Palau',
      number: '605',
      zipCode: '53388888',
      complement: 'do quis cillum id',
    },
    password: {
      salt: '3022fcad-87b0-46a6-bf90-449663d8b92f',
      hash: '7c878747-d1e1-46c0-8743-2e2b7634dfc4',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2020-09-13T08:01:20+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '87516792303',
    chatStatus: true,
    createdAt: '2018-05-17T04:33:41+04:00',
    updatedAt: '2022-10-12T10:38:22+04:00',
  },
  {
    _id: '65b5b0deca0d34822381e496',
    _type: UserEnum.Admin,
    name: 'Mcleod Finch',
    email: 'mcleodfinch@norsul.com',
    whatsApp: '72491289105',
    image: 'user/user-4.webp',
    address: {
      street: 'Hubbard Street',
      neighborhood: 'Dwight Street',
      city: 'Jeff',
      state: 'California',
      number: '658',
      zipCode: '71970250',
      complement: 'quis do dolore voluptate',
    },
    password: {
      salt: '8c4061b1-905b-4745-9187-89a96ec15812',
      hash: 'd3e9cbe8-ba05-407d-adea-b2438485c701',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2023-08-30T12:19:44+04:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '14304733187',
    chatStatus: false,
    createdAt: '2016-08-08T01:34:13+04:00',
    updatedAt: '2018-12-15T07:12:19+03:00',
  },
  {
    _id: '65b5b0de51f04acad8319af5',
    _type: UserEnum.Admin,
    name: 'Dominguez Solomon',
    email: 'dominguezsolomon@norsul.com',
    whatsApp: '74031281746',
    image: 'user/user-5.webp',
    address: {
      street: 'Eagle Street',
      neighborhood: 'Mill Lane',
      city: 'Alamo',
      state: 'Kansas',
      number: '269',
      zipCode: '20143255',
      complement: 'incididunt excepteur fugiat nostrud',
    },
    password: {
      salt: '77f508e0-e2f1-45d7-b9ca-16ed1254bf41',
      hash: 'fa9df99c-24a1-4901-9d9a-621531b6c18b',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2021-11-28T10:00:59+04:00',
    },
    status: false,
    activatedStatus: false,
    cpf: '31227253309',
    chatStatus: true,
    createdAt: '2022-04-22T08:33:49+04:00',
    updatedAt: '2015-02-06T07:31:51+03:00',
  },
  {
    _id: '65b5b0dea1337207071531c6',
    _type: UserEnum.Admin,
    name: 'Jannie Brennan',
    email: 'janniebrennan@norsul.com',
    whatsApp: '47988417474',
    image: 'user/user-6.webp',
    address: {
      street: 'Maple Street',
      neighborhood: 'Olive Street',
      city: 'Blanco',
      state: 'Maine',
      number: '785',
      zipCode: '18591799',
      complement: 'reprehenderit ipsum velit commodo',
    },
    password: {
      salt: 'd5d938b6-64d1-4a96-8b1f-76ca600a3630',
      hash: '00cda59e-1410-4285-87ee-903d4342cfa6',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2016-11-19T03:02:44+03:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '54890933408',
    chatStatus: false,
    createdAt: '2022-12-07T08:39:10+04:00',
    updatedAt: '2023-08-09T06:44:02+04:00',
  },
  {
    _id: '65b5b0de76da259b45e79892',
    _type: UserEnum.Admin,
    name: 'Doyle Arnold',
    email: 'doylearnold@norsul.com',
    whatsApp: '30137590818',
    image: 'user/user-7.webp',
    address: {
      street: 'Wythe Avenue',
      neighborhood: 'Montauk Avenue',
      city: 'Century',
      state: 'New Jersey',
      number: '525',
      zipCode: '15214178',
      complement: 'sint labore consequat ut',
    },
    password: {
      salt: 'f47c48ff-2026-4919-8102-b9da1d1de0d6',
      hash: '2937fed1-283c-4b3d-aa30-f53ab4167385',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2018-08-05T01:05:29+04:00',
    },
    status: false,
    activatedStatus: false,
    cpf: '29534745424',
    chatStatus: false,
    createdAt: '2017-11-20T01:34:47+03:00',
    updatedAt: '2020-03-13T12:26:47+04:00',
  },
  {
    _id: '65b5b0de636c26ad8ce3ce5b',
    _type: UserEnum.Admin,
    name: 'Doris Giles',
    email: 'dorisgiles@norsul.com',
    whatsApp: '29579683615',
    image: 'user/user-8.webp',
    address: {
      street: 'Thatford Avenue',
      neighborhood: 'Erasmus Street',
      city: 'Ilchester',
      state: 'Hawaii',
      number: '795',
      zipCode: '95016950',
      complement: 'reprehenderit cillum laboris ullamco',
    },
    password: {
      salt: 'f4151f62-15fa-4bf6-896c-d8fd50a09418',
      hash: '50c0dbe7-5f07-424d-b71f-becc375fb09d',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2014-02-07T08:15:46+03:00',
    },
    status: true,
    activatedStatus: true,
    cpf: '31772758328',
    chatStatus: true,
    createdAt: '2019-07-27T10:13:49+04:00',
    updatedAt: '2018-03-04T06:13:54+04:00',
  },
  {
    _id: '65b5b0de0febc4c9da54ca9d',
    _type: UserEnum.Admin,
    name: 'Weber Frazier',
    email: 'weberfrazier@norsul.com',
    whatsApp: '62616140178',
    image: 'user/user-9.webp',
    address: {
      street: 'Kent Street',
      neighborhood: 'Bush Street',
      city: 'Darbydale',
      state: 'Oklahoma',
      number: '910',
      zipCode: '48164831',
      complement: 'cillum nisi occaecat Lorem',
    },
    password: {
      salt: '0ea36e45-4742-46d7-8642-53503e55023f',
      hash: 'bb9314b5-93c1-41a0-a5c2-4dc97e236292',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2014-07-23T07:03:03+04:00',
    },
    status: false,
    activatedStatus: true,
    cpf: '16051616689',
    chatStatus: true,
    createdAt: '2016-05-23T02:49:32+04:00',
    updatedAt: '2017-10-04T07:47:11+04:00',
  },
  {
    _id: '65b5b0dea1c4ca5aade63738',
    _type: UserEnum.Admin,
    name: 'Carney Gilmore',
    email: 'carneygilmore@norsul.com',
    whatsApp: '40914716202',
    image: 'user/user-10.webp',
    address: {
      street: 'Chester Street',
      neighborhood: 'Bradford Street',
      city: 'Cressey',
      state: 'Massachusetts',
      number: '534',
      zipCode: '86310510',
      complement: 'voluptate ea sint minim',
    },
    password: {
      salt: '7fe7946c-c0bc-496b-8f0b-01e185162bd6',
      hash: '8a0b3304-601d-47c6-8015-67fd4f8ffc30',
    },
    recoveryPassword: {
      passwordResetToken: '',
      passwordResetExpires: '',
      passwordChangedAt: '2018-03-05T08:40:54+04:00',
    },
    status: false,
    activatedStatus: false,
    cpf: '45472517954',
    chatStatus: true,
    createdAt: '2016-01-17T08:59:47+03:00',
    updatedAt: '2014-07-19T06:54:40+04:00',
  },
]

export const store = {
  _id: '659edc43f26a45ceed256d3c',
  _type: UserEnum.Store,
  name: 'Furniture',
  email: 'furniture@email.com',
  whatsApp: '11999768890',
  image: 'icons/logo.svg',
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
    salt: 'e9403b5b-149d-446d-8b25-6e2571691dac',
    hash: '04251f2a-4a76-477d-9bf7-976c062770cb',
  },
  recoveryPassword: {
    passwordResetToken: '',
    passwordResetExpires: '',
    passwordChangedAt: '2019-04-21T03:29:37+04:00',
  },
  status: true,
  activatedStatus: true,
  contactEmail: 'furniture@contato.com',
  phone: '1199768890',
  cnpj: '87129837198273',
  ie: '78631872378162',
  clockAvailable: 'Seg. à Sex. 8h às 18h, Sáb 8h às 12h',
  site: 'furniture.com',
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  socialMedia: {
    facebook: 'https://facebook.com/furniture',
    instagram: 'https://instagram.com/furniture',
    twitter: 'https://twitter.com/furniture',
    linkedin: 'https://linkedin.com/furniture',
    pinterest: 'https://pinterest.com/furniture',
    youtube: 'https://youtube.com/furniture',
  },
  available: true,
  createdAt: '2022-12-21T12:14:48+04:00',
  updatedAt: '2017-07-29T03:19:44+04:00',
}

// PRODUCT
export const categories = [
  {
    _id: '659edb43f26a45ceed256d3d',
    parent: null,
    name: 'Mesas',
    slug: 'mesas',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'category/category-1.jpg',
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
    image: 'category/category-2.jpg',
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
    image: 'category/category-3.jpg',
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
    image: 'category/category-4.jpg',
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
    image: 'category/category-5.jpg',
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
    image: 'category/category-6.jpg',
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
    image: 'category/category-7.jpg',
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
    image: 'brand/brand-1.webp',
  },
  {
    _id: '659edb43f26a45ceed259d3b',
    name: 'Rimo',
    slug: 'rimo',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brand/brand-2.webp',
  },
  {
    _id: '659edb43f26a45ceed250d3b',
    name: 'Patrimar',
    slug: 'patrimar',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brand/brand-3.png',
  },
  {
    _id: '659edb43f26a45ceed270d3b',
    name: 'Philips',
    slug: 'philips',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brand/brand-4.webp',
  },
  {
    _id: '659edb43f16a45ceed270d3b',
    name: 'Toshiba',
    slug: 'toshiba',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: 'brand/brand-5.png',
  },
]

export const colors = [
  {
    _id: '659edb43f26a45ceed256d3b',
    name: 'Azul',
    slug: 'azul',
    color: '#1e40af',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    products: [],
  },
  {
    _id: '659edb43f26a45ceed256d3c',
    name: 'Preto',
    slug: 'preto',
    color: '#000',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    products: [],
  },
  {
    _id: '659edb43f26a45ce3d256d3b',
    name: 'Vermelho',
    slug: 'vermelho',
    color: '#FF0000',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    products: [],
  },
  {
    _id: '659edb43f26a45ce3d276d3b',
    name: 'Amarelo',
    slug: 'amarelo',
    color: '#FFF500',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    products: [],
  },
  {
    _id: '659edb43f26a45ke3d276d3b',
    name: 'Laranja',
    slug: 'laranja',
    color: '#FF7A00',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    products: [],
  },
]

export const reviews = [
  {
    customer: {
      _id: '65b590be7c0e5d6ceefd27f8',
      name: 'Kenya Boyd',
      image: 'user/user-1.webp',
    },
    stars: 4,
    description:
      'ea laboris non mollit irure velit ex dolore et incididunt incididunt excepteur laborum officia commodo incididunt aliquip id labore tempor sit laborum esse non incididunt proident dolor amet reprehenderit mollit do exercitation anim aliquip eiusmod exercitation culpa veniam ea ullamco',
    createdAt: '2016-06-29T12:23:44+04:00',
    updatedAt: '2021-09-11T11:52:17+04:00',
  },
  {
    customer: {
      _id: '65b590beed2374cfbce865db',
      name: 'Rachel Banks',
      image: 'user/user-2.webp',
    },
    stars: 1,
    description:
      'anim occaecat consectetur non nostrud nostrud ea duis adipisicing minim consectetur et culpa veniam irure mollit nostrud dolore excepteur veniam laboris nulla proident occaecat excepteur ipsum cupidatat nostrud amet do ut minim minim Lorem ut nulla minim do incididunt occaecat',
    createdAt: '2021-01-02T09:22:50+04:00',
    updatedAt: '2018-05-30T05:28:48+04:00',
  },
  {
    customer: {
      _id: '65b590bef3174054388929ce',
      name: 'Tammi Carey',
      image: 'user/user-3.webp',
    },
    stars: 5,
    description:
      'sunt laboris ea laboris ad Lorem Lorem aliqua non consectetur dolor dolor anim reprehenderit aliqua eu mollit sunt reprehenderit sunt Lorem fugiat qui occaecat excepteur laborum officia dolor sunt sunt enim elit mollit officia in duis pariatur sint culpa qui',
    createdAt: '2015-08-13T11:13:15+04:00',
    updatedAt: '2022-09-17T11:42:37+04:00',
  },
  {
    customer: {
      _id: '65b590be76d92e050d1502d0',
      name: 'Hampton Hays',
      image: 'user/user-4.webp',
    },
    stars: 4,
    description:
      'pariatur velit est Lorem mollit ex officia aliqua duis laboris quis laboris velit fugiat et quis magna laboris et ut laboris est id ullamco amet cillum quis pariatur quis nostrud tempor magna ullamco culpa ea excepteur magna do occaecat incididunt',
    createdAt: '2019-11-05T12:00:40+04:00',
    updatedAt: '2017-01-11T04:25:22+03:00',
  },
  {
    customer: {
      _id: '65b590be00822323b9b34811',
      name: 'Theresa Reynolds',
      image: 'user/user-5.webp',
    },
    stars: 1,
    description:
      'sit occaecat veniam voluptate ex officia mollit ea nostrud labore id ut quis adipisicing eiusmod aliqua sit proident veniam occaecat Lorem ut occaecat Lorem do est anim dolore aute ea id aliqua culpa veniam ullamco enim exercitation qui labore sit',
    createdAt: '2014-08-18T12:19:17+04:00',
    updatedAt: '2018-03-30T09:59:09+04:00',
  },
  {
    customer: {
      _id: '65b590bef55ed17388248860',
      name: 'Rodriguez Dunn',
      image: 'user/user-6.webp',
    },
    stars: 4,
    description:
      'officia excepteur amet tempor culpa elit ad duis ea in mollit exercitation laboris velit do proident ullamco dolore veniam sunt aliqua et est excepteur nisi velit laborum excepteur dolore velit ut labore est id proident id culpa veniam velit ad',
    createdAt: '2015-04-25T10:20:01+04:00',
    updatedAt: '2017-08-27T06:11:18+04:00',
  },
  {
    customer: {
      _id: '65b590be672210505ffa2e53',
      name: 'Cecile Clarke',
      image: 'user/user-7.webp',
    },
    stars: 5,
    description:
      'deserunt ut ipsum ad exercitation deserunt nostrud cupidatat veniam ea aliqua duis aliqua id do fugiat exercitation ut aliqua ut excepteur pariatur velit pariatur ut amet laboris officia consectetur laborum in culpa ad laborum dolor consectetur anim consequat dolor adipisicing',
    createdAt: '2020-05-14T09:23:45+04:00',
    updatedAt: '2022-07-27T12:30:02+04:00',
  },
  {
    customer: {
      _id: '65b590beb30fafe432278e2b',
      name: 'Dalton Morgan',
      image: 'user/user-8.webp',
    },
    stars: 4,
    description:
      'nostrud reprehenderit cillum in adipisicing ex esse veniam aute in qui ut in amet esse dolor amet nostrud ut sit consequat et quis laboris tempor nulla nulla non Lorem velit magna et ad Lorem irure aute culpa sint tempor quis',
    createdAt: '2017-03-08T05:09:44+04:00',
    updatedAt: '2019-01-01T10:45:09+03:00',
  },
  {
    customer: {
      _id: '65b590bebe9f526adf3c9e5a',
      name: 'White Mcknight',
      image: 'user/user-9.webp',
    },
    stars: 1,
    description:
      'est duis cupidatat nulla cupidatat sunt minim quis consequat enim irure eu irure culpa elit velit incididunt consectetur aliqua excepteur aliqua nulla aute id veniam et cillum adipisicing non cillum est incididunt proident irure deserunt sunt laborum enim officia occaecat',
    createdAt: '2017-03-13T09:15:17+04:00',
    updatedAt: '2022-02-20T12:04:14+04:00',
  },
  {
    customer: {
      _id: '65b590be9d16268e3b282a1b',
      name: 'Pittman Boone',
      image: 'user/user-10.webp',
    },
    stars: 1,
    description:
      'cupidatat magna nisi laboris et do ea esse eiusmod reprehenderit excepteur occaecat occaecat mollit sit labore magna sint tempor Lorem dolore cillum culpa fugiat velit in magna cillum est ipsum ea veniam quis et nostrud sunt in sunt voluptate amet',
    createdAt: '2015-07-06T08:30:02+04:00',
    updatedAt: '2022-02-22T07:57:25+04:00',
  },
]

export const products = [
  {
    _id: '65b587e2808ac5bf6c58ba7a',
    name: 'excepteur eiusmod',
    sku: '5e1b57d8-57d0-4fbf-b14d-8435330f03e2',
    code: '3f2c2bfb-7670-440f-830c-116adf371ca7',
    description: {
      overview: 'nisi sunt proident eiusmod',
      otherInfos: [
        {
          title: 'Lorem amet cupidatat aliqua',
          description:
            'commodo amet pariatur pariatur veniam voluptate ex quis officia duis amet ea esse consequat laborum est ex est adipisicing reprehenderit',
        },
        {
          title: 'sint dolor sunt sunt',
          description:
            'esse exercitation id cupidatat ullamco sit dolore qui ex ad anim nulla voluptate adipisicing adipisicing culpa fugiat proident amet tempor',
        },
        {
          title: 'ex ad velit excepteur',
          description:
            'in irure commodo velit duis pariatur anim cillum proident eiusmod nostrud excepteur quis do adipisicing nisi ullamco commodo quis consequat',
        },
        {
          title: 'consectetur officia eiusmod aliqua',
          description:
            'consequat aliqua culpa aliqua nisi cillum eiusmod nostrud consectetur Lorem sint pariatur amet adipisicing occaecat non tempor officia voluptate incididunt',
        },
      ],
    },
    additional: {
      detail: 'aliquip deserunt nulla laboris',
      otherInfos: [
        {
          title: 'ullamco sit enim mollit',
          description:
            'reprehenderit id id non mollit consectetur ad ea adipisicing nostrud eiusmod eu aute voluptate pariatur tempor consectetur ut quis cillum',
        },
        {
          title: 'mollit commodo ea nostrud',
          description:
            'aliqua aliqua pariatur ea mollit veniam ipsum in cillum elit cupidatat Lorem irure fugiat anim voluptate commodo nostrud dolore qui',
        },
        {
          title: 'quis mollit officia ea',
          description:
            'id qui irure eiusmod excepteur dolor deserunt irure cillum ullamco laborum sint enim cillum sit sint pariatur nisi anim ipsum',
        },
        {
          title: 'cupidatat ullamco sunt reprehenderit',
          description:
            'pariatur culpa excepteur sint eu amet nulla ut sunt Lorem consectetur nulla aute ea sint sit pariatur esse minim laboris',
        },
      ],
    },
    specification: [
      {
        title: 'voluptate culpa qui eu',
        description:
          'occaecat nostrud ea eu deserunt laboris reprehenderit nostrud id minim aute occaecat adipisicing cupidatat ea Lorem nostrud labore velit eiusmod',
      },
      {
        title: 'est pariatur id laboris',
        description:
          'minim est ad ullamco aute pariatur mollit aliqua elit qui ut deserunt tempor ullamco esse ipsum consequat nulla irure est',
      },
      {
        title: 'voluptate incididunt culpa ut',
        description:
          'commodo tempor proident occaecat dolore laboris occaecat voluptate ut deserunt pariatur reprehenderit velit minim elit proident irure laboris nostrud id',
      },
      {
        title: 'do tempor excepteur officia',
        description:
          'reprehenderit adipisicing sit dolore sit veniam anim irure ut nisi sunt cupidatat cillum et minim voluptate cillum aliquip duis adipisicing',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-1-cover.png',
        backCover: 'product/product-1-backCover.jpg',
        gallery: [
          'product/product-1-gallery-1.jpg',
          'product/product-1-gallery-2.jpg',
          'product/product-1-gallery-3.jpg',
          'product/product-1-gallery-4.jpg',
          'product/product-1-gallery-5.jpg',
          'product/product-1-gallery-6.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: false,
        stockStatus: true,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 92,
            price: 312.86,
            offer: {
              offerValue: 68.41,
              offerType: OfferEnum.Money,
              offerPrice: 147.54,
              offerPriceDates: [
                '2020-03-10T04:05:15+04:00',
                '2022-06-24T02:38:42+04:00',
              ],
            },
            featured: true,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3c',
              name: 'Preto',
              color: '#000',
            },
            stock: 23,
            price: 528.24,
            offer: {
              offerValue: 39.66,
              offerType: OfferEnum.Default,
              offerPrice: 991.36,
              offerPriceDates: [
                '2017-03-18T11:09:13+04:00',
                '2017-06-04T01:01:12+04:00',
              ],
            },
            featured: false,
          },
        ],
      },
      shippingInfo: {
        weight: 100,
        length: 50,
        width: 96,
        height: 73,
        fee: 15,
        timeDelivery: 0,
        isFree: false,
      },
    },
    seoData: {
      slug: 'magna',
      metaTitle: 'ea magna adipisicing dolore nostrud dolore ea in eu irure',
      metaDescription:
        'nisi excepteur est cillum magna in labore sit ullamco eu dolor dolore id in nulla pariatur sint exercitation commodo excepteur laborum laboris aliquip nulla qui labore aute excepteur ut elit tempor veniam qui culpa eiusmod veniam esse commodo amet pariatur',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['est', 'minim', 'aute', 'aliquip', 'ex'],
    rangePrice: {
      min: 879.53,
      max: 651.09,
      avg: 822.03,
    },
    status: false,
    sales: 339,
    amountSales: 63024.28,
    reviews,
    reviewsAvg: {
      amount: 55,
      avg: 3,
      starAmount: {
        oneStar: 38,
        twoStar: 57,
        threeStar: 38,
        fourStar: 38,
        fiveStar: 54,
      },
    },
    createdAt: '2021-06-08T08:50:43+04:00',
    updatedAt: '2019-04-10T04:17:23+04:00',
  },
  {
    _id: '65b587e25f69502b1652ca24',
    name: 'amet eiusmod',
    sku: '66195762-5d7a-4b2b-9d81-c2a0211ad7fb',
    code: 'cfdaef59-8655-440f-beb7-53bd1f1a574e',
    description: {
      overview: 'labore pariatur sunt labore',
      otherInfos: [
        {
          title: 'est ullamco sit veniam',
          description:
            'culpa fugiat dolor labore nostrud ad quis deserunt nostrud magna mollit pariatur ex qui cupidatat incididunt qui magna incididunt in',
        },
        {
          title: 'tempor exercitation ut elit',
          description:
            'et commodo est reprehenderit pariatur sunt voluptate laborum nisi do esse anim labore eu laborum adipisicing enim eu adipisicing ex',
        },
        {
          title: 'deserunt cillum Lorem et',
          description:
            'fugiat mollit officia est Lorem officia deserunt aliquip enim nostrud irure laborum magna laborum quis ex voluptate proident dolore commodo',
        },
        {
          title: 'cupidatat ullamco culpa nostrud',
          description:
            'aliquip ea enim et et ipsum eu minim cupidatat non excepteur excepteur aliquip occaecat esse consequat mollit reprehenderit ad elit',
        },
      ],
    },
    additional: {
      detail: 'nostrud adipisicing consequat mollit',
      otherInfos: [
        {
          title: 'voluptate ullamco cupidatat ut',
          description:
            'voluptate quis id cupidatat amet exercitation nulla commodo minim sint consequat eiusmod in quis est enim commodo in dolor minim',
        },
        {
          title: 'eiusmod cupidatat ut dolore',
          description:
            'incididunt et labore anim dolor laborum do minim eiusmod laborum dolor elit velit aute magna consequat ullamco nulla laborum proident',
        },
        {
          title: 'occaecat eiusmod et labore',
          description:
            'laborum ullamco est occaecat labore mollit culpa ad mollit Lorem aliquip laborum duis occaecat laborum consequat consectetur non magna culpa',
        },
        {
          title: 'eiusmod commodo ipsum nisi',
          description:
            'eu non in exercitation aute sunt anim anim nostrud dolor minim labore ea cupidatat nisi incididunt pariatur consectetur fugiat sunt',
        },
      ],
    },
    specification: [
      {
        title: 'laborum laborum anim qui',
        description:
          'consequat do aliquip qui veniam aliquip ipsum ex officia proident quis voluptate sunt anim sint officia labore exercitation aliquip mollit',
      },
      {
        title: 'excepteur eu ex ad',
        description:
          'eiusmod nostrud deserunt ullamco incididunt aute incididunt nostrud est dolore magna officia consequat velit id cillum officia nisi laboris consequat',
      },
      {
        title: 'ad amet aute pariatur',
        description:
          'fugiat nostrud Lorem sit proident in non ea mollit sit dolor consectetur elit amet consequat nostrud sint eiusmod eu ut',
      },
      {
        title: 'non amet magna ex',
        description:
          'sunt veniam eiusmod irure occaecat nisi nostrud laborum ea quis nulla aliquip et ullamco officia proident fugiat ad et dolore',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-2-cover.png',
        backCover: 'product/product-2-backCover.jpg',
        gallery: [
          'product/product-2-gallery-1.jpg',
          'product/product-2-gallery-2.jpg',
          'product/product-2-gallery-3.jpg',
          'product/product-2-gallery-4.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: false,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 22,
            price: 984.94,
            offer: {
              offerValue: 31.27,
              offerType: OfferEnum.Money,
              offerPrice: 557.35,
              offerPriceDates: [
                '2019-06-23T11:55:46+04:00',
                '2015-02-10T05:48:07+03:00',
              ],
            },
            featured: false,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 48,
            price: 801.3,
            offer: {
              offerValue: 6.75,
              offerType: OfferEnum.Money,
              offerPrice: 901.03,
              offerPriceDates: [
                '2021-04-01T09:35:10+04:00',
                '2020-08-02T01:32:47+04:00',
              ],
            },
            featured: false,
          },
        ],
      },
      shippingInfo: {
        weight: 80,
        length: 31,
        width: 69,
        height: 41,
        fee: 11,
        timeDelivery: 30,
        isFree: true,
      },
    },
    seoData: {
      slug: 'quis',
      metaTitle: 'Lorem sit non sunt ea culpa in aute proident sint',
      metaDescription:
        'do ullamco elit minim labore aliquip est proident quis commodo minim est est sint velit in id velit dolor ullamco culpa dolor ipsum cillum ipsum elit nisi deserunt id reprehenderit in qui labore qui fugiat nostrud ut Lorem pariatur ullamco',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['excepteur', 'ex', 'fugiat', 'veniam', 'duis'],
    rangePrice: {
      min: 247.51,
      max: 390.35,
      avg: 845.01,
    },
    status: false,
    sales: 743,
    amountSales: 61101.66,
    reviews,
    reviewsAvg: {
      amount: 55,
      avg: 3.7,
      starAmount: {
        oneStar: 65,
        twoStar: 22,
        threeStar: 11,
        fourStar: 44,
        fiveStar: 45,
      },
    },
    createdAt: '2022-12-06T03:58:11+04:00',
    updatedAt: '2022-10-04T01:48:25+04:00',
  },
  {
    _id: '65b587e2441acde5ccaa2ab7',
    name: 'fugiat sit',
    sku: 'd98ad6eb-afe2-44e8-87a1-7f94bfac1280',
    code: '10001165-e4aa-41c7-9218-280986c4d160',
    description: {
      overview: 'reprehenderit laboris in voluptate',
      otherInfos: [
        {
          title: 'tempor irure sunt anim',
          description:
            'irure qui eu id laborum qui esse dolor do excepteur cillum voluptate exercitation qui adipisicing et mollit quis anim enim',
        },
        {
          title: 'labore enim fugiat commodo',
          description:
            'voluptate est ad esse amet minim adipisicing adipisicing ullamco tempor voluptate in amet mollit velit cillum mollit ullamco excepteur ut',
        },
        {
          title: 'duis eu eu nulla',
          description:
            'eiusmod nulla elit velit cillum in cillum sit minim ut labore veniam anim ex aliquip pariatur veniam excepteur adipisicing consectetur',
        },
        {
          title: 'ad tempor occaecat Lorem',
          description:
            'cupidatat adipisicing elit id dolor proident sint proident nostrud laboris mollit eiusmod in pariatur cillum duis cupidatat incididunt exercitation voluptate',
        },
      ],
    },
    additional: {
      detail: 'in deserunt anim mollit',
      otherInfos: [
        {
          title: 'excepteur in ut duis',
          description:
            'mollit exercitation ea minim est cupidatat laborum minim id do adipisicing reprehenderit magna veniam eu anim nisi officia veniam dolore',
        },
        {
          title: 'aliqua ipsum non ea',
          description:
            'quis reprehenderit commodo minim sit ullamco nulla nulla cupidatat elit irure amet nostrud ad consectetur amet Lorem velit laborum proident',
        },
        {
          title: 'laborum nisi adipisicing sit',
          description:
            'culpa elit voluptate consectetur duis tempor eu sint ipsum est cupidatat non consequat ex non nostrud ad in fugiat consequat',
        },
        {
          title: 'reprehenderit deserunt nulla magna',
          description:
            'ipsum laborum amet fugiat eu labore velit do magna sunt id consectetur irure velit sunt cillum ullamco aliqua laboris nisi',
        },
      ],
    },
    specification: [
      {
        title: 'ut cillum deserunt laboris',
        description:
          'culpa pariatur ex consectetur mollit ipsum exercitation veniam velit est ad ea et anim in ad exercitation mollit Lorem voluptate',
      },
      {
        title: 'reprehenderit reprehenderit adipisicing qui',
        description:
          'adipisicing occaecat ad incididunt veniam quis fugiat irure esse culpa velit eu commodo culpa quis consectetur aute cupidatat consequat eu',
      },
      {
        title: 'in cupidatat nisi magna',
        description:
          'consequat commodo labore Lorem nulla laborum eu est incididunt nulla irure et nulla irure et incididunt aute cillum tempor sit',
      },
      {
        title: 'nisi velit magna Lorem',
        description:
          'sunt eu labore consectetur proident ullamco exercitation labore Lorem ea eu tempor sunt proident irure anim eu esse est duis',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-3-cover.png',
        backCover: 'product/product-3-backCover.jpg',
        gallery: [
          'product/product-3-gallery-1.jpg',
          'product/product-3-gallery-2.jpg',
          'product/product-3-gallery-3.jpg',
          'product/product-3-gallery-4.jpg',
          'product/product-3-gallery-5.jpg',
          'product/product-3-gallery-6.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: false,
        stockStatus: false,
        lowStockWarning: false,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 43,
            price: 226.66,
            offer: {
              offerValue: 49.74,
              offerType: OfferEnum.Money,
              offerPrice: 236.35,
              offerPriceDates: [
                '2023-07-14T08:21:04+04:00',
                '2016-06-18T05:13:37+04:00',
              ],
            },
            featured: true,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 15,
            price: 268.7,
            offer: {
              offerValue: 32.7,
              offerType: OfferEnum.Money,
              offerPrice: 292.33,
              offerPriceDates: [
                '2019-01-23T09:36:14+03:00',
                '2019-04-28T05:40:17+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 42,
        length: 92,
        width: 70,
        height: 38,
        fee: 11,
        timeDelivery: 19,
        isFree: false,
      },
    },
    seoData: {
      slug: 'occaecat',
      metaTitle:
        'minim reprehenderit qui tempor ex aliquip occaecat exercitation consectetur dolore',
      metaDescription:
        'ut qui commodo proident velit irure Lorem non id deserunt ad cupidatat anim enim adipisicing duis ullamco ut cupidatat enim irure exercitation do irure cillum sit eu esse irure eu labore consequat eu mollit proident est mollit mollit Lorem enim',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['mollit', 'elit', 'ullamco', 'adipisicing', 'deserunt'],
    rangePrice: {
      min: 374.23,
      max: 227.18,
      avg: 816.21,
    },
    status: false,
    sales: 862,
    amountSales: 95239.52,
    reviews,
    reviewsAvg: {
      amount: 92,
      avg: 4,
      starAmount: {
        oneStar: 84,
        twoStar: 48,
        threeStar: 72,
        fourStar: 36,
        fiveStar: 55,
      },
    },
    createdAt: '2022-09-05T11:48:12+04:00',
    updatedAt: '2019-10-01T12:37:43+04:00',
  },
  {
    _id: '65b587e27bee12b049aff22e',
    name: 'ipsum nulla',
    sku: '5360cbfe-1d1c-485b-ad47-73ed0fd5716e',
    code: 'e5ee4f57-fe34-449b-b42f-4ef405087a27',
    description: {
      overview: 'ipsum commodo anim mollit',
      otherInfos: [
        {
          title: 'reprehenderit irure est cillum',
          description:
            'aute eu ipsum id ea consequat eiusmod consectetur laborum aliquip cillum tempor esse mollit commodo fugiat ad cillum tempor id',
        },
        {
          title: 'ipsum reprehenderit tempor duis',
          description:
            'esse nostrud et consequat cillum irure duis labore officia ipsum incididunt incididunt eiusmod nulla eiusmod sunt duis laboris reprehenderit esse',
        },
        {
          title: 'et elit sint do',
          description:
            'reprehenderit laborum aute cupidatat quis aute consequat Lorem ut excepteur in fugiat ad sint voluptate occaecat magna aliqua aute velit',
        },
        {
          title: 'ullamco laborum eiusmod qui',
          description:
            'voluptate qui nostrud consectetur elit do adipisicing aliquip dolore tempor aute adipisicing exercitation ad adipisicing pariatur cillum pariatur elit veniam',
        },
      ],
    },
    additional: {
      detail: 'elit anim cillum non',
      otherInfos: [
        {
          title: 'occaecat duis irure ipsum',
          description:
            'velit adipisicing culpa velit reprehenderit occaecat nostrud excepteur consectetur officia ex adipisicing aute eiusmod voluptate est tempor excepteur laborum tempor',
        },
        {
          title: 'sit cillum cillum amet',
          description:
            'enim occaecat qui ad laborum est cupidatat do ad adipisicing in consequat irure commodo nostrud laborum mollit non quis laboris',
        },
        {
          title: 'qui proident fugiat incididunt',
          description:
            'labore nisi in deserunt aliqua esse exercitation incididunt veniam incididunt excepteur reprehenderit sint quis nulla mollit velit non excepteur esse',
        },
        {
          title: 'aute eu aute dolor',
          description:
            'magna ad consequat nisi ex qui cupidatat excepteur officia adipisicing consectetur irure culpa occaecat velit officia elit eiusmod est in',
        },
      ],
    },
    specification: [
      {
        title: 'aute enim labore enim',
        description:
          'irure ut velit nostrud exercitation officia officia nulla irure nulla esse ipsum aute officia duis proident consequat consectetur in ullamco',
      },
      {
        title: 'nulla quis incididunt ea',
        description:
          'do irure quis nostrud officia enim eu deserunt magna et do cillum non voluptate laborum nostrud deserunt excepteur ut do',
      },
      {
        title: 'commodo veniam consequat esse',
        description:
          'veniam ipsum laboris sint officia ullamco commodo excepteur deserunt consequat ut tempor voluptate dolore ex anim pariatur nisi mollit laboris',
      },
      {
        title: 'mollit qui occaecat consequat',
        description:
          'commodo nisi elit ea aliquip laboris excepteur sunt et ex Lorem cupidatat duis adipisicing laborum enim consequat pariatur pariatur fugiat',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-4-cover.png',
        backCover: 'product/product-4-backCover.jpg',
        gallery: [
          'product/product-4-gallery-1.jpg',
          'product/product-4-gallery-2.jpg',
          'product/product-4-gallery-3.jpg',
          'product/product-4-gallery-4.jpg',
          'product/product-4-gallery-5.jpg',
          'product/product-4-gallery-6.jpg',
          'product/product-4-gallery-7.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 32,
            price: 879.19,
            offer: {
              offerValue: 65.41,
              offerType: OfferEnum.Money,
              offerPrice: 257.99,
              offerPriceDates: [
                '2021-03-14T03:02:35+04:00',
                '2015-02-17T12:06:57+03:00',
              ],
            },
            featured: true,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 79,
            price: 971.54,
            offer: {
              offerValue: 21.35,
              offerType: OfferEnum.Money,
              offerPrice: 823.56,
              offerPriceDates: [
                '2014-11-20T12:50:49+03:00',
                '2017-03-25T04:45:12+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 86,
        length: 42,
        width: 100,
        height: 2,
        fee: 20,
        timeDelivery: 6,
        isFree: false,
      },
    },
    seoData: {
      slug: 'eiusmod',
      metaTitle: 'cillum est quis dolor id anim eiusmod et Lorem fugiat',
      metaDescription:
        'mollit fugiat amet in eu minim eiusmod eiusmod proident cillum voluptate veniam ex consequat do sint id adipisicing do irure commodo aliqua ut fugiat officia enim consequat pariatur tempor anim laboris tempor qui deserunt ut sint est nostrud qui tempor',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    tags: ['duis', 'velit', 'commodo', 'ut', 'tempor'],
    rangePrice: {
      min: 226.36,
      max: 176.43,
      avg: 218.26,
    },
    status: false,
    sales: 442,
    amountSales: 3343.68,
    reviews,
    reviewsAvg: {
      amount: 74,
      avg: 4.8,
      starAmount: {
        oneStar: 19,
        twoStar: 71,
        threeStar: 12,
        fourStar: 51,
        fiveStar: 96,
      },
    },
    createdAt: '2019-05-08T06:52:25+04:00',
    updatedAt: '2021-04-12T01:40:08+04:00',
  },
  {
    _id: '65b587e23a7a8f62b9c90f22',
    name: 'nulla minim',
    sku: '746cb03f-2021-41e3-bc51-28e5a88fe250',
    code: '6fec7131-3a0c-4e1c-92d6-42921ed7fff5',
    description: {
      overview: 'mollit veniam aliqua sit',
      otherInfos: [
        {
          title: 'esse ea magna eu',
          description:
            'reprehenderit culpa ea velit Lorem mollit exercitation ipsum id id excepteur cillum nulla pariatur ullamco sunt nisi non occaecat ex',
        },
        {
          title: 'duis labore ullamco Lorem',
          description:
            'qui cillum cillum minim quis laborum mollit dolor in duis id reprehenderit quis fugiat ex sint voluptate non id minim',
        },
        {
          title: 'aliquip esse irure aliquip',
          description:
            'excepteur id ullamco cupidatat ut officia laboris velit veniam ad sint duis proident sunt in dolore veniam exercitation do amet',
        },
        {
          title: 'minim nulla ullamco veniam',
          description:
            'cupidatat excepteur aute ex enim in qui tempor ad irure consequat est Lorem dolore ea consectetur esse voluptate Lorem duis',
        },
      ],
    },
    additional: {
      detail: 'in labore ex veniam',
      otherInfos: [
        {
          title: 'ea irure nostrud ad',
          description:
            'consectetur id Lorem labore proident cupidatat reprehenderit reprehenderit sit esse et et labore duis eu minim aliquip irure duis eiusmod',
        },
        {
          title: 'elit nisi eu ipsum',
          description:
            'commodo Lorem nostrud duis nisi Lorem non velit quis nulla anim Lorem culpa voluptate nostrud eu sunt aute ut nulla',
        },
        {
          title: 'do ipsum id mollit',
          description:
            'aliquip sint deserunt cupidatat occaecat voluptate quis Lorem exercitation adipisicing et reprehenderit ipsum proident excepteur magna proident cupidatat mollit ullamco',
        },
        {
          title: 'sit qui irure esse',
          description:
            'non sunt aliquip reprehenderit ipsum in officia duis exercitation adipisicing adipisicing cupidatat mollit do consectetur pariatur ut tempor anim et',
        },
      ],
    },
    specification: [
      {
        title: 'sit qui non enim',
        description:
          'qui proident incididunt laboris eiusmod do nisi officia id ex ipsum dolor ut ullamco ea incididunt dolor est dolor velit',
      },
      {
        title: 'sint enim occaecat anim',
        description:
          'ut dolore ullamco cupidatat nulla sint laboris non id cillum et in culpa elit in esse dolor elit cupidatat sunt',
      },
      {
        title: 'voluptate exercitation nisi culpa',
        description:
          'fugiat ex esse consectetur eu mollit labore esse ea mollit magna mollit elit esse irure ullamco et ex eu ipsum',
      },
      {
        title: 'veniam commodo ullamco do',
        description:
          'in ullamco commodo quis culpa sint excepteur fugiat velit pariatur consectetur tempor consequat incididunt et eiusmod esse dolor duis exercitation',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-5-cover.png',
        backCover: 'product/product-5-backCover.jpg',
        gallery: [
          'product/product-5-gallery-1.jpg',
          'product/product-5-gallery-2.jpg',
          'product/product-5-gallery-3.jpg',
          'product/product-5-gallery-4.jpg',
          'product/product-5-gallery-5.jpg',
          'product/product-5-gallery-6.jpg',
          'product/product-5-gallery-7.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: false,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 33,
            price: 641.39,
            offer: {
              offerValue: 23.08,
              offerType: OfferEnum.Money,
              offerPrice: 883.76,
              offerPriceDates: [
                '2014-12-11T09:17:09+03:00',
                '2018-03-11T05:41:07+04:00',
              ],
            },
            featured: true,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 42,
            price: 518.5,
            offer: {
              offerValue: 7.44,
              offerType: OfferEnum.Money,
              offerPrice: 359.4,
              offerPriceDates: [
                '2018-04-03T08:21:27+04:00',
                '2020-02-09T12:22:47+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 67,
        length: 7,
        width: 91,
        height: 56,
        fee: 2,
        timeDelivery: 30,
        isFree: false,
      },
    },
    seoData: {
      slug: 'laboris',
      metaTitle:
        'ullamco reprehenderit ullamco tempor nulla amet aliqua in adipisicing nisi',
      metaDescription:
        'occaecat id ullamco quis reprehenderit cupidatat laboris in ullamco consequat sint occaecat dolor sunt duis laboris proident nisi proident pariatur enim commodo commodo culpa cillum incididunt anim laboris nisi cillum nostrud eu et irure amet culpa consectetur mollit veniam anim',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['esse', 'voluptate', 'cupidatat', 'et', 'proident'],
    rangePrice: {
      min: 271.74,
      max: 387.78,
      avg: 209.86,
    },
    status: false,
    sales: 661,
    amountSales: 26024.71,
    reviews,
    reviewsAvg: {
      amount: 87,
      avg: 0.3,
      starAmount: {
        oneStar: 95,
        twoStar: 3,
        threeStar: 14,
        fourStar: 75,
        fiveStar: 4,
      },
    },
    createdAt: '2014-06-04T10:01:31+04:00',
    updatedAt: '2023-01-06T07:49:01+04:00',
  },
  {
    _id: '65b587e2ab3c74808f5b310b',
    name: 'nostrud voluptate',
    sku: '22fc2c7e-3289-4549-9b0a-0ac40f04344e',
    code: '6b73fe27-cb84-4c19-af44-bace2e8e3fae',
    description: {
      overview: 'anim ea et laborum',
      otherInfos: [
        {
          title: 'qui voluptate ea duis',
          description:
            'laborum sint velit eiusmod duis pariatur laboris cupidatat ea ea velit fugiat reprehenderit eu deserunt fugiat pariatur ad minim magna',
        },
        {
          title: 'cillum aliqua cupidatat anim',
          description:
            'laboris dolore sit et pariatur sit laborum culpa aute et duis nostrud proident enim voluptate do amet ad labore exercitation',
        },
        {
          title: 'officia magna qui officia',
          description:
            'aliqua pariatur ipsum anim aliqua labore fugiat eu pariatur consequat do esse elit cupidatat amet adipisicing tempor esse ea magna',
        },
        {
          title: 'excepteur ex eu officia',
          description:
            'et labore do pariatur adipisicing consectetur laboris mollit proident amet labore eu dolor amet dolor pariatur cupidatat sit aute officia',
        },
      ],
    },
    additional: {
      detail: 'eu tempor amet aliqua',
      otherInfos: [
        {
          title: 'non consequat sit ullamco',
          description:
            'sunt non aliqua non in sint aliqua in quis culpa in culpa irure duis sit pariatur incididunt consectetur amet enim',
        },
        {
          title: 'irure et non aute',
          description:
            'est laborum adipisicing ad aliquip duis nostrud occaecat irure ex ad irure est qui ullamco laborum reprehenderit Lorem dolor laborum',
        },
        {
          title: 'mollit ad irure ut',
          description:
            'minim esse esse officia labore aliqua irure ut quis incididunt esse laboris ipsum nulla eu id qui dolor nostrud et',
        },
        {
          title: 'reprehenderit ullamco incididunt proident',
          description:
            'Lorem tempor dolore nisi nisi cillum eiusmod magna consequat minim exercitation consectetur deserunt do culpa duis tempor labore minim deserunt',
        },
      ],
    },
    specification: [
      {
        title: 'in ex fugiat deserunt',
        description:
          'laborum consectetur reprehenderit non velit ut laborum dolor reprehenderit sunt esse culpa ut anim pariatur elit aute mollit esse deserunt',
      },
      {
        title: 'incididunt amet sunt ea',
        description:
          'amet consectetur amet minim ipsum ad mollit dolor culpa nisi ut ullamco et do in nulla consectetur do ipsum non',
      },
      {
        title: 'mollit voluptate dolor anim',
        description:
          'deserunt Lorem officia aute mollit labore ex mollit duis enim est do excepteur quis velit qui elit esse sit dolore',
      },
      {
        title: 'labore fugiat culpa incididunt',
        description:
          'ullamco nulla adipisicing sit nulla quis anim quis eu consectetur enim deserunt exercitation veniam pariatur id nisi in esse fugiat',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-6-cover.png',
        backCover: 'product/product-6-backCover.jpg',
        gallery: [
          'product/product-6-gallery-1.jpg',
          'product/product-6-gallery-2.jpg',
          'product/product-6-gallery-3.jpg',
          'product/product-6-gallery-4.jpg',
          'product/product-6-gallery-5.jpg',
          'product/product-6-gallery-6.jpg',
          'product/product-6-gallery-7.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 86,
            price: 417.9,
            offer: {
              offerValue: 65.02,
              offerType: OfferEnum.Money,
              offerPrice: 423.79,
              offerPriceDates: [
                '2018-12-12T12:13:04+03:00',
                '2016-01-07T11:23:24+03:00',
              ],
            },
            featured: false,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 2,
            price: 466.43,
            offer: {
              offerValue: 21.81,
              offerType: OfferEnum.Money,
              offerPrice: 167.29,
              offerPriceDates: [
                '2017-06-22T06:27:31+04:00',
                '2018-10-29T11:24:50+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 61,
        length: 91,
        width: 68,
        height: 16,
        fee: 2,
        timeDelivery: 13,
        isFree: true,
      },
    },
    seoData: {
      slug: 'ullamco',
      metaTitle: 'proident qui consequat est ut mollit id sint dolore ipsum',
      metaDescription:
        'sit anim cupidatat pariatur et ex enim mollit esse tempor officia mollit Lorem ex tempor Lorem esse quis commodo amet aliquip Lorem proident sunt sit labore excepteur commodo velit amet pariatur irure eiusmod minim consectetur voluptate laborum enim culpa ut',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['ea', 'laboris', 'sunt', 'nostrud', 'fugiat'],
    rangePrice: {
      min: 490.02,
      max: 133.08,
      avg: 889.93,
    },
    status: true,
    sales: 132,
    amountSales: 7008.18,
    reviews,
    reviewsAvg: {
      amount: 67,
      avg: 1.1,
      starAmount: {
        oneStar: 27,
        twoStar: 14,
        threeStar: 46,
        fourStar: 18,
        fiveStar: 82,
      },
    },
    createdAt: '2021-10-14T06:08:59+04:00',
    updatedAt: '2023-07-25T11:31:40+04:00',
  },
  {
    _id: '65b587e22249b0053f62fffc',
    name: 'et deserunt',
    sku: '17334755-c3c7-4e60-b308-d1bfeb3d9a18',
    code: '15cbaf1e-c772-41a5-a6d5-cb99d0eb9db5',
    description: {
      overview: 'occaecat consequat reprehenderit laborum',
      otherInfos: [
        {
          title: 'exercitation duis id deserunt',
          description:
            'nostrud nulla commodo culpa voluptate ipsum eiusmod sit deserunt esse reprehenderit occaecat in excepteur mollit deserunt esse pariatur excepteur elit',
        },
        {
          title: 'officia amet irure do',
          description:
            'fugiat sunt aute sit exercitation consectetur laboris officia esse ut Lorem ea Lorem amet est aliquip culpa incididunt dolor aute',
        },
        {
          title: 'officia minim officia aliquip',
          description:
            'culpa enim labore minim magna esse do culpa nulla quis nisi veniam ad ea consequat cillum nulla est dolor elit',
        },
        {
          title: 'ut proident Lorem irure',
          description:
            'ullamco eiusmod eu sint sunt est nisi pariatur nulla aliqua nisi in exercitation ad officia incididunt est ad proident Lorem',
        },
      ],
    },
    additional: {
      detail: 'consequat duis labore velit',
      otherInfos: [
        {
          title: 'nostrud non Lorem nostrud',
          description:
            'laboris elit quis dolore tempor esse consequat ipsum labore in tempor magna proident non in magna mollit sit non dolor',
        },
        {
          title: 'ipsum nulla id non',
          description:
            'incididunt culpa laborum magna duis occaecat Lorem quis sunt non id non non minim qui consequat tempor reprehenderit consequat labore',
        },
        {
          title: 'est enim commodo sit',
          description:
            'incididunt qui consequat pariatur duis excepteur anim magna eiusmod reprehenderit fugiat adipisicing magna nostrud adipisicing ut Lorem commodo sit sint',
        },
        {
          title: 'consectetur aliqua mollit tempor',
          description:
            'sint nisi nostrud qui tempor occaecat tempor deserunt velit nulla ex ex nulla duis aute consequat id minim id cupidatat',
        },
      ],
    },
    specification: [
      {
        title: 'minim excepteur sit commodo',
        description:
          'velit magna aliqua Lorem culpa esse id deserunt do est proident commodo aliqua ad commodo tempor irure consectetur pariatur est',
      },
      {
        title: 'elit excepteur esse officia',
        description:
          'veniam mollit mollit anim amet anim adipisicing velit dolor cupidatat tempor nostrud et irure nisi cupidatat excepteur incididunt adipisicing proident',
      },
      {
        title: 'et sunt duis consequat',
        description:
          'non excepteur adipisicing adipisicing anim incididunt id duis consectetur incididunt excepteur elit tempor duis eu dolore fugiat consequat irure pariatur',
      },
      {
        title: 'non proident in Lorem',
        description:
          'officia commodo qui pariatur incididunt deserunt elit veniam labore cupidatat voluptate dolor laborum dolore veniam eiusmod excepteur qui sit fugiat',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-7-cover.png',
        backCover: 'product/product-7-backCover.jpg',
        gallery: [
          'product/product-7-gallery-1.jpg',
          'product/product-7-gallery-2.jpg',
          'product/product-7-gallery-3.jpg',
          'product/product-7-gallery-4.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: false,
        stockStatus: false,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 30,
            price: 246.78,
            offer: {
              offerValue: 50.16,
              offerType: OfferEnum.Money,
              offerPrice: 506.5,
              offerPriceDates: [
                '2023-12-29T01:13:01+04:00',
                '2017-09-20T03:26:17+04:00',
              ],
            },
            featured: false,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 20,
            price: 707.06,
            offer: {
              offerValue: 1.01,
              offerType: OfferEnum.Money,
              offerPrice: 969.76,
              offerPriceDates: [
                '2022-03-14T12:28:22+04:00',
                '2018-04-12T07:30:15+04:00',
              ],
            },
            featured: false,
          },
        ],
      },
      shippingInfo: {
        weight: 29,
        length: 38,
        width: 87,
        height: 96,
        fee: 18,
        timeDelivery: 14,
        isFree: false,
      },
    },
    seoData: {
      slug: 'id',
      metaTitle:
        'culpa nostrud excepteur duis esse deserunt sint veniam enim eiusmod',
      metaDescription:
        'minim consectetur do reprehenderit nostrud cupidatat et voluptate enim dolore in consequat elit adipisicing magna sit eu reprehenderit ex culpa voluptate pariatur labore fugiat ad aliquip quis mollit Lorem nulla aliquip ea occaecat cillum dolore ipsum velit cupidatat minim sit',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['cillum', 'incididunt', 'cillum', 'cupidatat', 'in'],
    rangePrice: {
      min: 196.32,
      max: 189.91,
      avg: 666.88,
    },
    status: true,
    sales: 113,
    amountSales: 55313.89,
    reviews,
    reviewsAvg: {
      amount: 78,
      avg: 1.7,
      starAmount: {
        oneStar: 32,
        twoStar: 17,
        threeStar: 30,
        fourStar: 16,
        fiveStar: 95,
      },
    },
    createdAt: '2018-08-18T06:33:43+04:00',
    updatedAt: '2020-09-18T01:40:15+04:00',
  },
  {
    _id: '65b587e26b9485771d596f17',
    name: 'adipisicing Lorem',
    sku: '3b4762b9-1f5b-4686-b036-6a5d974f11d8',
    code: '822ee023-a8a6-4bd9-94fd-9ad613c922a1',
    description: {
      overview: 'quis anim excepteur labore',
      otherInfos: [
        {
          title: 'enim exercitation ullamco do',
          description:
            'laboris cupidatat nulla qui eu ipsum dolor aliquip labore reprehenderit ea ipsum ex sit aute minim sint labore cillum Lorem',
        },
        {
          title: 'nisi aliquip deserunt aute',
          description:
            'laboris anim amet minim Lorem cupidatat ullamco veniam dolore pariatur ad esse ex enim voluptate laboris nulla anim id aliquip',
        },
        {
          title: 'exercitation veniam nulla minim',
          description:
            'id aliqua labore quis velit culpa irure occaecat nulla dolore eiusmod ut consequat deserunt dolore est irure occaecat ad officia',
        },
        {
          title: 'ea irure ut eu',
          description:
            'elit exercitation cillum minim ipsum ad aliquip nulla reprehenderit Lorem irure irure dolore ut et consectetur deserunt quis reprehenderit exercitation',
        },
      ],
    },
    additional: {
      detail: 'ut in magna est',
      otherInfos: [
        {
          title: 'enim exercitation adipisicing ipsum',
          description:
            'minim sit sint dolor veniam culpa veniam incididunt eu sint consequat aliquip aliqua anim culpa qui ut culpa sint mollit',
        },
        {
          title: 'enim occaecat fugiat do',
          description:
            'culpa fugiat id do sit cillum occaecat deserunt laboris consectetur mollit ad consectetur aliqua incididunt sint deserunt nulla ea dolore',
        },
        {
          title: 'adipisicing irure duis qui',
          description:
            'officia aliqua ipsum in eiusmod elit in excepteur aliquip sunt dolor dolore enim eiusmod do Lorem commodo et tempor ut',
        },
        {
          title: 'qui reprehenderit Lorem cillum',
          description:
            'est do minim nisi nulla aute nisi magna tempor laboris occaecat non officia proident commodo occaecat laboris mollit proident nisi',
        },
      ],
    },
    specification: [
      {
        title: 'mollit deserunt adipisicing proident',
        description:
          'exercitation laboris consectetur labore dolore voluptate cupidatat aliquip esse cupidatat laboris excepteur fugiat nisi Lorem tempor velit sit id officia',
      },
      {
        title: 'minim do tempor anim',
        description:
          'sint laboris mollit magna adipisicing officia enim amet non occaecat officia cillum aute nisi ad sunt non eiusmod anim et',
      },
      {
        title: 'aliquip excepteur cillum esse',
        description:
          'cupidatat aliqua consectetur consectetur minim ullamco commodo labore consequat ad reprehenderit ea exercitation commodo do occaecat fugiat ex pariatur voluptate',
      },
      {
        title: 'elit velit reprehenderit consectetur',
        description:
          'nulla velit irure aute exercitation duis est commodo et officia duis eiusmod ex cupidatat ut aute sunt exercitation deserunt enim',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-8-cover.png',
        backCover: 'product/product-8-backCover.jpg',
        gallery: [
          'product/product-8-gallery-1.jpg',
          'product/product-8-gallery-2.jpg',
          'product/product-8-gallery-3.jpg',
          'product/product-8-gallery-4.jpg',
          'product/product-8-gallery-5.jpg',
          'product/product-8-gallery-6.jpg',
          'product/product-8-gallery-7.jpg',
          'product/product-8-gallery-8.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 97,
            price: 899.47,
            offer: {
              offerValue: 43.83,
              offerType: OfferEnum.Money,
              offerPrice: 763.88,
              offerPriceDates: [
                '2020-04-15T01:17:43+04:00',
                '2014-10-17T05:04:33+04:00',
              ],
            },
            featured: true,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 95,
            price: 353.74,
            offer: {
              offerValue: 12.41,
              offerType: OfferEnum.Money,
              offerPrice: 917.97,
              offerPriceDates: [
                '2022-10-18T12:18:21+04:00',
                '2015-03-22T02:18:38+04:00',
              ],
            },
            featured: false,
          },
        ],
      },
      shippingInfo: {
        weight: 1,
        length: 7,
        width: 78,
        height: 32,
        fee: 20,
        timeDelivery: 24,
        isFree: false,
      },
    },
    seoData: {
      slug: 'magna',
      metaTitle:
        'eu aliquip magna pariatur laboris enim veniam qui occaecat fugiat',
      metaDescription:
        'aute Lorem anim esse est eiusmod irure anim quis enim ut incididunt reprehenderit consequat commodo pariatur labore reprehenderit Lorem enim anim qui irure sunt laboris quis amet sunt cupidatat consectetur duis deserunt in tempor enim culpa pariatur elit id sint',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['commodo', 'aliqua', 'Lorem', 'velit', 'cillum'],
    rangePrice: {
      min: 995.62,
      max: 924.04,
      avg: 726.2,
    },
    status: true,
    sales: 600,
    amountSales: 30421.42,
    reviews,
    reviewsAvg: {
      amount: 44,
      avg: 4.8,
      starAmount: {
        oneStar: 80,
        twoStar: 25,
        threeStar: 24,
        fourStar: 76,
        fiveStar: 51,
      },
    },
    createdAt: '2014-04-18T02:20:27+04:00',
    updatedAt: '2020-08-26T04:27:24+04:00',
  },
  {
    _id: '65b587e2cef7a40e1d4bb234',
    name: 'ex enim',
    sku: '19f6c55d-cf8a-42ab-a680-0d451d13bb84',
    code: '3411ae7a-6f55-4c5c-8ace-4fa60d1068b4',
    description: {
      overview: 'sunt laborum dolor ullamco',
      otherInfos: [
        {
          title: 'incididunt enim occaecat ad',
          description:
            'elit laborum labore qui consequat in nostrud nulla eiusmod Lorem adipisicing nulla esse voluptate ullamco sunt fugiat nisi culpa exercitation',
        },
        {
          title: 'commodo consequat ea in',
          description:
            'labore veniam commodo dolor incididunt laborum tempor ad duis do pariatur ex proident sunt aute voluptate sit aliquip labore proident',
        },
        {
          title: 'enim anim ullamco eiusmod',
          description:
            'pariatur qui minim magna reprehenderit minim cupidatat consectetur minim deserunt pariatur voluptate proident culpa reprehenderit nulla dolore consectetur labore dolor',
        },
        {
          title: 'nisi deserunt officia culpa',
          description:
            'exercitation esse dolore dolor aute sit laboris dolore occaecat est sunt est consectetur tempor ullamco non eiusmod Lorem nostrud commodo',
        },
      ],
    },
    additional: {
      detail: 'sit velit Lorem ea',
      otherInfos: [
        {
          title: 'aliquip dolor irure nisi',
          description:
            'est sit in sit et Lorem culpa eu aute aliqua sint minim nisi nisi dolore ad sunt dolor ut tempor',
        },
        {
          title: 'magna mollit ut velit',
          description:
            'non nostrud adipisicing ad cillum labore et enim tempor tempor exercitation non enim laboris elit labore anim reprehenderit reprehenderit incididunt',
        },
        {
          title: 'amet consectetur velit aliqua',
          description:
            'mollit eu in aliqua velit ad in ea dolor ullamco incididunt consectetur dolor nostrud sint consequat exercitation duis occaecat reprehenderit',
        },
        {
          title: 'ipsum culpa elit reprehenderit',
          description:
            'exercitation culpa cillum tempor irure qui amet ea veniam voluptate cupidatat est sunt velit occaecat ut voluptate laboris in ea',
        },
      ],
    },
    specification: [
      {
        title: 'id Lorem velit consectetur',
        description:
          'duis amet dolore nulla duis commodo in est pariatur nulla proident incididunt ex est et pariatur in exercitation esse pariatur',
      },
      {
        title: 'id qui cillum velit',
        description:
          'et exercitation incididunt dolore esse nulla aliqua non ut excepteur laboris officia labore ut et laboris in ex reprehenderit id',
      },
      {
        title: 'deserunt do quis elit',
        description:
          'labore ad irure aute proident esse velit proident excepteur sint est occaecat ut non excepteur et culpa dolor deserunt eiusmod',
      },
      {
        title: 'tempor commodo in consectetur',
        description:
          'exercitation est aliquip ex reprehenderit labore proident consectetur culpa commodo nostrud nisi consectetur duis labore et consequat et sit Lorem',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-9-cover.png',
        backCover: 'product/product-9-backCover.jpg',
        gallery: [
          'product/product-9-gallery-1.jpg',
          'product/product-9-gallery-2.jpg',
          'product/product-9-gallery-3.jpg',
          'product/product-9-gallery-4.jpg',
          'product/product-9-gallery-5.jpg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: true,
        stockStatus: false,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 8,
            price: 843,
            offer: {
              offerValue: 11.54,
              offerType: OfferEnum.Money,
              offerPrice: 966.61,
              offerPriceDates: [
                '2017-11-02T01:49:26+03:00',
                '2020-02-09T03:25:29+04:00',
              ],
            },
            featured: false,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 38,
            price: 234.2,
            offer: {
              offerValue: 47.65,
              offerType: OfferEnum.Money,
              offerPrice: 414.09,
              offerPriceDates: [
                '2023-11-22T12:02:55+04:00',
                '2023-05-14T03:33:29+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 86,
        length: 28,
        width: 61,
        height: 80,
        fee: 10,
        timeDelivery: 7,
        isFree: false,
      },
    },
    seoData: {
      slug: 'amet',
      metaTitle:
        'laboris dolore laboris consectetur Lorem aliqua dolore eiusmod nostrud sint',
      metaDescription:
        'occaecat tempor in ex pariatur ea commodo ex eu dolor nulla do ea commodo excepteur deserunt consequat est minim tempor irure nulla ipsum ad ut eu consequat nisi ut nostrud magna velit ut velit eiusmod ex esse id ad sint',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['culpa', 'officia', 'amet', 'ut', 'irure'],
    rangePrice: {
      min: 957.56,
      max: 729.6,
      avg: 432.33,
    },
    status: false,
    sales: 268,
    amountSales: 25814.37,
    reviews,
    reviewsAvg: {
      amount: 67,
      avg: 3.2,
      starAmount: {
        oneStar: 71,
        twoStar: 79,
        threeStar: 27,
        fourStar: 89,
        fiveStar: 63,
      },
    },
    createdAt: '2022-03-21T12:58:31+04:00',
    updatedAt: '2023-06-20T09:26:54+04:00',
  },
  {
    _id: '65b587e274d0abc6d25713ba',
    name: 'ea ad',
    sku: 'a07b63ce-5ec3-4346-a7fa-870f7e0779db',
    code: 'ff4b7413-3172-43d7-b194-48927120d86e',
    description: {
      overview: 'aliquip in consequat deserunt',
      otherInfos: [
        {
          title: 'nisi occaecat in magna',
          description:
            'sunt Lorem duis est fugiat sunt velit et eiusmod non commodo Lorem aute ipsum enim ex dolor ut magna in',
        },
        {
          title: 'voluptate proident ullamco id',
          description:
            'fugiat aliquip Lorem irure exercitation irure nisi exercitation eiusmod duis eiusmod amet cillum adipisicing consequat do nulla aliquip labore esse',
        },
        {
          title: 'Lorem consectetur ullamco commodo',
          description:
            'pariatur consectetur voluptate ut Lorem anim ullamco anim magna exercitation Lorem adipisicing labore consectetur magna aliqua aliqua laborum tempor ullamco',
        },
        {
          title: 'laborum enim pariatur ullamco',
          description:
            'labore nisi mollit occaecat eu quis adipisicing cillum consectetur Lorem id sint consectetur cupidatat in voluptate non est ullamco do',
        },
      ],
    },
    additional: {
      detail: 'aliqua tempor qui adipisicing',
      otherInfos: [
        {
          title: 'irure occaecat reprehenderit dolore',
          description:
            'do ea culpa aliqua est esse incididunt aliquip est ipsum ex consequat reprehenderit in id culpa aliqua officia incididunt labore',
        },
        {
          title: 'enim consectetur non eu',
          description:
            'ipsum irure incididunt non sint do excepteur amet voluptate nulla laborum nulla ea minim qui eiusmod ipsum anim consequat incididunt',
        },
        {
          title: 'tempor cillum pariatur elit',
          description:
            'cupidatat laborum cupidatat est cupidatat non est fugiat ullamco ad voluptate id nostrud ea ex laboris officia aliqua consectetur enim',
        },
        {
          title: 'do sint consectetur est',
          description:
            'adipisicing deserunt duis anim officia dolor irure ex enim voluptate officia id sint amet consequat aliquip consectetur laborum laborum ipsum',
        },
      ],
    },
    specification: [
      {
        title: 'nostrud pariatur sunt elit',
        description:
          'in laborum ea dolore elit voluptate magna laboris laboris fugiat culpa incididunt dolor deserunt dolore veniam ullamco in proident minim',
      },
      {
        title: 'magna velit culpa magna',
        description:
          'proident tempor sit nulla do magna irure ut non culpa ipsum tempor culpa id reprehenderit fugiat adipisicing est minim elit',
      },
      {
        title: 'ea quis magna qui',
        description:
          'adipisicing deserunt sunt ullamco quis ullamco reprehenderit deserunt excepteur occaecat fugiat elit reprehenderit ea cupidatat incididunt anim consequat nostrud incididunt',
      },
      {
        title: 'velit in ullamco fugiat',
        description:
          'magna eu elit aute qui minim reprehenderit commodo et eu dolore cupidatat reprehenderit id ex ad consectetur anim exercitation irure',
      },
    ],
    productData: {
      media: {
        cover: 'product/product-10-cover.png',
        backCover: 'product/product-10-backCover.jpeg',
        gallery: [
          'product/product-10-gallery-1.jpg',
          'product/product-10-gallery-2.jpeg',
          'product/product-10-gallery-3.jpeg',
          'product/product-10-gallery-4.jpeg',
          'product/product-10-gallery-5.jpeg',
        ],
        video: 'https://www.youtube.com/watch?v=v4WJWqDW_Hw',
      },
      inventory: {
        manageStock: false,
        stockStatus: true,
        lowStockWarning: true,
        info: [
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 63,
            price: 370.37,
            offer: {
              offerValue: 49.02,
              offerType: OfferEnum.Money,
              offerPrice: 730.56,
              offerPriceDates: [
                '2017-11-20T01:01:35+03:00',
                '2022-06-13T06:18:10+04:00',
              ],
            },
            featured: false,
          },
          {
            color: {
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
            },
            stock: 10,
            price: 343.81,
            offer: {
              offerValue: 10.46,
              offerType: OfferEnum.Money,
              offerPrice: 306.88,
              offerPriceDates: [
                '2022-10-07T01:04:41+04:00',
                '2023-08-31T10:43:16+04:00',
              ],
            },
            featured: true,
          },
        ],
      },
      shippingInfo: {
        weight: 93,
        length: 29,
        width: 84,
        height: 90,
        fee: 8,
        timeDelivery: 19,
        isFree: true,
      },
    },
    seoData: {
      slug: 'consectetur',
      metaTitle:
        'cupidatat ullamco aliquip irure eu tempor voluptate esse qui proident',
      metaDescription:
        'fugiat laborum esse officia ad dolor adipisicing qui magna ea qui proident ullamco veniam et Lorem exercitation qui deserunt do exercitation ad incididunt sunt sint aliquip ad et magna officia quis occaecat cupidatat enim veniam id velit dolor sint ipsum',
    },
    published: {
      step: StepEnum.Completed,
      visibility: VisibilityEnum.Public,
    },
    category: [
      {
        _id: '659edb43f26a45ceed256d3f',
        name: 'Cadeiras',
        slug: 'cadeiras',
      },
      {
        _id: '659edb43f26a45ceed256d3q',
        name: 'Poltronas',
        slug: 'poltronas',
      },
    ],
    brand: {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Castor',
      image: 'brand/brand-1.webp',
    },
    tags: ['sit', 'dolor', 'culpa', 'enim', 'et'],
    rangePrice: {
      min: 600.56,
      max: 220.74,
      avg: 882.87,
    },
    status: true,
    sales: 900,
    amountSales: 3245,
    reviews,
    reviewsAvg: {
      amount: 33,
      avg: 2.4,
      starAmount: {
        oneStar: 42,
        twoStar: 74,
        threeStar: 94,
        fourStar: 49,
        fiveStar: 30,
      },
    },
    createdAt: '2020-02-06T03:48:25+04:00',
    updatedAt: '2016-05-17T03:34:23+04:00',
  },
]

export const history = {
  [new Date().toISOString().split('T')[0]]: products,
  [new Date('25 Feb 2020').toISOString().split('T')[0]]: products,
  [new Date('20 Jan 2020').toISOString().split('T')[0]]: products,
}

export const offers = [
  {
    _id: '65b6685e8e9d1c1e722ba8e9',
    name: 'non',
    complement: 'nulla et magna cillum elit tempor eiusmod nulla aute cillum',
    discountType: DiscountEnum.Coupon,
    offerType: OfferEnum.Money,
    offerValue: 2761.34,
    offerPriceDates: ['2019-04-03T10:47:09+04:00', '2014-02-02T12:20:36+03:00'],
    status: true,
    usageLimit: {
      maxCart: 10,
      minCart: 10,
      maxCustomer: 8,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2020-07-01T02:40:36+04:00',
    updatedAt: '2014-01-20T11:32:11+03:00',
  },
  {
    _id: '65b6685e54a1349f5591736b',
    name: 'mollit',
    complement:
      'incididunt cupidatat in ullamco id dolore ullamco esse id magna',
    discountType: DiscountEnum.Offer,
    offerType: OfferEnum.Money,
    offerValue: 2968.89,
    offerPriceDates: ['2018-02-01T02:08:17+03:00', '2023-09-25T03:35:11+04:00'],
    status: false,
    usageLimit: {
      maxCart: 2,
      minCart: 7,
      maxCustomer: 7,
    },
    everyOne: true,
    category: [],
    brand: [],
    product: [],
    createdAt: '2017-12-13T07:04:44+03:00',
    updatedAt: '2014-04-18T10:33:05+04:00',
  },
  {
    _id: '65b6685edbb94b8689f1156c',
    name: 'consequat',
    complement:
      'exercitation minim duis duis et consequat commodo pariatur culpa incididunt',
    discountType: DiscountEnum.Offer,
    offerType: OfferEnum.Money,
    offerValue: 1433.88,
    offerPriceDates: ['2019-08-03T08:39:23+04:00', '2019-09-23T01:45:30+04:00'],
    status: false,
    usageLimit: {
      maxCart: 5,
      minCart: 6,
      maxCustomer: 6,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2017-02-07T10:42:55+03:00',
    updatedAt: '2018-08-09T12:51:59+04:00',
  },
  {
    _id: '65b6685ea3bb5db62ab4b3cd',
    name: 'officia',
    complement:
      'excepteur qui culpa cupidatat sunt magna labore qui pariatur consequat',
    discountType: DiscountEnum.Coupon,
    offerType: OfferEnum.Money,
    offerValue: 1882.31,
    offerPriceDates: ['2015-12-30T03:41:25+03:00', '2021-04-01T11:25:36+04:00'],
    status: true,
    usageLimit: {
      maxCart: 8,
      minCart: 3,
      maxCustomer: 3,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2020-02-08T07:04:26+04:00',
    updatedAt: '2019-01-22T02:55:52+03:00',
  },
  {
    _id: '65b6685e29c9126846c5a436',
    name: 'sit',
    complement: 'magna sit duis fugiat ad nisi irure pariatur laboris ipsum',
    discountType: DiscountEnum.Coupon,
    offerType: OfferEnum.Money,
    offerValue: 2380.28,
    offerPriceDates: ['2018-09-02T09:22:27+04:00', '2015-12-31T07:37:43+03:00'],
    status: false,
    usageLimit: {
      maxCart: 7,
      minCart: 3,
      maxCustomer: 7,
    },
    everyOne: true,
    category: [],
    brand: [],
    product: [],
    createdAt: '2021-08-24T07:08:17+04:00',
    updatedAt: '2019-04-26T03:38:23+04:00',
  },
  {
    _id: '65b6685ec33b78a05a81cc3d',
    name: 'consequat',
    complement: 'enim non sit adipisicing ipsum ipsum fugiat ipsum eiusmod ea',
    discountType: DiscountEnum.Coupon,
    offerType: OfferEnum.Money,
    offerValue: 2049.35,
    offerPriceDates: ['2014-01-21T07:45:52+03:00', '2018-03-02T07:20:05+04:00'],
    status: true,
    usageLimit: {
      maxCart: 7,
      minCart: 6,
      maxCustomer: 4,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2014-09-08T11:47:15+04:00',
    updatedAt: '2019-04-17T12:55:57+04:00',
  },
  {
    _id: '65b6685e47e46d9f1efaa4a5',
    name: 'sunt',
    complement:
      'tempor minim mollit amet nisi aliqua laborum ullamco tempor duis',
    discountType: DiscountEnum.Offer,
    offerType: OfferEnum.Money,
    offerValue: 1818.85,
    offerPriceDates: ['2021-03-04T12:49:41+04:00', '2018-08-22T06:17:30+04:00'],
    status: false,
    usageLimit: {
      maxCart: 5,
      minCart: 9,
      maxCustomer: 8,
    },
    everyOne: true,
    category: [],
    brand: [],
    product: [],
    createdAt: '2023-03-24T10:20:38+04:00',
    updatedAt: '2014-08-24T08:28:05+04:00',
  },
  {
    _id: '65b6685ec86b3c60a9e4d61b',
    name: 'magna',
    complement: 'sint quis qui Lorem ullamco Lorem occaecat velit officia non',
    discountType: DiscountEnum.Offer,
    offerType: OfferEnum.Money,
    offerValue: 1726.19,
    offerPriceDates: ['2018-06-29T07:49:50+04:00', '2022-05-27T02:20:22+04:00'],
    status: true,
    usageLimit: {
      maxCart: 7,
      minCart: 3,
      maxCustomer: 6,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2021-09-17T12:55:30+04:00',
    updatedAt: '2023-01-09T06:35:07+04:00',
  },
  {
    _id: '65b6685ef081a8a0efe64a59',
    name: 'reprehenderit',
    complement:
      'cillum eiusmod velit deserunt officia sint sint non nostrud eu',
    discountType: DiscountEnum.Coupon,
    offerType: OfferEnum.Money,
    offerValue: 1058.47,
    offerPriceDates: ['2017-06-24T02:46:04+04:00', '2014-04-19T09:23:16+04:00'],
    status: false,
    usageLimit: {
      maxCart: 3,
      minCart: 6,
      maxCustomer: 9,
    },
    everyOne: true,
    category: [],
    brand: [],
    product: [],
    createdAt: '2015-06-25T05:52:38+04:00',
    updatedAt: '2020-09-09T12:37:59+04:00',
  },
  {
    _id: '65b6685e44a2dac97b71ba25',
    name: 'elit',
    complement:
      'fugiat enim anim culpa proident id dolore consectetur magna ipsum',
    discountType: DiscountEnum.Offer,
    offerType: OfferEnum.Money,
    offerValue: 3029.34,
    offerPriceDates: ['2014-12-27T04:13:42+03:00', '2023-06-16T01:48:57+04:00'],
    status: false,
    usageLimit: {
      maxCart: 6,
      minCart: 8,
      maxCustomer: 1,
    },
    everyOne: false,
    category: [],
    brand: [],
    product: [],
    createdAt: '2018-07-23T07:56:28+04:00',
    updatedAt: '2020-12-13T04:37:51+04:00',
  },
]

// ORDER
export const payments = [
  {
    _id: '65b595b39007ae94c960d7ec',
    image: 'payment/payment-1.png',
    method: 'adipisicing eiusmod irure anim',
    availableGateway: false,
    availableInstallments: true,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2014-12-01T05:52:06+03:00',
    updatedAt: '2021-08-12T02:55:03+04:00',
  },
  {
    _id: '65b595b33b17871865429bd2',
    image: 'payment/payment-2.png',
    method: 'tempor tempor incididunt ad',
    availableGateway: false,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2014-12-14T12:13:51+03:00',
    updatedAt: '2020-07-07T09:24:43+04:00',
  },
  {
    _id: '65b595b36f1d31dafec900a6',
    image: 'payment/payment-3.png',
    method: 'quis minim do culpa',
    availableGateway: true,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2021-01-14T02:54:09+04:00',
    updatedAt: '2014-06-15T03:46:12+04:00',
  },
  {
    _id: '65b595b3d071a840a2944331',
    image: 'payment/payment-4.png',
    method: 'aliquip minim ullamco consequat',
    availableGateway: true,
    availableInstallments: true,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2015-07-14T04:19:51+04:00',
    updatedAt: '2021-02-05T01:09:25+04:00',
  },
  {
    _id: '65b595b3983271bcafc3e879',
    image: 'payment/payment-5.webp',
    method: 'irure cillum fugiat mollit',
    availableGateway: true,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2018-04-12T08:21:25+04:00',
    updatedAt: '2017-09-16T02:17:49+04:00',
  },
  {
    _id: '65b595b33239507eb0bebabf',
    image: 'payment/payment-6.png',
    method: 'enim dolor mollit ipsum',
    availableGateway: true,
    availableInstallments: true,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2022-02-28T03:22:59+04:00',
    updatedAt: '2023-05-12T11:56:33+04:00',
  },
  {
    _id: '65b595b31fdaaa640878116b',
    image: 'payment/payment-7.png',
    method: 'dolore ullamco duis sunt',
    availableGateway: true,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2019-10-11T08:40:29+04:00',
    updatedAt: '2015-12-10T08:52:00+03:00',
  },
  {
    _id: '65b595b3db5e7d57ffe336b3',
    image: 'payment/payment-8.png',
    method: 'consectetur ut enim excepteur',
    availableGateway: true,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2021-04-01T09:15:44+04:00',
    updatedAt: '2015-12-22T02:00:10+03:00',
  },
  {
    _id: '65b595b3f4c730560dbf8495',
    image: 'payment/payment-9.png',
    method: 'deserunt laboris laborum quis',
    availableGateway: true,
    availableInstallments: false,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2022-12-25T10:48:49+04:00',
    updatedAt: '2019-03-29T03:58:34+04:00',
  },
  {
    _id: '65b595b3488fe9afa15e20de',
    image: 'payment/payment-10.png',
    method: 'ex est eu deserunt',
    availableGateway: false,
    availableInstallments: true,
    infoInstallments: [
      {
        installments: 1,
        fee: 0.05,
      },
      {
        installments: 2,
        fee: 0.1,
      },
      {
        installments: 3,
        fee: 0.15000000000000002,
      },
      {
        installments: 4,
        fee: 0.2,
      },
      {
        installments: 5,
        fee: 0.25,
      },
      {
        installments: 6,
        fee: 0.30000000000000004,
      },
    ],
    createdAt: '2014-06-05T09:20:09+04:00',
    updatedAt: '2017-01-26T07:26:43+03:00',
  },
]

export const orders = [
  {
    _id: '65b59832cf84dcaa527f93dc',
    customer: {
      user: {
        _id: '65b59832e6588cec98c6cbeb',
        image: 'user/user-1.webp',
      },
      name: 'Lillie Mueller',
      email: 'lilliemueller@norsul.com',
      whatsApp: '22679079324',
    },
    code: '4cf4f033-a499-40a3-b6e6-ba96d70b6a6a',
    address: {
      street: 'Olive Street',
      neighborhood: 'Lexington Avenue',
      city: 'Ivanhoe',
      state: 'Idaho',
      number: '383',
      zipCode: '47532490',
      complement: 'irure consectetur anim laborum',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 875.03,
        regularPrice: 141.42,
        fee: 9,
        timeDelivery: 4,
        quantity: 6,
        subAmount: 612.39,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 508.14,
        regularPrice: 737.04,
        fee: 6,
        timeDelivery: 2,
        quantity: 6,
        subAmount: 484.8,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 291.51,
        regularPrice: 123.82,
        fee: 3,
        timeDelivery: 1,
        quantity: 9,
        subAmount: 987.19,
        review: reviews[2],
        reviewd: true,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 906.96,
        regularPrice: 265.66,
        fee: 4,
        timeDelivery: 8,
        quantity: 5,
        subAmount: 385.17,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b598323c1f81079735b83e',
        method: payments[0].method,
        availableInstallments: true,
      },
      installments: payments[0].infoInstallments[0],
      fee: 7,
      amount: 813.34,
      cartQuantity: 1,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2018-10-08T07:14:02+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2015-06-13T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2015-06-21T12:29:26+04:00',
      },
    ],
    obs: 'sit do deserunt consequat aliquip ex dolor ipsum excepteur fugiat culpa laboris sint in aute aliqua aliqua culpa tempor aliquip mollit velit dolor qui et ut irure dolore quis quis esse est irure culpa voluptate magna aliqua officia esse cillum',
    createdAt: '2015-02-19T12:37:40+03:00',
    updatedAt: '2021-09-10T08:34:55+04:00',
  },
  {
    _id: '65b598327ad93f9f2822be97',
    customer: {
      user: {
        _id: '65b59832bb809e3ceea6b569',
        image: 'user/user-2.webp',
      },
      name: 'Hayden Salazar',
      email: 'haydensalazar@norsul.com',
      whatsApp: '84276663529',
    },
    code: '49a88f28-c02b-41a4-a622-8be160bc0d63',
    address: {
      street: 'Ocean Court',
      neighborhood: 'Jerome Street',
      city: 'Choctaw',
      state: 'Indiana',
      number: '456',
      zipCode: '83114771',
      complement: 'exercitation enim adipisicing duis',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 901.45,
        regularPrice: 663.12,
        fee: 8,
        timeDelivery: 16,
        quantity: 8,
        subAmount: 244.73,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 248.35,
        regularPrice: 784.39,
        fee: 2,
        timeDelivery: 22,
        quantity: 10,
        subAmount: 299.06,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 300.79,
        regularPrice: 480.15,
        fee: 0,
        timeDelivery: 27,
        quantity: 6,
        subAmount: 901.19,
        review: reviews[2],
        reviewd: true,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 894.12,
        regularPrice: 538.66,
        fee: 4,
        timeDelivery: 11,
        quantity: 6,
        subAmount: 488.07,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b5983270ccbe9284c5ee36',
        method: payments[1].method,
        availableInstallments: false,
      },
      installments: payments[1].infoInstallments[0],
      fee: 0,
      amount: 860.71,
      cartQuantity: 9,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2023-07-22T02:13:41+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2015-08-26T12:39:29+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2015-06-21T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Progress,
        dateTime: '2015-06-22T12:29:26+04:00',
      },
    ],
    obs: 'qui deserunt reprehenderit ex aliquip proident adipisicing do commodo ex fugiat elit cillum officia quis reprehenderit reprehenderit ipsum mollit esse minim ullamco aute veniam dolor occaecat occaecat proident sunt aliquip ipsum anim irure ut est aliqua quis incididunt pariatur voluptate',
    createdAt: '2021-12-18T11:25:37+04:00',
    updatedAt: '2016-06-17T07:52:19+04:00',
  },
  {
    _id: '65b5983243499c065e33826a',
    customer: {
      user: {
        _id: '65b59832fbfca8ecf8d69b11',
        image: 'user/user-3.webp',
      },
      name: 'Joy Vang',
      email: 'joyvang@norsul.com',
      whatsApp: '33918804456',
    },
    code: '923d4ef8-0291-461d-86e9-df765ddeb8ee',
    address: {
      street: 'Beadel Street',
      neighborhood: 'Vanderveer Street',
      city: 'Boykin',
      state: 'Puerto Rico',
      number: '584',
      zipCode: '64518676',
      complement: 'fugiat laboris occaecat do',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 690.31,
        regularPrice: 507.74,
        fee: 9,
        timeDelivery: 16,
        quantity: 10,
        subAmount: 370.1,
        review: reviews[0],
        reviewd: true,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 542.23,
        regularPrice: 685.06,
        fee: 8,
        timeDelivery: 11,
        quantity: 2,
        subAmount: 960.45,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 932.8,
        regularPrice: 791.47,
        fee: 0,
        timeDelivery: 3,
        quantity: 10,
        subAmount: 931.46,
        review: reviews[2],
        reviewd: true,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 965.4,
        regularPrice: 285.19,
        fee: 9,
        timeDelivery: 15,
        quantity: 10,
        subAmount: 944.66,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b598329fe0fa59de9fb8d8',
        method: payments[2].method,
        availableInstallments: false,
      },
      installments: payments[2].infoInstallments[0],
      fee: 5,
      amount: 596.66,
      cartQuantity: 5,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2023-06-11T05:36:49+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2019-11-23T01:27:32+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2015-06-21T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Progress,
        dateTime: '2015-06-22T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Traffic,
        dateTime: '2015-06-29T12:29:26+04:00',
      },
    ],
    obs: 'duis elit sit officia pariatur exercitation nostrud quis et elit ipsum ut elit sunt proident enim officia sint enim aliquip duis nostrud velit sit aliqua tempor cupidatat exercitation cupidatat eu labore deserunt ut ea labore anim in amet sint ad',
    createdAt: '2023-09-08T01:45:14+04:00',
    updatedAt: '2021-08-27T11:47:44+04:00',
  },
  {
    _id: '65b598329f1efdd445b3ba45',
    customer: {
      user: {
        _id: '65b5983240b3dc5656ad002a',
        image: 'user/user-4.webp',
      },
      name: 'Murphy Rosario',
      email: 'murphyrosario@norsul.com',
      whatsApp: '89315952557',
    },
    code: '5cc3ae17-2be3-4a48-9ad4-a05da2bfd996',
    address: {
      street: 'Dekoven Court',
      neighborhood: 'Clark Street',
      city: 'Murillo',
      state: 'Washington',
      number: '134',
      zipCode: '24386633',
      complement: 'irure ea consequat reprehenderit',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 698.09,
        regularPrice: 376.9,
        fee: 8,
        timeDelivery: 23,
        quantity: 7,
        subAmount: 419.09,
        review: reviews[0],
        reviewd: true,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 192.57,
        regularPrice: 352.61,
        fee: 0,
        timeDelivery: 29,
        quantity: 2,
        subAmount: 239.86,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 670.03,
        regularPrice: 873.27,
        fee: 2,
        timeDelivery: 1,
        quantity: 4,
        subAmount: 660.74,
        review: reviews[2],
        reviewd: false,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 228.57,
        regularPrice: 242.34,
        fee: 1,
        timeDelivery: 20,
        quantity: 3,
        subAmount: 703.12,
        review: reviews[3],
        reviewd: false,
      },
    ],
    payment: {
      method: {
        _id: '65b5983248855bba40dbc839',
        method: payments[3].method,
        availableInstallments: true,
      },
      installments: payments[3].infoInstallments[0],
      fee: 7,
      amount: 689.29,
      cartQuantity: 9,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2018-09-28T09:40:58+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2016-05-13T06:42:17+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2015-06-21T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Progress,
        dateTime: '2015-06-22T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Traffic,
        dateTime: '2015-06-29T12:29:26+04:00',
      },
      {
        history: OrderStatusEnum.Delivered,
        dateTime: '2015-07-01T12:29:26+04:00',
      },
    ],
    obs: 'dolore adipisicing qui nulla fugiat sunt velit dolore incididunt cillum ullamco officia elit incididunt cupidatat enim ad consequat dolore deserunt adipisicing pariatur ex officia duis do reprehenderit consequat nulla ullamco exercitation incididunt exercitation consectetur culpa in nostrud esse consectetur non',
    createdAt: '2017-06-19T11:06:53+04:00',
    updatedAt: '2014-09-23T01:14:27+04:00',
  },
  {
    _id: '65b59832fd18b96a5b39cef5',
    customer: {
      user: {
        _id: '65b59832a40ee5f4fd46fa3d',
        image: 'user/user-5.webp',
      },
      name: 'Walton Dickson',
      email: 'waltondickson@norsul.com',
      whatsApp: '81521368377',
    },
    code: '1ceadd80-b14b-442c-bc69-5924f52c5180',
    address: {
      street: 'Dunne Court',
      neighborhood: 'Visitation Place',
      city: 'Wyano',
      state: 'Arizona',
      number: '489',
      zipCode: '77581783',
      complement: 'magna commodo nostrud enim',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 912.48,
        regularPrice: 679.93,
        fee: 3,
        timeDelivery: 12,
        quantity: 7,
        subAmount: 922.35,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 638.05,
        regularPrice: 495.75,
        fee: 4,
        timeDelivery: 5,
        quantity: 8,
        subAmount: 927.4,
        review: reviews[1],
        reviewd: false,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 372.74,
        regularPrice: 354.54,
        fee: 3,
        timeDelivery: 10,
        quantity: 6,
        subAmount: 568.18,
        review: reviews[2],
        reviewd: false,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 370.4,
        regularPrice: 828.23,
        fee: 3,
        timeDelivery: 22,
        quantity: 1,
        subAmount: 283.82,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b598329224778e4104e058',
        method: payments[4].method,
        availableInstallments: true,
      },
      installments: payments[4].infoInstallments[0],
      fee: 5,
      amount: 124.53,
      cartQuantity: 8,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2023-04-03T08:31:38+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2022-05-27T12:34:32+04:00',
      },
      {
        history: OrderStatusEnum.Canceled,
        dateTime: '2022-05-27T12:34:32+04:00',
      },
    ],
    obs: 'labore do amet laborum et sunt ut deserunt dolor minim exercitation occaecat in culpa quis fugiat officia elit et ex esse irure duis veniam minim Lorem sunt ad ipsum culpa pariatur mollit officia velit minim fugiat adipisicing ad deserunt aliqua',
    createdAt: '2016-09-22T12:25:46+04:00',
    updatedAt: '2016-04-05T08:38:57+04:00',
  },
  {
    _id: '65b59832e3f3356cab3bad80',
    customer: {
      user: {
        _id: '65b598326f1f4424a483fffb',
        image: 'user/user-6.webp',
      },
      name: 'Parrish Spears',
      email: 'parrishspears@norsul.com',
      whatsApp: '26724069765',
    },
    code: 'cc8610c4-041f-4b59-84bc-0178142ab908',
    address: {
      street: 'Withers Street',
      neighborhood: 'Kent Avenue',
      city: 'Cumberland',
      state: 'Missouri',
      number: '935',
      zipCode: '51707375',
      complement: 'fugiat enim qui voluptate',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 662.93,
        regularPrice: 573.76,
        fee: 0,
        timeDelivery: 1,
        quantity: 9,
        subAmount: 363.66,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 748.95,
        regularPrice: 155.86,
        fee: 3,
        timeDelivery: 13,
        quantity: 8,
        subAmount: 569.12,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 782.28,
        regularPrice: 273.06,
        fee: 5,
        timeDelivery: 22,
        quantity: 2,
        subAmount: 112.18,
        review: reviews[2],
        reviewd: true,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 604.73,
        regularPrice: 360.88,
        fee: 1,
        timeDelivery: 26,
        quantity: 10,
        subAmount: 228.77,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b59832940d5c5dd9d1d5ed',
        method: payments[5].method,
        availableInstallments: false,
      },
      installments: payments[5].infoInstallments[0],
      fee: 9,
      amount: 445.71,
      cartQuantity: 6,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2019-04-16T05:42:05+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2021-06-24T07:11:14+04:00',
      },
    ],
    obs: 'irure voluptate fugiat enim eiusmod consectetur aliqua veniam velit quis cillum et nisi ut duis non magna ad nisi cillum officia irure nostrud commodo ut laboris deserunt nulla est proident laborum irure eu ut dolore ut ea ex sit culpa',
    createdAt: '2017-02-23T11:41:51+04:00',
    updatedAt: '2023-03-29T10:52:04+04:00',
  },
  {
    _id: '65b59832dac6867a2ba51337',
    customer: {
      user: {
        _id: '65b59832ce8596e17efdf56c',
        image: 'user/user-7.webp',
      },
      name: 'Luisa Duncan',
      email: 'luisaduncan@norsul.com',
      whatsApp: '13927300527',
    },
    code: '1ffab825-7210-4731-940e-856ac0d100b8',
    address: {
      street: 'Lyme Avenue',
      neighborhood: 'Dahl Court',
      city: 'Kohatk',
      state: 'Utah',
      number: '898',
      zipCode: '76600912',
      complement: 'consequat ut nisi non',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 751.55,
        regularPrice: 639.74,
        fee: 0,
        timeDelivery: 18,
        quantity: 4,
        subAmount: 329,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 534.05,
        regularPrice: 362.73,
        fee: 0,
        timeDelivery: 28,
        quantity: 1,
        subAmount: 741.18,
        review: reviews[1],
        reviewd: false,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 174.57,
        regularPrice: 351.78,
        fee: 8,
        timeDelivery: 4,
        quantity: 9,
        subAmount: 710.87,
        review: reviews[2],
        reviewd: true,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 813.61,
        regularPrice: 835.32,
        fee: 4,
        timeDelivery: 27,
        quantity: 7,
        subAmount: 355.26,
        review: reviews[3],
        reviewd: false,
      },
    ],
    payment: {
      method: {
        _id: '65b59832989c834899ef9fb3',
        method: payments[6].method,
        availableInstallments: true,
      },
      installments: payments[6].infoInstallments[0],
      fee: 5,
      amount: 415.56,
      cartQuantity: 5,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2015-05-18T07:16:53+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2023-10-22T09:42:08+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2022-05-27T12:34:32+04:00',
      },
    ],
    obs: 'dolore minim Lorem voluptate Lorem Lorem sint velit tempor officia nulla irure dolor deserunt fugiat qui sit magna est quis sint est consequat duis dolor consequat magna nisi fugiat laborum nulla nisi excepteur in proident adipisicing anim elit eiusmod aliqua',
    createdAt: '2014-01-06T03:15:16+03:00',
    updatedAt: '2021-02-10T02:39:50+04:00',
  },
  {
    _id: '65b5983263a55393aa81fb99',
    customer: {
      user: {
        _id: '65b59832fcc7ccffbe7fdc29',
        image: 'user/user-8.webp',
      },
      name: 'Booker Kirk',
      email: 'bookerkirk@norsul.com',
      whatsApp: '20386322642',
    },
    code: 'b498cf3c-55a2-4526-851c-2827bd70b956',
    address: {
      street: 'Hicks Street',
      neighborhood: 'Grant Avenue',
      city: 'Rosine',
      state: 'Vermont',
      number: '528',
      zipCode: '54539106',
      complement: 'quis minim occaecat aute',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 998.95,
        regularPrice: 783.26,
        fee: 10,
        timeDelivery: 23,
        quantity: 8,
        subAmount: 591.57,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 538.1,
        regularPrice: 508.79,
        fee: 8,
        timeDelivery: 21,
        quantity: 3,
        subAmount: 148.28,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 267.08,
        regularPrice: 570.13,
        fee: 2,
        timeDelivery: 3,
        quantity: 10,
        subAmount: 641.19,
        review: reviews[2],
        reviewd: false,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 879.24,
        regularPrice: 893.51,
        fee: 1,
        timeDelivery: 24,
        quantity: 10,
        subAmount: 198.19,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b598329b6990b08a35065b',
        method: payments[7].method,
        availableInstallments: false,
      },
      installments: payments[7].infoInstallments[0],
      fee: 1,
      amount: 917.37,
      cartQuantity: 8,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2014-10-14T07:45:16+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2016-12-16T04:43:47+03:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2022-05-27T12:34:32+04:00',
      },
    ],
    obs: 'adipisicing ipsum exercitation sit est irure esse do excepteur officia ipsum fugiat in consequat qui duis aliquip labore cillum occaecat proident veniam ea reprehenderit ipsum sint sint ullamco qui cupidatat velit ea sit quis Lorem et incididunt anim id adipisicing',
    createdAt: '2014-04-10T02:31:54+04:00',
    updatedAt: '2020-09-01T03:29:55+04:00',
  },
  {
    _id: '65b598329cba51b08129d344',
    customer: {
      user: {
        _id: '65b5983281595e791df1dea0',
        image: 'user/user-9.webp',
      },
      name: 'Alexander Acosta',
      email: 'alexanderacosta@norsul.com',
      whatsApp: '18468848648',
    },
    code: '6d28c0aa-1aec-4581-8bc3-4491f9e67a9a',
    address: {
      street: 'Vermont Court',
      neighborhood: 'Vanderbilt Street',
      city: 'Blanford',
      state: 'Kentucky',
      number: '239',
      zipCode: '62281007',
      complement: 'voluptate aliquip sunt eu',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 828.35,
        regularPrice: 293.7,
        fee: 6,
        timeDelivery: 22,
        quantity: 3,
        subAmount: 398.04,
        review: reviews[0],
        reviewd: false,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 123.25,
        regularPrice: 375.56,
        fee: 3,
        timeDelivery: 11,
        quantity: 1,
        subAmount: 250.42,
        review: reviews[1],
        reviewd: true,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 281.46,
        regularPrice: 817.1,
        fee: 5,
        timeDelivery: 7,
        quantity: 3,
        subAmount: 757.54,
        review: reviews[2],
        reviewd: false,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 936.84,
        regularPrice: 376.05,
        fee: 7,
        timeDelivery: 5,
        quantity: 5,
        subAmount: 847.93,
        review: reviews[3],
        reviewd: false,
      },
    ],
    payment: {
      method: {
        _id: '65b59832dd94191108012504',
        method: payments[8].method,
        availableInstallments: false,
      },
      installments: payments[8].infoInstallments[0],
      fee: 9,
      amount: 256.24,
      cartQuantity: 4,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2016-10-02T10:17:52+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2015-03-20T07:39:21+04:00',
      },
    ],
    obs: 'do amet non excepteur culpa deserunt eu aute ullamco Lorem irure duis sit amet commodo laboris pariatur deserunt nulla cillum ad deserunt qui incididunt fugiat qui qui dolor labore elit incididunt voluptate sint reprehenderit culpa aute ullamco quis esse Lorem',
    createdAt: '2023-10-27T06:38:46+04:00',
    updatedAt: '2015-04-19T08:03:51+04:00',
  },
  {
    _id: '65b598325a52acef7d45cef4',
    customer: {
      user: {
        _id: '65b59832e6502bcc78036561',
        image: 'user/user-10.webp',
      },
      name: 'York Tate',
      email: 'yorktate@norsul.com',
      whatsApp: '22883408514',
    },
    code: '20040013-16b0-4aac-8cee-d1ac57f69303',
    address: {
      street: 'Ovington Court',
      neighborhood: 'Bethel Loop',
      city: 'Blackgum',
      state: 'Maine',
      number: 36,
      zipCode: '88909000',
      complement: 'fugiat reprehenderit sunt magna',
    },
    cart: [
      {
        product: products[0],
        color: colors[0],
        background: colors[0].color,
        colorName: colors[0].name,
        name: products[0].name,
        cover: products[0].productData.media.cover,
        price: 106.5,
        regularPrice: 193.62,
        fee: 2,
        timeDelivery: 10,
        quantity: 7,
        subAmount: 506.86,
        review: reviews[0],
        reviewd: true,
      },
      {
        product: products[1],
        color: colors[1],
        background: colors[1].color,
        colorName: colors[1].name,
        name: products[1].name,
        cover: products[1].productData.media.cover,
        price: 831.53,
        regularPrice: 708.37,
        fee: 7,
        timeDelivery: 22,
        quantity: 5,
        subAmount: 508.96,
        review: reviews[1],
        reviewd: false,
      },
      {
        product: products[2],
        color: colors[2],
        background: colors[2].color,
        colorName: colors[2].name,
        name: products[2].name,
        cover: products[2].productData.media.cover,
        price: 518.59,
        regularPrice: 586.92,
        fee: 5,
        timeDelivery: 5,
        quantity: 7,
        subAmount: 558.32,
        review: reviews[2],
        reviewd: false,
      },
      {
        product: products[3],
        color: colors[3],
        background: colors[3].color,
        colorName: colors[3].name,
        name: products[3].name,
        cover: products[3].productData.media.cover,
        price: 131.25,
        regularPrice: 136.4,
        fee: 6,
        timeDelivery: 18,
        quantity: 4,
        subAmount: 488.87,
        review: reviews[3],
        reviewd: true,
      },
    ],
    payment: {
      method: {
        _id: '65b598328b586b54dc12d7e6',
        method: payments[9].method,
        availableInstallments: false,
      },
      installments: payments[9].infoInstallments[0],
      fee: 7,
      amount: 377.05,
      cartQuantity: 3,
    },
    status: [
      {
        history: OrderStatusEnum.Created,
        dateTime: '2016-08-02T04:24:53+04:00',
      },
      {
        history: OrderStatusEnum.Pending,
        dateTime: '2018-06-16T02:57:18+04:00',
      },
      {
        history: OrderStatusEnum.Paid,
        dateTime: '2022-05-27T12:34:32+04:00',
      },
    ],
    obs: 'irure voluptate anim fugiat non labore et nisi ut ipsum eiusmod esse irure qui Lorem ut elit irure qui id officia exercitation occaecat eu laborum ipsum consectetur id incididunt nulla elit eu consectetur occaecat ea magna laboris irure magna duis',
    createdAt: '2024-01-13T02:28:55+04:00',
    updatedAt: '2023-02-02T03:11:29+04:00',
  },
]

export const cart = [
  {
    product: products[0]._id,
    color: colors[0]._id,
    cover: products[0].productData.media.cover,
    name: products[0].name,
    background: colors[0].color,
    colorName: colors[0].name,
    stock: products[0].productData.inventory.info[0].stock,
    price: products[0].productData.inventory.info[0].offer.offerPrice,
    regularPrice: products[0].productData.inventory.info[0].price,
    timeDelivery: products[0].productData.shippingInfo.timeDelivery,
    quantity: 6,
    fee: products[0].productData.shippingInfo.fee,
  },
  {
    product: products[1]._id,
    color: colors[1]._id,
    cover: products[1].productData.media.cover,
    name: products[1].name,
    background: colors[1].color,
    colorName: colors[1].name,
    stock: products[1].productData.inventory.info[0].stock,
    price: products[1].productData.inventory.info[0].offer.offerPrice,
    regularPrice: products[1].productData.inventory.info[0].price,
    timeDelivery: products[1].productData.shippingInfo.timeDelivery,
    quantity: 6,
    fee: products[1].productData.shippingInfo.fee,
  },
  {
    product: products[2]._id,
    color: colors[2]._id,
    cover: products[2].productData.media.cover,
    name: products[2].name,
    background: colors[2].color,
    colorName: colors[2].name,
    stock: products[2].productData.inventory.info[0].stock,
    price: products[2].productData.inventory.info[0].offer.offerPrice,
    regularPrice: products[2].productData.inventory.info[0].price,
    timeDelivery: products[2].productData.shippingInfo.timeDelivery,
    quantity: 6,
    fee: products[2].productData.shippingInfo.fee,
  },
  {
    product: products[3]._id,
    color: colors[3]._id,
    cover: products[3].productData.media.cover,
    name: products[3].name,
    background: colors[3].color,
    colorName: colors[3].name,
    stock: products[3].productData.inventory.info[0].stock,
    price: products[3].productData.inventory.info[0].offer.offerPrice,
    regularPrice: products[3].productData.inventory.info[0].price,
    timeDelivery: products[3].productData.shippingInfo.timeDelivery,
    quantity: 8,
    fee: products[3].productData.shippingInfo.fee,
  },
  {
    product: products[4]._id,
    color: colors[4]._id,
    cover: products[4].productData.media.cover,
    name: products[4].name,
    background: colors[4].color,
    colorName: colors[4].name,
    stock: products[4].productData.inventory.info[0].stock,
    price: products[4].productData.inventory.info[0].offer.offerPrice,
    regularPrice: products[4].productData.inventory.info[0].price,
    timeDelivery: products[4].productData.shippingInfo.timeDelivery,
    quantity: 6,
    fee: products[4].productData.shippingInfo.fee,
  },
]

// CHAT
export const chats = [
  {
    _id: '65b6b51b4dd9c3445fa168b6',
    userId: '65b6b51b4301961aa7caf7ff',
    combineId: '65b6b51bd89766a12fc0be2b65b6b51b3f5b1b9930ab5e7e',
    latest: {
      senderId: '65b6b51b71a4a5377e327743',
      name: 'Estrada Hansen',
      image: 'user/user-1.webp',
      message:
        'veniam do incididunt nostrud adipisicing consectetur quis aute ex deserunt fugiat culpa deserunt minim qui consequat deserunt aute et Lorem',
      viewd: true,
      date: '2014-06-23T09:47:40+04:00',
    },
    createdAt: '2023-04-25T08:18:48+04:00',
    updatedAt: '2015-01-02T05:03:49+03:00',
  },
  {
    _id: '65b6b51bfbab3b82d230d6f7',
    userId: '65b6b51ba072a32ad8a1c334',
    combineId: '65b6b51b09b3c8400b5bb0d565b6b51b624b345b8da0967f',
    status: true,
    latest: {
      senderId: '65b6b51b6af28737389ada2b',
      name: 'Anastasia Hawkins',
      image: 'user/user-2.webp',
      message:
        'eiusmod incididunt minim ad Lorem tempor id elit veniam consectetur consequat ad eu nostrud laboris aliquip fugiat consectetur irure deserunt',
      viewd: false,
      date: '2024-01-21T11:56:41+04:00',
    },
    createdAt: '2022-07-25T10:54:07+04:00',
    updatedAt: '2020-06-24T02:32:35+04:00',
  },
  {
    _id: '65b6b51bb4d7725673c36919',
    userId: '65b6b51b00fdb8324554286e',
    combineId: '65b6b51b7f9ca6e00bf2536a65b6b51b33c793d2e726641b',
    status: true,
    latest: {
      senderId: '65b6b51b2a95be2e1fca08f3',
      name: 'Essie Barnes',
      image: 'user/user-3.webp',
      message:
        'et culpa magna ipsum amet incididunt laboris consectetur pariatur nisi aliqua nulla est minim est mollit elit Lorem nisi ea',
      viewd: false,
      date: '2020-08-06T09:29:29+04:00',
    },
    createdAt: '2017-10-06T12:38:30+04:00',
    updatedAt: '2018-02-08T05:12:22+03:00',
  },
  {
    _id: '65b6b51b4ae713a8bac1a25c',
    userId: '65b6b51b40b2c83a6309501a',
    combineId: '65b6b51b4775ce15eb177afc65b6b51bd9b9efbd484cf8a8',
    status: true,
    latest: {
      senderId: '65b6b51bd5aa01f6fda69d06',
      name: 'Harper Sears',
      image: 'user/user-4.webp',
      message:
        'deserunt sit anim minim commodo irure veniam consequat nisi duis duis Lorem voluptate eiusmod in eu duis ipsum proident ad',
      viewd: false,
      date: '2022-05-17T03:41:21+04:00',
    },
    createdAt: '2017-02-06T02:02:59+03:00',
    updatedAt: '2020-07-08T12:37:47+04:00',
  },
  {
    _id: '65b6b51be9a81d13c410a846',
    userId: '65b6b51b99bb6659e37fddae',
    combineId: '65b6b51b7814df5356b61b8c65b6b51b43c3c6705039071b',
    status: false,
    latest: {
      senderId: '65b6b51b8d6e31923f71ec85',
      name: 'Drake Chase',
      image: 'user/user-5.webp',
      message:
        'fugiat do deserunt et amet cillum elit velit excepteur culpa exercitation pariatur Lorem nulla veniam reprehenderit incididunt ipsum tempor laboris',
      viewd: false,
      date: '2015-03-14T02:49:09+04:00',
    },
    createdAt: '2019-02-08T11:58:27+03:00',
    updatedAt: '2021-05-22T10:04:59+04:00',
  },
  {
    _id: '65b6b51b2c84256229b9c937',
    userId: '65b6b51bc6068f2f58a014e1',
    combineId: '65b6b51b8084c830d4b8f8ba65b6b51bc60eb00b0a35a422',
    status: false,
    latest: {
      senderId: '65b6b51b38ae92e530601611',
      name: 'Browning Dale',
      image: 'user/user-6.webp',
      message:
        'elit et eiusmod voluptate exercitation eiusmod commodo consequat laborum occaecat laborum proident id enim incididunt ex officia Lorem sunt proident',
      viewd: false,
      date: '2020-07-16T02:44:21+04:00',
    },
    createdAt: '2021-03-05T03:25:32+04:00',
    updatedAt: '2014-10-10T02:26:28+04:00',
  },
  {
    _id: '65b6b51b7f52ef8065bec31e',
    userId: '65b6b51be5ae9159d19e0b43',
    combineId: '65b6b51b561bd436ae49a47865b6b51b78deb288649c0a4e',
    status: false,
    latest: {
      senderId: '65b6b51b1252257cfce26c68',
      name: 'Margaret Lambert',
      image: 'user/user-7.webp',
      message:
        'occaecat esse minim veniam labore dolore non cupidatat eiusmod aliqua ad duis duis non reprehenderit incididunt est velit anim anim',
      viewd: false,
      date: '2019-05-12T11:56:36+04:00',
    },
    createdAt: '2017-11-16T02:52:13+03:00',
    updatedAt: '2019-03-25T12:19:07+04:00',
  },
  {
    _id: '65b6b51b4c0a41215ea3d52c',
    userId: '65b6b51b59f147e88411862c',
    combineId: '65b6b51b4f12f8bfd4dc520065b6b51b2d83c69d2933d2bd',
    status: false,
    latest: {
      senderId: '65b6b51bdd2fcb43adade8d7',
      name: 'Sweeney Erickson',
      image: 'user/user-8.webp',
      message:
        'fugiat ex commodo sint pariatur officia sunt cupidatat aliqua ex incididunt ut non sint cupidatat ea incididunt laborum est ipsum',
      viewd: false,
      date: '2018-04-13T01:02:20+04:00',
    },
    createdAt: '2018-02-09T02:14:16+03:00',
    updatedAt: '2022-11-27T06:08:58+04:00',
  },
  {
    _id: '65b6b51b40eb0f566b6b0027',
    userId: '65b6b51b86ac1052d185bd3e',
    combineId: '65b6b51bdb8eb003bbd4cc6965b6b51be5b27c4105989c36',
    status: true,
    latest: {
      senderId: '65b6b51b9d77bd79ded31ba7',
      name: 'Miller Stout',
      image: 'user/user-9.webp',
      message:
        'reprehenderit non nostrud irure laboris eu ex excepteur culpa et aute ea dolor in labore do veniam irure id ea',
      viewd: true,
      date: '2019-05-19T11:50:49+04:00',
    },
    createdAt: '2017-05-22T04:13:43+04:00',
    updatedAt: '2014-02-27T10:55:25+04:00',
  },
  {
    _id: '65b6b51bfeb2b3a586b8f055',
    userId: '65b6b51b4ec7645a32a1cb26',
    combineId: '65b6b51ba2bd66e8ab49f85365b6b51b28ea6425f31f3383',
    status: false,
    latest: {
      senderId: '65b6b51b1bf26bdf3ea6c826',
      name: 'Monica Mccoy',
      image: 'user/user-10.webp',
      message:
        'in nostrud laboris velit sit anim voluptate laborum proident nostrud adipisicing nostrud esse amet laboris et irure nulla occaecat nisi',
      viewd: true,
      date: '2018-10-07T05:21:07+04:00',
    },
    createdAt: '2015-12-30T07:59:16+03:00',
    updatedAt: '2022-05-05T01:06:49+04:00',
  },
]

export const messages = [
  {
    _id: '65b6ae3c03983cc876ef3d3d',
    combineId: '65b6ae3c4a8552e388e208df65b6ae3cc4b49c1322311c03',
    messages: [
      {
        senderId: '65b6ae3ca6c555e6c1463800',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'elit Lorem do duis sit aliqua mollit in fugiat amet ipsum officia duis consectetur sunt officia ut occaecat labore exercitation ullamco voluptate incididunt officia dolor laborum cupidatat voluptate mollit tempor',
        file: 'product/product-1-cover.png',
        date: '2016-06-20T04:39:46+04:00',
      },
      {
        senderId: '65b6ae3cd591c9651baeac51',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'nisi voluptate deserunt nostrud culpa ea aliquip id do dolor tempor laboris irure labore proident enim reprehenderit ad et officia veniam ad excepteur magna voluptate ut nisi fugiat officia dolore',
        file: 'product/product-2-cover.png',
        date: '2022-11-20T05:19:12+04:00',
      },
      {
        senderId: '65b6ae3cd87683f490d3c279',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'qui laboris excepteur amet nostrud eiusmod ex eu esse mollit minim commodo enim dolore fugiat minim proident esse qui non mollit do proident cupidatat ea ut voluptate mollit do est',
        file: 'product/product-3-cover.png',
        date: '2020-06-26T11:18:23+04:00',
      },
      {
        senderId: '65b6ae3cf0d15839bea2ce20',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'proident nostrud officia exercitation consectetur duis elit adipisicing consectetur amet ipsum culpa id tempor ad minim exercitation dolore commodo culpa magna quis excepteur sunt magna aliquip voluptate incididunt deserunt nisi',
        file: 'product/product-4-cover.png',
        date: '2019-11-15T11:15:56+04:00',
      },
      {
        senderId: '65b6ae3ce909f80e2a99cb73',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'eiusmod commodo ut reprehenderit voluptate nisi fugiat irure reprehenderit incididunt dolor minim est laboris dolor ullamco elit nisi laborum culpa cillum velit labore labore ullamco eu ex eu velit irure',
        file: 'product/product-5-cover.png',
        date: '2015-12-20T01:06:17+03:00',
      },
      {
        senderId: '65b6ae3cc972bc477b9a63ca',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'aliquip exercitation ex eu nostrud voluptate adipisicing nulla fugiat tempor eu aute occaecat tempor nulla occaecat dolor et anim quis dolor do mollit incididunt nisi incididunt nisi et nisi ipsum',
        file: 'product/product-6-cover.png',
        date: '2016-05-12T11:14:31+04:00',
      },
      {
        senderId: '65b6ae3c9f98bb0d5aa98f21',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'anim do laborum commodo eu id cupidatat sit ex excepteur eu pariatur elit minim est tempor ad laborum nisi officia do aliqua ea laborum culpa sit irure ex Lorem esse',
        file: 'product/product-7-cover.png',
        date: '2021-12-11T09:55:07+04:00',
      },
      {
        senderId: '65b6ae3cd4dfd7522ec51422',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'deserunt irure aute eu ad dolor irure nostrud anim id in non elit voluptate officia consequat fugiat eu voluptate Lorem in sit aliqua ipsum nulla aliqua velit aliquip aliquip eiusmod',
        file: 'product/product-8-cover.png',
        date: '2015-07-03T03:38:47+04:00',
      },
      {
        senderId: '65b6ae3cfb4b7991e313dc40',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'aliquip sint voluptate ex eu est ut pariatur ullamco veniam non incididunt dolor cupidatat velit reprehenderit in excepteur et irure non exercitation officia ipsum nulla laboris occaecat esse ea id',
        file: 'product/product-9-cover.png',
        date: '2015-12-26T01:40:09+03:00',
      },
      {
        senderId: '65b6ae3c48ddf2c437b3bacc',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'sit sunt ut sint amet consectetur nostrud deserunt eiusmod et eu do dolore aliqua et Lorem Lorem non enim culpa elit magna quis ex dolor occaecat dolore esse consequat anim',
        file: 'product/product-10-cover.png',
        date: '2022-06-18T01:56:40+04:00',
      },
      {
        senderId: '65b6ae3ca4ec853df9b3c51d',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'fugiat velit commodo laborum dolor anim officia mollit enim non sit ullamco veniam laborum sit voluptate id sint Lorem culpa nisi fugiat consequat dolore ullamco fugiat culpa fugiat nisi reprehenderit',
        file: 'product/product-11-cover.png',
        date: '2020-10-13T08:05:16+04:00',
      },
      {
        senderId: '65b6ae3c41cc76210099e2a3',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'et sint aute sint et exercitation nisi veniam eu mollit ut sint nostrud consectetur sit occaecat ut excepteur magna laborum magna veniam duis magna est deserunt pariatur commodo aute ut',
        file: 'product/product-12-cover.png',
        date: '2020-10-03T06:33:57+04:00',
      },
      {
        senderId: '65b6ae3cc2a0fb7fb802da2c',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'magna aliqua voluptate aliqua voluptate est laborum quis nostrud ullamco aute ullamco ut proident veniam ullamco reprehenderit enim eu cillum ipsum sunt consectetur exercitation ad adipisicing adipisicing reprehenderit tempor quis',
        file: 'product/product-13-cover.png',
        date: '2014-12-14T09:20:55+03:00',
      },
      {
        senderId: '65b6ae3cf400dba4a3f207ed',
        name: 'Estrada Hansen',
        image: 'user/user-1.webp',
        text: 'minim eiusmod elit laborum ipsum labore laborum minim dolore consectetur tempor veniam sit labore nostrud mollit exercitation elit exercitation deserunt et labore dolore ut adipisicing est laborum culpa cupidatat do',
        file: 'product/product-14-cover.png',
        date: '2022-02-04T01:45:04+04:00',
      },
      {
        senderId: '65b6ae3c655ca173cbe42b07',
        name: 'Anastasia Hawkins',
        image: 'user/user-2.webp',
        text: 'ut et in fugiat Lorem non pariatur nostrud officia ex exercitation occaecat sunt enim aute magna velit sint est sint elit in quis sunt nisi anim et veniam reprehenderit incididunt',
        file: 'product/product-15-cover.png',
        date: '2022-05-25T05:34:14+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c1cf3d2021d981c96',
    combineId: '65b6ae3c945a4bf31e261d8065b6ae3c3b4a29793164573a',
    messages: [
      {
        senderId: '65b6ae3c392e0abbb4a7c1ac',
        text: 'veniam proident officia consectetur aliqua aute dolor consequat fugiat ex nostrud nostrud incididunt minim anim ullamco officia anim reprehenderit non minim ullamco laboris et id Lorem aliqua mollit ullamco est',
        file: 'product/product-1-cover.png',
        date: '2020-10-07T04:13:50+04:00',
      },
      {
        senderId: '65b6ae3ce30f586e72bb0d77',
        text: 'commodo ex dolore non eiusmod culpa dolor fugiat esse duis sint ea eiusmod reprehenderit cillum occaecat nostrud cupidatat mollit incididunt nisi elit ex eiusmod velit est anim cillum consectetur eiusmod',
        file: 'product/product-2-cover.png',
        date: '2018-02-15T01:03:55+03:00',
      },
      {
        senderId: '65b6ae3ca1d71317a1d8e48d',
        text: 'aliquip et Lorem deserunt irure est consectetur consectetur id mollit cupidatat irure pariatur culpa labore irure et officia dolore occaecat sunt nulla aute qui velit in do in consequat adipisicing',
        file: 'product/product-3-cover.png',
        date: '2014-07-21T10:20:31+04:00',
      },
      {
        senderId: '65b6ae3c671ccdf5e2e28339',
        text: 'reprehenderit in do pariatur et ullamco elit labore cillum ullamco duis pariatur magna commodo anim nulla eiusmod officia sit anim dolore Lorem mollit officia nulla ut ipsum pariatur adipisicing consectetur',
        file: 'product/product-4-cover.png',
        date: '2016-08-04T06:29:56+04:00',
      },
      {
        senderId: '65b6ae3cd4ab45766fff871e',
        text: 'laboris anim fugiat sint velit aliquip elit dolore aute ullamco labore sunt quis aliqua Lorem elit commodo amet consectetur dolore pariatur in est fugiat aliquip ipsum et laborum consequat dolore',
        file: 'product/product-5-cover.png',
        date: '2015-05-04T01:52:32+04:00',
      },
      {
        senderId: '65b6ae3c58f6ddd6fa1927cc',
        text: 'culpa minim culpa exercitation duis amet nisi ad dolor fugiat dolore aliqua nostrud nostrud duis qui deserunt enim ad mollit incididunt magna exercitation reprehenderit veniam ad tempor eiusmod proident fugiat',
        file: 'product/product-6-cover.png',
        date: '2022-12-21T07:53:27+04:00',
      },
      {
        senderId: '65b6ae3ccf54405bb5fdf70a',
        text: 'adipisicing cupidatat occaecat consectetur nulla elit ut deserunt Lorem cupidatat deserunt ullamco consectetur esse commodo magna fugiat mollit irure fugiat adipisicing ex consectetur magna commodo eiusmod aliquip reprehenderit ut do',
        file: 'product/product-7-cover.png',
        date: '2023-08-31T09:17:11+04:00',
      },
      {
        senderId: '65b6ae3cfaf22cd6e4b5c769',
        text: 'minim ex do veniam veniam sunt reprehenderit cillum esse non do aliquip reprehenderit mollit nostrud mollit pariatur dolor veniam commodo dolor esse consequat culpa sint ad enim ea laborum incididunt',
        file: 'product/product-8-cover.png',
        date: '2019-03-03T06:54:53+04:00',
      },
      {
        senderId: '65b6ae3cb88b608df8128b78',
        text: 'enim duis commodo irure laboris id duis ex labore qui duis laboris minim consectetur duis reprehenderit sit voluptate irure ipsum dolore nostrud enim tempor nisi qui ad duis eu consequat',
        file: 'product/product-9-cover.png',
        date: '2022-12-16T07:04:06+04:00',
      },
      {
        senderId: '65b6ae3cabc0b8e02bc38ef9',
        text: 'occaecat culpa proident ad est adipisicing pariatur in velit quis mollit sunt ea mollit velit laborum ullamco cillum proident cupidatat enim veniam magna do deserunt Lorem excepteur ea occaecat nostrud',
        file: 'product/product-10-cover.png',
        date: '2019-04-15T02:40:08+04:00',
      },
      {
        senderId: '65b6ae3c297ab6990ea4dd93',
        text: 'nostrud ex labore voluptate ad voluptate in esse tempor consequat do enim in ea voluptate laborum non culpa dolor ut do laborum sunt adipisicing eu et officia incididunt eu ad',
        file: 'product/product-11-cover.png',
        date: '2015-01-02T07:06:59+03:00',
      },
      {
        senderId: '65b6ae3c5c8e9304b05f5122',
        text: 'mollit incididunt occaecat deserunt ut reprehenderit duis deserunt nulla aliqua ullamco nisi amet eu proident est duis laborum cupidatat eiusmod tempor elit aute quis mollit officia aliquip proident magna duis',
        file: 'product/product-12-cover.png',
        date: '2016-05-19T12:47:07+04:00',
      },
      {
        senderId: '65b6ae3c70d95a06f91e943e',
        text: 'voluptate reprehenderit exercitation irure labore aliqua ex eu dolor occaecat laboris duis enim consectetur consectetur nisi culpa sunt labore nisi fugiat proident fugiat fugiat consectetur cillum proident qui irure commodo',
        file: 'product/product-13-cover.png',
        date: '2014-06-05T01:25:16+04:00',
      },
      {
        senderId: '65b6ae3c1074998fd7e68e94',
        text: 'veniam veniam officia id exercitation ex irure dolore magna ut culpa qui dolore elit eu officia cupidatat quis irure laboris incididunt reprehenderit esse officia labore est sit ad proident exercitation',
        file: 'product/product-14-cover.png',
        date: '2022-06-08T05:59:27+04:00',
      },
      {
        senderId: '65b6ae3c9ecea39b591162b6',
        text: 'voluptate sunt incididunt consectetur fugiat adipisicing deserunt irure incididunt enim amet reprehenderit minim sint esse et sit consectetur enim anim Lorem adipisicing aliqua adipisicing laboris eiusmod ad quis id sunt',
        file: 'product/product-15-cover.png',
        date: '2015-10-11T07:48:56+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c60aa314a790e74c5',
    combineId: '65b6ae3c0e81f8150a53c35a65b6ae3ccb26b9d9c091b5a2',
    messages: [
      {
        senderId: '65b6ae3c7027e3df804b9e12',
        text: 'nulla est proident nulla ex dolor minim in minim commodo esse Lorem voluptate culpa anim sunt nostrud qui sint officia sit nulla cupidatat ea officia anim magna reprehenderit sunt consectetur',
        file: 'product/product-1-cover.png',
        date: '2020-09-08T11:52:44+04:00',
      },
      {
        senderId: '65b6ae3c60d506f1bfdba2dd',
        text: 'ea enim deserunt ea veniam culpa ipsum non quis cillum aliqua ea nostrud quis elit dolor id occaecat laborum ullamco nisi cillum esse adipisicing occaecat eiusmod incididunt ex nostrud duis',
        file: 'product/product-2-cover.png',
        date: '2022-04-23T03:17:43+04:00',
      },
      {
        senderId: '65b6ae3cc819c0416931a22e',
        text: 'aliquip aute ad aute cupidatat enim pariatur aute nulla duis quis ea ad ipsum qui tempor excepteur elit cupidatat sunt duis do pariatur eu in ex irure nostrud consectetur cupidatat',
        file: 'product/product-3-cover.png',
        date: '2020-08-28T08:02:17+04:00',
      },
      {
        senderId: '65b6ae3ce91ee3aba05f9a63',
        text: 'ad consectetur Lorem velit labore Lorem qui nulla amet enim aliquip in deserunt irure do in pariatur culpa sit nisi aliquip cillum incididunt minim sit et occaecat elit ut occaecat',
        file: 'product/product-4-cover.png',
        date: '2022-06-21T05:34:57+04:00',
      },
      {
        senderId: '65b6ae3c18f91fffb441c24b',
        text: 'veniam ipsum reprehenderit ad Lorem aute fugiat dolor quis labore consequat veniam velit non exercitation ex tempor adipisicing sint in aliqua qui ipsum id ipsum et enim occaecat elit est',
        file: 'product/product-5-cover.png',
        date: '2019-02-03T08:16:49+03:00',
      },
      {
        senderId: '65b6ae3cd88fc3ebf0cb83f9',
        text: 'proident cillum minim et fugiat consectetur labore sit mollit cillum occaecat aute exercitation in et proident ipsum excepteur exercitation cupidatat nisi ad non veniam voluptate duis quis sunt consectetur in',
        file: 'product/product-6-cover.png',
        date: '2020-05-07T10:10:12+04:00',
      },
      {
        senderId: '65b6ae3c36b0c056458f2465',
        text: 'deserunt nulla ex dolor pariatur laboris consectetur do esse labore in sit id eu ad et in aliquip esse anim do in incididunt laboris tempor ullamco commodo aliqua incididunt cupidatat',
        file: 'product/product-7-cover.png',
        date: '2018-04-21T06:15:29+04:00',
      },
      {
        senderId: '65b6ae3c76dd53e7da78fb58',
        text: 'voluptate in commodo occaecat ad consectetur cillum anim sit excepteur non laborum minim dolor exercitation sunt labore fugiat tempor fugiat labore amet elit laboris qui eiusmod laborum laborum sunt amet',
        file: 'product/product-8-cover.png',
        date: '2015-03-18T11:41:36+04:00',
      },
      {
        senderId: '65b6ae3cffb8411be405c9cf',
        text: 'non qui incididunt eiusmod sint quis exercitation nulla minim sunt sint reprehenderit deserunt consequat in est magna laborum deserunt elit dolor excepteur sit quis magna eu exercitation laborum fugiat sint',
        file: 'product/product-9-cover.png',
        date: '2022-04-27T10:35:15+04:00',
      },
      {
        senderId: '65b6ae3cf24acc16787e0cfc',
        text: 'sint officia culpa deserunt consequat do aute ut velit laboris esse eiusmod magna culpa consequat anim pariatur eu enim magna irure ea qui ullamco nisi nostrud ut consequat eiusmod est',
        file: 'product/product-10-cover.png',
        date: '2023-06-03T11:36:53+04:00',
      },
      {
        senderId: '65b6ae3cee5cf7cd9cabf276',
        text: 'mollit reprehenderit laboris est ea sit commodo voluptate occaecat deserunt est incididunt incididunt occaecat officia nisi do nostrud labore velit eu Lorem duis tempor non minim non anim elit velit',
        file: 'product/product-11-cover.png',
        date: '2021-04-07T04:24:11+04:00',
      },
      {
        senderId: '65b6ae3ce34bf7a8f1e4bfb9',
        text: 'mollit ullamco et non excepteur sit do esse incididunt enim nulla cillum excepteur eiusmod reprehenderit quis sunt nulla enim quis laborum enim ea eu pariatur irure duis voluptate minim ipsum',
        file: 'product/product-12-cover.png',
        date: '2019-02-17T09:57:15+04:00',
      },
      {
        senderId: '65b6ae3c7b3c845ffe463eef',
        text: 'tempor aute cupidatat esse aliquip magna non deserunt laboris dolor aliqua commodo ipsum aliquip non elit amet in et adipisicing eiusmod anim pariatur id eu incididunt in mollit pariatur ad',
        file: 'product/product-13-cover.png',
        date: '2020-08-20T11:53:32+04:00',
      },
      {
        senderId: '65b6ae3c9854365b9ea968ed',
        text: 'dolore do amet officia deserunt adipisicing consectetur voluptate anim sit culpa culpa commodo non sit minim id ut duis officia aliqua reprehenderit consectetur in occaecat do voluptate proident consequat minim',
        file: 'product/product-14-cover.png',
        date: '2014-02-28T12:37:11+04:00',
      },
      {
        senderId: '65b6ae3c2acf4bb9c1a2cc3d',
        text: 'esse non ex nostrud magna id ullamco eiusmod dolore ut occaecat aute adipisicing elit fugiat veniam non magna nulla proident ut cillum eiusmod ad nulla minim cillum nisi consequat minim',
        file: 'product/product-15-cover.png',
        date: '2023-10-05T09:53:43+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3ce58306afa95f1e2c',
    combineId: '65b6ae3c48bc7a16424efa3965b6ae3c46d366ace5ada823',
    messages: [
      {
        senderId: '65b6ae3c9f8be8cee662669c',
        text: 'eu eiusmod veniam excepteur eu veniam in pariatur consectetur consequat labore occaecat proident ex in culpa pariatur velit culpa pariatur in dolor ad laborum quis enim ullamco voluptate proident esse',
        file: 'product/product-1-cover.png',
        date: '2020-07-13T02:39:58+04:00',
      },
      {
        senderId: '65b6ae3c52df6b9eebcc0425',
        text: 'aute ipsum id veniam nisi nulla deserunt duis esse aliqua cillum dolor eu culpa et voluptate consequat eiusmod ullamco adipisicing deserunt exercitation sint occaecat nostrud ea do non aliqua aliqua',
        file: 'product/product-2-cover.png',
        date: '2019-03-29T07:15:31+04:00',
      },
      {
        senderId: '65b6ae3c4e746fc41a876103',
        text: 'ex in pariatur qui proident velit et ipsum ullamco minim minim velit officia culpa ea Lorem do consequat do eiusmod laboris amet quis voluptate sint aliquip proident culpa ea commodo',
        file: 'product/product-3-cover.png',
        date: '2021-12-24T08:54:54+04:00',
      },
      {
        senderId: '65b6ae3cc0bfdd1608fac862',
        text: 'deserunt pariatur do elit ipsum enim ad esse velit enim veniam aliquip voluptate dolor tempor qui ex quis dolore irure ut cillum esse excepteur elit anim nisi et sunt sunt',
        file: 'product/product-4-cover.png',
        date: '2024-01-11T04:57:15+04:00',
      },
      {
        senderId: '65b6ae3c80aa7a6deec8a6a4',
        text: 'ad veniam irure dolor voluptate dolor est deserunt qui minim ad nulla dolor laborum ullamco non sint esse ut anim dolor ipsum dolor dolor mollit adipisicing excepteur occaecat ut elit',
        file: 'product/product-5-cover.png',
        date: '2016-08-06T02:24:49+04:00',
      },
      {
        senderId: '65b6ae3cc9fe5a581e0b9fce',
        text: 'in veniam sunt dolore enim amet deserunt officia ea cupidatat id et laborum elit do duis sunt amet et irure in elit elit ex laborum nostrud sint veniam cupidatat incididunt',
        file: 'product/product-6-cover.png',
        date: '2023-06-30T12:25:38+04:00',
      },
      {
        senderId: '65b6ae3c2180672f1148ac13',
        text: 'aliquip laboris tempor adipisicing non enim irure irure nisi ad est deserunt consequat proident nisi cupidatat duis amet amet qui anim deserunt ad ex in excepteur voluptate eiusmod est laborum',
        file: 'product/product-7-cover.png',
        date: '2023-08-03T02:05:30+04:00',
      },
      {
        senderId: '65b6ae3c98b98f5959fdd7dc',
        text: 'nostrud laboris laborum cillum amet sunt nostrud fugiat exercitation esse proident pariatur amet excepteur elit nisi sunt eu consequat deserunt eu sit duis adipisicing commodo magna dolore irure et enim',
        file: 'product/product-8-cover.png',
        date: '2017-05-06T12:36:58+04:00',
      },
      {
        senderId: '65b6ae3c30b01c397cf56595',
        text: 'adipisicing est dolor aute tempor fugiat et exercitation do fugiat aute officia laborum amet nulla eu velit aliquip veniam ad sit magna ipsum excepteur fugiat aliqua laborum pariatur nostrud fugiat',
        file: 'product/product-9-cover.png',
        date: '2022-02-27T05:44:32+04:00',
      },
      {
        senderId: '65b6ae3c7294f92524d2be1c',
        text: 'laborum ipsum ad sit qui voluptate tempor ex qui nostrud ut adipisicing cillum sunt laboris deserunt in qui tempor eu in nisi excepteur amet amet aute culpa fugiat ut do',
        file: 'product/product-10-cover.png',
        date: '2019-01-18T11:22:57+03:00',
      },
      {
        senderId: '65b6ae3cc3b8de1944fe7101',
        text: 'proident laboris cillum et sit ex anim irure mollit in ad nulla ullamco nisi velit minim deserunt id consequat labore sit laboris mollit sunt aute laborum velit quis aliquip duis',
        file: 'product/product-11-cover.png',
        date: '2020-05-12T01:28:38+04:00',
      },
      {
        senderId: '65b6ae3cd993ae268837de84',
        text: 'id sunt sit cupidatat enim enim qui commodo quis magna irure ut laborum cupidatat laboris magna tempor dolore in ipsum qui dolor eiusmod consequat incididunt voluptate eu tempor veniam laborum',
        file: 'product/product-12-cover.png',
        date: '2015-05-15T12:23:14+04:00',
      },
      {
        senderId: '65b6ae3c91b21350dc9f01cb',
        text: 'ullamco ex qui culpa ex exercitation do sunt ea anim qui aliqua laboris consectetur nulla dolore dolore fugiat deserunt nulla commodo excepteur fugiat laboris sit laboris reprehenderit quis quis qui',
        file: 'product/product-13-cover.png',
        date: '2018-08-29T09:39:15+04:00',
      },
      {
        senderId: '65b6ae3cbbb4d4477b73d26a',
        text: 'eiusmod duis proident laboris reprehenderit nostrud qui ipsum aliquip Lorem quis magna fugiat culpa esse deserunt ea adipisicing voluptate qui eu irure magna aliqua in dolore esse ex et sit',
        file: 'product/product-14-cover.png',
        date: '2022-02-08T01:11:30+04:00',
      },
      {
        senderId: '65b6ae3c431a010748d6c5a9',
        text: 'velit veniam velit ex est duis voluptate dolore quis dolor consectetur amet laborum sit laborum occaecat et qui aliqua deserunt amet laboris eiusmod ea voluptate adipisicing reprehenderit aliquip duis ipsum',
        file: 'product/product-15-cover.png',
        date: '2017-05-13T10:22:41+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c1d6fe7131efa039b',
    combineId: '65b6ae3c6f163fe4e37d016265b6ae3c65389946e4ec50f0',
    messages: [
      {
        senderId: '65b6ae3c8d42a472153a1333',
        text: 'ullamco officia velit dolore magna eu Lorem nisi Lorem veniam officia sit aliqua incididunt labore commodo in qui Lorem minim ea veniam consequat aute occaecat deserunt non non officia in',
        file: 'product/product-1-cover.png',
        date: '2020-06-22T12:33:54+04:00',
      },
      {
        senderId: '65b6ae3c03930e6fad351c56',
        text: 'nisi fugiat anim amet nisi non anim ad veniam do minim magna cupidatat adipisicing laboris eu qui et exercitation laborum fugiat anim veniam pariatur esse veniam consequat do enim pariatur',
        file: 'product/product-2-cover.png',
        date: '2018-05-20T06:12:16+04:00',
      },
      {
        senderId: '65b6ae3ce44562b61f3cb77b',
        text: 'aute enim laboris voluptate culpa ex consequat tempor velit aliquip esse aute mollit mollit Lorem nisi occaecat pariatur tempor cillum cupidatat consectetur quis fugiat in cupidatat occaecat culpa esse excepteur',
        file: 'product/product-3-cover.png',
        date: '2023-03-28T05:46:08+04:00',
      },
      {
        senderId: '65b6ae3c3ef12f2eed868dd0',
        text: 'ut magna nostrud proident sit proident cupidatat sint ullamco ipsum tempor mollit commodo consequat aute do id cillum ipsum enim veniam mollit Lorem est duis ea sit veniam sint est',
        file: 'product/product-4-cover.png',
        date: '2020-11-19T03:45:12+04:00',
      },
      {
        senderId: '65b6ae3c105b456c7dcb6559',
        text: 'minim velit sunt elit laboris nulla tempor reprehenderit cillum aliquip do dolor enim enim do sit enim duis ex aute minim veniam velit eu magna irure elit adipisicing proident dolor',
        file: 'product/product-5-cover.png',
        date: '2018-11-23T05:51:44+03:00',
      },
      {
        senderId: '65b6ae3c4f707bda6967a646',
        text: 'ex ut voluptate nisi ullamco ea anim irure cillum mollit nisi incididunt laborum id dolor qui ut ut officia sint fugiat aliquip est nostrud cillum laborum cupidatat occaecat fugiat duis',
        file: 'product/product-6-cover.png',
        date: '2014-09-15T12:40:24+04:00',
      },
      {
        senderId: '65b6ae3c139b675c80f6812e',
        text: 'deserunt dolore sit laboris tempor quis esse cupidatat nulla irure incididunt aute est et dolore Lorem Lorem culpa minim sint est anim dolor eiusmod officia aliquip cupidatat exercitation sunt minim',
        file: 'product/product-7-cover.png',
        date: '2020-06-04T06:59:35+04:00',
      },
      {
        senderId: '65b6ae3ce60652ca16854a76',
        text: 'magna enim incididunt eiusmod aute commodo occaecat incididunt eiusmod ullamco duis consequat est commodo id consectetur non culpa cillum deserunt nostrud do est et cupidatat amet fugiat reprehenderit sit est',
        file: 'product/product-8-cover.png',
        date: '2015-01-24T08:39:37+03:00',
      },
      {
        senderId: '65b6ae3c5c52d0616887b150',
        text: 'pariatur labore ea minim deserunt culpa nostrud aliquip esse nulla laborum enim officia consequat mollit eiusmod excepteur fugiat laboris excepteur culpa amet proident et velit Lorem ut exercitation reprehenderit esse',
        file: 'product/product-9-cover.png',
        date: '2014-09-25T02:05:58+04:00',
      },
      {
        senderId: '65b6ae3c792e21afabc29a79',
        text: 'mollit qui mollit exercitation ad elit mollit culpa quis irure dolore eiusmod officia duis duis labore aliquip enim dolor do culpa sint labore id Lorem aute eu nulla amet id',
        file: 'product/product-10-cover.png',
        date: '2024-01-07T01:09:28+04:00',
      },
      {
        senderId: '65b6ae3c163abd1d7712de99',
        text: 'fugiat amet officia irure minim ut culpa irure eu officia proident velit dolore minim laborum ipsum consequat proident et proident eu excepteur pariatur proident ipsum exercitation consectetur eiusmod officia enim',
        file: 'product/product-11-cover.png',
        date: '2020-11-29T01:21:15+04:00',
      },
      {
        senderId: '65b6ae3cedb0c67c833f73e7',
        text: 'esse anim est adipisicing aliquip ad non adipisicing magna est pariatur ut pariatur ipsum Lorem ad ex ad pariatur deserunt cupidatat velit voluptate excepteur velit labore nisi anim esse consectetur',
        file: 'product/product-12-cover.png',
        date: '2017-01-14T09:32:05+03:00',
      },
      {
        senderId: '65b6ae3cabb762bb2ec73dbc',
        text: 'esse anim consequat pariatur eu minim non ad cupidatat aliqua ut dolore laborum mollit ipsum dolor enim deserunt sunt est ut nostrud dolore velit reprehenderit id ea nostrud sit nulla',
        file: 'product/product-13-cover.png',
        date: '2017-05-06T09:43:52+04:00',
      },
      {
        senderId: '65b6ae3c722dbef68ab81e1a',
        text: 'consectetur consequat reprehenderit nisi incididunt Lorem consectetur ullamco officia amet aute fugiat consequat anim velit minim ipsum cillum officia cupidatat dolore ea aliqua mollit ea duis ex sit sint ex',
        file: 'product/product-14-cover.png',
        date: '2018-04-13T06:46:50+04:00',
      },
      {
        senderId: '65b6ae3c6d724057c8c97495',
        text: 'consectetur cupidatat cillum quis amet quis minim aliqua deserunt ad elit aute velit velit consequat fugiat deserunt ipsum id id velit consequat eu culpa nostrud dolore irure tempor sit exercitation',
        file: 'product/product-15-cover.png',
        date: '2022-08-03T02:43:29+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c3e4f8a936d38a2af',
    combineId: '65b6ae3c0333c571c05b86f865b6ae3c79210955094721c0',
    messages: [
      {
        senderId: '65b6ae3c4823e96b81ea5126',
        text: 'id dolor eiusmod laboris pariatur cillum ut magna consectetur mollit voluptate officia magna cupidatat pariatur do excepteur magna mollit Lorem dolore anim ut proident sint et ut labore ex elit',
        file: 'product/product-1-cover.png',
        date: '2018-06-20T09:01:57+04:00',
      },
      {
        senderId: '65b6ae3cf0f9eeed8e1b4d56',
        text: 'ut consequat ad exercitation sunt voluptate velit incididunt labore amet aliquip incididunt eu nostrud sit ut ad dolore labore consectetur ea eiusmod laboris cillum enim deserunt officia fugiat aute labore',
        file: 'product/product-2-cover.png',
        date: '2022-06-01T04:25:19+04:00',
      },
      {
        senderId: '65b6ae3cccbe7fe4f3f53bf4',
        text: 'magna ullamco officia duis aute proident reprehenderit Lorem aliquip occaecat deserunt laboris Lorem sint anim sint sint proident cillum dolore qui occaecat officia non sint laboris fugiat et deserunt reprehenderit',
        file: 'product/product-3-cover.png',
        date: '2018-12-07T01:08:47+03:00',
      },
      {
        senderId: '65b6ae3c3a82253f3e45a5d8',
        text: 'tempor mollit sit tempor id veniam Lorem ipsum deserunt officia velit esse est quis ad commodo esse officia in voluptate excepteur anim eu qui excepteur laborum qui sit sit minim',
        file: 'product/product-4-cover.png',
        date: '2019-03-01T09:04:00+04:00',
      },
      {
        senderId: '65b6ae3c64be2a8ac131075a',
        text: 'excepteur sint ut labore tempor adipisicing excepteur qui laborum sit anim Lorem eiusmod reprehenderit do occaecat ullamco non reprehenderit incididunt dolor laboris in consectetur commodo anim voluptate mollit do in',
        file: 'product/product-5-cover.png',
        date: '2021-01-03T12:07:01+04:00',
      },
      {
        senderId: '65b6ae3c1bef63f2aab6d09b',
        text: 'culpa eu ad proident dolor aute eiusmod adipisicing duis nulla esse deserunt culpa fugiat aliqua consequat enim nulla aliquip amet amet aliquip excepteur commodo reprehenderit officia anim veniam mollit qui',
        file: 'product/product-6-cover.png',
        date: '2014-11-27T12:12:02+03:00',
      },
      {
        senderId: '65b6ae3c67afdfb6337429b4',
        text: 'amet eu veniam aliquip ex do Lorem nisi consectetur aliquip qui enim quis reprehenderit incididunt adipisicing mollit deserunt veniam quis proident sit labore id aliquip sunt cillum sint labore cillum',
        file: 'product/product-7-cover.png',
        date: '2019-11-02T11:54:29+04:00',
      },
      {
        senderId: '65b6ae3cbea3a11282099fa2',
        text: 'consectetur nisi aliquip aliquip mollit occaecat enim excepteur deserunt tempor nulla nostrud aliqua voluptate nisi consectetur magna incididunt irure ex ullamco in consequat qui cupidatat id adipisicing adipisicing id excepteur',
        file: 'product/product-8-cover.png',
        date: '2020-12-13T12:15:29+04:00',
      },
      {
        senderId: '65b6ae3c4cc10fba0f45b8fc',
        text: 'fugiat nisi qui Lorem amet ut ullamco cupidatat non nostrud occaecat irure laboris qui tempor exercitation culpa velit do qui eu consequat voluptate ad nostrud enim labore magna enim ut',
        file: 'product/product-9-cover.png',
        date: '2015-05-12T01:34:42+04:00',
      },
      {
        senderId: '65b6ae3c72f083a680350099',
        text: 'culpa pariatur fugiat aliquip incididunt adipisicing aute non consectetur dolore ex dolore magna velit non officia in labore sit laborum dolor irure commodo velit et voluptate pariatur culpa eiusmod dolore',
        file: 'product/product-10-cover.png',
        date: '2015-05-17T07:29:05+04:00',
      },
      {
        senderId: '65b6ae3c6d38b4de41f769d5',
        text: 'nisi consequat est commodo est enim cupidatat consequat consequat magna incididunt ea minim ex excepteur Lorem anim fugiat commodo minim incididunt officia consectetur tempor ut ea cupidatat sit aute sunt',
        file: 'product/product-11-cover.png',
        date: '2021-05-06T05:01:16+04:00',
      },
      {
        senderId: '65b6ae3c19332db75c36ebdb',
        text: 'tempor velit ipsum ad est cupidatat non reprehenderit consectetur do mollit fugiat dolore tempor labore amet fugiat reprehenderit incididunt nulla cupidatat quis quis incididunt exercitation velit enim qui do adipisicing',
        file: 'product/product-12-cover.png',
        date: '2017-01-15T04:29:20+03:00',
      },
      {
        senderId: '65b6ae3c8c30ffca01749483',
        text: 'sit adipisicing nisi id occaecat enim aliquip mollit eu amet fugiat duis elit laboris adipisicing labore laboris ex excepteur esse irure proident exercitation anim adipisicing commodo duis qui duis esse',
        file: 'product/product-13-cover.png',
        date: '2023-09-05T05:06:29+04:00',
      },
      {
        senderId: '65b6ae3cc34b73b6901c7315',
        text: 'consequat Lorem fugiat anim mollit ad minim commodo magna sunt sunt pariatur veniam elit fugiat et reprehenderit amet cillum in Lorem non ad culpa consectetur elit esse mollit sit labore',
        file: 'product/product-14-cover.png',
        date: '2015-06-24T11:41:30+04:00',
      },
      {
        senderId: '65b6ae3ce1044f207e95ddd0',
        text: 'aliquip occaecat id in cupidatat laborum do nostrud excepteur cupidatat nulla adipisicing duis quis laborum dolor amet eiusmod est reprehenderit eiusmod commodo culpa Lorem sint labore pariatur excepteur laboris fugiat',
        file: 'product/product-15-cover.png',
        date: '2016-03-26T03:28:11+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c72bf6fdbd9a8d759',
    combineId: '65b6ae3c89a5031953b136d965b6ae3cd0d87d8510ab97bb',
    messages: [
      {
        senderId: '65b6ae3ca2c846fda8a857fb',
        text: 'reprehenderit qui velit elit do exercitation sit aliquip ut cillum minim tempor nisi dolor voluptate cupidatat eiusmod reprehenderit id voluptate laborum enim tempor officia officia quis exercitation ex sint commodo',
        file: 'product/product-1-cover.png',
        date: '2023-11-18T04:49:35+04:00',
      },
      {
        senderId: '65b6ae3c48c88df5aefa076b',
        text: 'enim ipsum Lorem in occaecat aliquip minim elit elit voluptate commodo tempor laboris occaecat enim nulla adipisicing voluptate Lorem deserunt voluptate mollit do ad cillum velit nulla mollit amet excepteur',
        file: 'product/product-2-cover.png',
        date: '2014-11-26T09:34:03+03:00',
      },
      {
        senderId: '65b6ae3c9e3bba0f1faf1469',
        text: 'do excepteur aute est minim ea et ad velit labore enim pariatur aute ex duis excepteur magna minim mollit aute nulla incididunt eu minim irure quis aute aliqua dolore ad',
        file: 'product/product-3-cover.png',
        date: '2016-01-29T09:34:55+03:00',
      },
      {
        senderId: '65b6ae3c0f1b94f1dd9c64c7',
        text: 'incididunt irure dolore officia mollit duis Lorem quis velit culpa esse qui veniam exercitation cillum nulla dolore Lorem tempor minim non laborum officia mollit consequat id ex voluptate consequat eu',
        file: 'product/product-4-cover.png',
        date: '2021-02-04T06:01:02+04:00',
      },
      {
        senderId: '65b6ae3c7438184d469795dd',
        text: 'aliquip anim ea in duis nulla proident magna cillum sunt cupidatat ea sunt quis consectetur nulla incididunt esse consectetur dolor dolore esse ea qui velit nostrud dolor adipisicing exercitation est',
        file: 'product/product-5-cover.png',
        date: '2014-06-15T08:25:36+04:00',
      },
      {
        senderId: '65b6ae3c7d94bdc8cad4dffa',
        text: 'duis proident nulla sit exercitation Lorem commodo laboris occaecat mollit culpa in minim et tempor id aliquip consequat enim do esse adipisicing laborum do elit eu adipisicing aute deserunt ad',
        file: 'product/product-6-cover.png',
        date: '2014-03-03T05:48:59+04:00',
      },
      {
        senderId: '65b6ae3c11f83304451d70bd',
        text: 'aute sit nisi est pariatur irure et excepteur Lorem cupidatat proident adipisicing non veniam consequat proident velit cillum id adipisicing laboris mollit excepteur do dolor irure labore consequat minim proident',
        file: 'product/product-7-cover.png',
        date: '2019-05-21T06:32:03+04:00',
      },
      {
        senderId: '65b6ae3c3295ef446ce39c6a',
        text: 'tempor reprehenderit aute ex culpa sit ut nulla cupidatat ut et ipsum ex consequat dolore officia in irure pariatur incididunt dolore fugiat adipisicing ea adipisicing elit officia sit nulla elit',
        file: 'product/product-8-cover.png',
        date: '2016-01-20T07:58:37+03:00',
      },
      {
        senderId: '65b6ae3c78d40f4147ee8447',
        text: 'ad elit amet adipisicing cupidatat esse adipisicing adipisicing reprehenderit officia eiusmod sunt cupidatat irure in officia exercitation consequat ad laboris elit eu deserunt cupidatat cupidatat occaecat non minim Lorem non',
        file: 'product/product-9-cover.png',
        date: '2017-02-27T09:29:42+04:00',
      },
      {
        senderId: '65b6ae3c3fe7830248f1f5bb',
        text: 'ea dolore labore adipisicing cupidatat mollit minim sint sint dolor et velit mollit quis velit culpa amet sunt aliqua exercitation tempor amet veniam nostrud occaecat Lorem mollit proident reprehenderit ut',
        file: 'product/product-10-cover.png',
        date: '2022-10-28T07:49:14+04:00',
      },
      {
        senderId: '65b6ae3c2d7341f9e8093f99',
        text: 'laborum do labore quis laborum enim reprehenderit dolore et do do ullamco ad magna officia proident ipsum esse ea aliqua incididunt in occaecat sunt ipsum nostrud duis elit aliqua qui',
        file: 'product/product-11-cover.png',
        date: '2024-01-26T06:03:30+04:00',
      },
      {
        senderId: '65b6ae3c57b247ac4bfecfe4',
        text: 'tempor culpa ut elit magna eiusmod Lorem labore sunt pariatur ullamco velit et amet ea ea eiusmod non commodo ullamco qui adipisicing consequat labore magna ipsum sunt quis ad fugiat',
        file: 'product/product-12-cover.png',
        date: '2014-02-05T02:52:24+03:00',
      },
      {
        senderId: '65b6ae3c9008d7a9fd3521be',
        text: 'esse esse ex id occaecat eiusmod exercitation commodo in enim eiusmod cupidatat commodo eu deserunt et minim officia do adipisicing officia quis voluptate occaecat sit incididunt exercitation laborum do amet',
        file: 'product/product-13-cover.png',
        date: '2018-06-01T12:09:36+04:00',
      },
      {
        senderId: '65b6ae3cff7d8becef16b7b3',
        text: 'commodo tempor aliquip laboris esse reprehenderit cillum ea nostrud proident deserunt proident aliquip pariatur Lorem officia non magna occaecat ullamco officia enim sint culpa velit aliqua quis pariatur est aliqua',
        file: 'product/product-14-cover.png',
        date: '2016-07-21T12:28:21+04:00',
      },
      {
        senderId: '65b6ae3c3441a76ce05aab3d',
        text: 'et veniam sit aliquip quis enim magna tempor sit excepteur occaecat tempor irure velit velit cillum aute commodo deserunt est culpa non consequat elit tempor commodo et veniam in sunt',
        file: 'product/product-15-cover.png',
        date: '2021-07-03T02:27:06+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c2303f5c6f3dba57b',
    combineId: '65b6ae3cd0d335f9cc899b0565b6ae3c50d0ae8e5c622f10',
    messages: [
      {
        senderId: '65b6ae3cc4df0f96435bca3a',
        text: 'velit ullamco magna quis adipisicing excepteur minim consequat anim ullamco aliquip voluptate tempor sit fugiat commodo nisi fugiat est ipsum consequat exercitation nisi id proident aliquip est in velit qui',
        file: 'product/product-1-cover.png',
        date: '2016-10-09T07:43:27+04:00',
      },
      {
        senderId: '65b6ae3c4546b87ea6ba7ffd',
        text: 'et consequat sit officia pariatur dolore officia fugiat ut Lorem duis elit quis ullamco esse consequat dolor laboris et et et dolor non nisi do mollit eu voluptate do reprehenderit',
        file: 'product/product-2-cover.png',
        date: '2016-09-19T11:29:15+04:00',
      },
      {
        senderId: '65b6ae3ceef1205e01d1e007',
        text: 'tempor Lorem culpa nulla cillum aute commodo fugiat eu non duis ut voluptate sit magna ex esse proident nostrud culpa cillum labore amet incididunt exercitation velit in proident dolor do',
        file: 'product/product-3-cover.png',
        date: '2022-04-05T12:31:15+04:00',
      },
      {
        senderId: '65b6ae3c721f7a9f00b88a65',
        text: 'velit nostrud reprehenderit mollit cillum culpa ea consequat dolore id amet eu reprehenderit eu laboris cillum ex ipsum aliqua tempor in amet consectetur est deserunt consequat occaecat dolore ex fugiat',
        file: 'product/product-4-cover.png',
        date: '2019-10-10T08:20:08+04:00',
      },
      {
        senderId: '65b6ae3c0c37afbce0584c9a',
        text: 'nostrud excepteur et consectetur culpa nostrud exercitation est do ipsum sunt ex dolor non consequat minim quis enim ex occaecat incididunt sint eiusmod sit do officia ex est quis minim',
        file: 'product/product-5-cover.png',
        date: '2021-04-03T03:25:07+04:00',
      },
      {
        senderId: '65b6ae3c4735696c21ad9831',
        text: 'tempor fugiat laborum aliqua occaecat deserunt Lorem nostrud cillum ullamco enim laborum est ea amet exercitation aliqua sunt sunt qui consectetur cupidatat minim incididunt mollit Lorem quis ad elit et',
        file: 'product/product-6-cover.png',
        date: '2016-05-15T01:56:36+04:00',
      },
      {
        senderId: '65b6ae3c0cf4446627ff1233',
        text: 'veniam exercitation dolor fugiat laborum exercitation labore incididunt nostrud duis veniam nisi qui tempor sunt ipsum incididunt et exercitation velit laboris minim officia culpa occaecat ad exercitation ex sunt ad',
        file: 'product/product-7-cover.png',
        date: '2017-08-30T05:28:48+04:00',
      },
      {
        senderId: '65b6ae3cbacd3d60cb83b68c',
        text: 'sint reprehenderit aute deserunt anim est aute labore et excepteur aute adipisicing voluptate sint aute reprehenderit est ex voluptate et minim ut et do dolor officia do Lorem tempor officia',
        file: 'product/product-8-cover.png',
        date: '2018-06-13T03:08:44+04:00',
      },
      {
        senderId: '65b6ae3c1fd279bc83505d57',
        text: 'laborum incididunt do exercitation commodo esse exercitation magna exercitation do aute duis sint nostrud officia est in id nostrud occaecat commodo id cillum do minim tempor cupidatat laboris labore veniam',
        file: 'product/product-9-cover.png',
        date: '2014-02-07T04:16:45+03:00',
      },
      {
        senderId: '65b6ae3c7371cd19162a2d25',
        text: 'mollit aliqua sint cupidatat laborum aliquip ex fugiat quis nostrud qui aliqua occaecat labore minim sint enim ad ea eu consequat ad commodo elit mollit magna cillum magna Lorem quis',
        file: 'product/product-10-cover.png',
        date: '2016-05-22T11:07:12+04:00',
      },
      {
        senderId: '65b6ae3caced94ba39523602',
        text: 'eu ut nisi ex officia incididunt cillum fugiat aliquip reprehenderit sit amet aliqua pariatur qui culpa proident ex magna elit ipsum adipisicing sint esse et esse amet in aute excepteur',
        file: 'product/product-11-cover.png',
        date: '2015-01-23T05:08:19+03:00',
      },
      {
        senderId: '65b6ae3c0e4bea34687a44d8',
        text: 'mollit non laborum id nulla minim magna proident commodo aliquip aliqua magna esse qui dolore minim ullamco incididunt aliqua est fugiat sunt voluptate magna est fugiat voluptate esse adipisicing labore',
        file: 'product/product-12-cover.png',
        date: '2019-05-13T11:30:38+04:00',
      },
      {
        senderId: '65b6ae3c3451b35200757aa7',
        text: 'ad Lorem tempor culpa aliquip reprehenderit occaecat anim aute anim ad sit dolor mollit culpa mollit sint Lorem aute consectetur magna laboris cupidatat occaecat cupidatat veniam dolor nostrud quis adipisicing',
        file: 'product/product-13-cover.png',
        date: '2022-01-10T10:40:44+04:00',
      },
      {
        senderId: '65b6ae3c4e3d4f673561a3fa',
        text: 'consequat eu laboris do et deserunt esse officia voluptate enim irure in consequat do culpa commodo exercitation sint reprehenderit pariatur deserunt id consectetur eu exercitation magna cupidatat laboris enim excepteur',
        file: 'product/product-14-cover.png',
        date: '2016-03-19T03:50:17+04:00',
      },
      {
        senderId: '65b6ae3c74723810c9e623e0',
        text: 'id proident qui voluptate labore culpa laboris tempor do irure sunt magna amet dolor tempor et adipisicing excepteur laboris elit amet sit duis ad esse excepteur nostrud amet ex proident',
        file: 'product/product-15-cover.png',
        date: '2019-09-11T10:48:34+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3c497857b455fc62ff',
    combineId: '65b6ae3c39cfdaf82375bf2d65b6ae3c48268f9d88e71a07',
    messages: [
      {
        senderId: '65b6ae3ce085d9c61855d657',
        text: 'ea ex eiusmod do mollit quis nostrud veniam et ea commodo quis cillum consectetur laboris officia id et in aute ullamco nostrud et magna laborum occaecat aliqua do magna ad',
        file: 'product/product-1-cover.png',
        date: '2023-12-21T04:38:59+04:00',
      },
      {
        senderId: '65b6ae3c9d72bf169c04643d',
        text: 'cupidatat laboris irure fugiat magna id quis et ad sunt consectetur in esse reprehenderit sunt voluptate sunt veniam et sit anim anim eiusmod incididunt dolore incididunt et consequat quis exercitation',
        file: 'product/product-2-cover.png',
        date: '2018-08-28T06:48:01+04:00',
      },
      {
        senderId: '65b6ae3c6edfb526e1be111e',
        text: 'elit do amet ipsum Lorem dolore ut officia excepteur quis dolore tempor aliquip ea laboris anim ea exercitation adipisicing minim qui officia non aliquip sunt anim sunt sunt voluptate sint',
        file: 'product/product-3-cover.png',
        date: '2021-06-25T11:57:05+04:00',
      },
      {
        senderId: '65b6ae3c979e07f1ccaa5297',
        text: 'sunt ex nulla ipsum ex veniam cupidatat anim commodo magna ipsum deserunt officia magna eiusmod ex officia et mollit ea cupidatat deserunt nostrud dolore tempor id fugiat culpa reprehenderit culpa',
        file: 'product/product-4-cover.png',
        date: '2018-06-24T07:36:50+04:00',
      },
      {
        senderId: '65b6ae3c75ac22dfd0c33494',
        text: 'do consequat laboris nisi fugiat adipisicing in anim ullamco cupidatat qui ipsum sunt magna ut fugiat veniam sunt ad ad qui eu in exercitation nisi qui consequat pariatur ea et',
        file: 'product/product-5-cover.png',
        date: '2016-10-21T12:04:06+03:00',
      },
      {
        senderId: '65b6ae3c80ce7211da359abb',
        text: 'commodo veniam ad velit voluptate non culpa eiusmod in amet minim occaecat ut enim officia aliquip ad ad fugiat non excepteur consequat veniam deserunt ex labore id laborum adipisicing nulla',
        file: 'product/product-6-cover.png',
        date: '2014-03-28T01:33:46+04:00',
      },
      {
        senderId: '65b6ae3c154ed61d7fb1ecea',
        text: 'commodo aute aliquip aliquip consequat id officia occaecat sunt culpa in ut irure labore aliquip pariatur do elit aliqua amet consequat occaecat veniam irure cupidatat sint sint tempor sint fugiat',
        file: 'product/product-7-cover.png',
        date: '2015-07-28T03:54:56+04:00',
      },
      {
        senderId: '65b6ae3c35e32817a489a6ba',
        text: 'velit elit magna laboris eiusmod dolore minim mollit aute enim incididunt nulla duis in aliquip laboris adipisicing aliquip magna occaecat ex laboris nostrud quis sunt irure Lorem proident proident elit',
        file: 'product/product-8-cover.png',
        date: '2020-12-27T04:32:19+04:00',
      },
      {
        senderId: '65b6ae3ca2e6b7d521a6eb13',
        text: 'ipsum officia irure in consectetur adipisicing aliqua voluptate veniam duis sit eu ipsum sit fugiat quis ut nostrud occaecat occaecat irure et aute irure officia eu anim ex velit esse',
        file: 'product/product-9-cover.png',
        date: '2016-03-08T02:18:58+04:00',
      },
      {
        senderId: '65b6ae3c193a589ee319a22f',
        text: 'laborum deserunt sint esse nostrud laboris exercitation dolore ex cupidatat aute minim aliqua ut ullamco excepteur eu veniam ex qui dolore consectetur duis laboris id incididunt tempor labore sit ut',
        file: 'product/product-10-cover.png',
        date: '2019-05-14T09:35:40+04:00',
      },
      {
        senderId: '65b6ae3cd2be92093e1a8f8e',
        text: 'nostrud velit exercitation ullamco cillum eu magna cillum magna enim irure elit nostrud occaecat voluptate mollit magna duis in esse veniam est amet in duis do non ut elit deserunt',
        file: 'product/product-11-cover.png',
        date: '2022-07-13T01:20:49+04:00',
      },
      {
        senderId: '65b6ae3c8361d53222537899',
        text: 'nostrud quis duis officia deserunt aliquip ipsum est adipisicing ex anim magna id ea elit aliquip ad id consequat culpa sit pariatur velit non fugiat occaecat culpa eu consectetur amet',
        file: 'product/product-12-cover.png',
        date: '2020-11-26T09:20:22+04:00',
      },
      {
        senderId: '65b6ae3ca3ca920b78b0793a',
        text: 'consectetur nostrud veniam mollit adipisicing in Lorem in aliquip consequat duis culpa sit in nulla duis ea duis Lorem sint officia ea anim veniam nulla do do irure esse dolor',
        file: 'product/product-13-cover.png',
        date: '2022-09-14T07:57:20+04:00',
      },
      {
        senderId: '65b6ae3cf675be571a4a7b41',
        text: 'ipsum laborum consequat Lorem incididunt aliquip do voluptate laboris do dolore tempor magna elit ullamco nisi tempor sint ipsum incididunt commodo excepteur amet veniam dolore fugiat velit ea sint fugiat',
        file: 'product/product-14-cover.png',
        date: '2015-03-26T05:47:22+04:00',
      },
      {
        senderId: '65b6ae3c0f2ea8751cad8741',
        text: 'nulla nulla veniam excepteur Lorem nulla aute fugiat incididunt pariatur velit mollit voluptate exercitation aliqua veniam esse nostrud proident ipsum et do dolore ad aliquip aliquip ullamco occaecat mollit anim',
        file: 'product/product-15-cover.png',
        date: '2016-08-01T01:17:04+04:00',
      },
    ],
  },
  {
    _id: '65b6ae3cf42cce94c1c0c4c6',
    combineId: '65b6ae3c63b3fe9a7b6c284e65b6ae3c3fb70444be0f1904',
    messages: [
      {
        senderId: '65b6ae3c5f4cd56e254f4e61',
        text: 'irure veniam aute est velit ea ut mollit excepteur eu et nisi cillum amet eiusmod incididunt dolor ut est occaecat culpa laboris veniam irure qui laboris consequat non minim amet',
        file: 'product/product-1-cover.png',
        date: '2020-07-23T08:15:12+04:00',
      },
      {
        senderId: '65b6ae3c49c77cb345e2dfd9',
        text: 'et aliqua aute nulla consequat enim pariatur dolore quis et ipsum nostrud consequat irure aliquip in esse dolor labore enim aute aliquip nulla amet occaecat sit laboris ipsum labore qui',
        file: 'product/product-2-cover.png',
        date: '2017-03-22T04:04:11+04:00',
      },
      {
        senderId: '65b6ae3ccc751b6f08059523',
        text: 'anim eiusmod nulla ad consequat irure sit velit nisi eu sunt exercitation minim velit et nisi nostrud Lorem reprehenderit Lorem reprehenderit commodo sit irure nisi cillum do esse est aliqua',
        file: 'product/product-3-cover.png',
        date: '2023-11-29T06:38:38+04:00',
      },
      {
        senderId: '65b6ae3c4ec160981efd1b76',
        text: 'est id pariatur labore nisi proident magna nulla enim ipsum amet ut exercitation reprehenderit sit fugiat pariatur deserunt ex cupidatat incididunt pariatur amet esse ipsum adipisicing elit amet esse adipisicing',
        file: 'product/product-4-cover.png',
        date: '2021-08-05T02:55:54+04:00',
      },
      {
        senderId: '65b6ae3c324cad43610b0928',
        text: 'ipsum in eu Lorem incididunt cupidatat qui enim excepteur consequat culpa commodo culpa sunt labore laboris pariatur aliqua velit sunt enim dolore dolore dolor duis anim ex non velit ullamco',
        file: 'product/product-5-cover.png',
        date: '2022-05-25T02:51:58+04:00',
      },
      {
        senderId: '65b6ae3cbbdf9cb2bbf54f65',
        text: 'esse pariatur mollit ut consectetur sunt non aliqua duis minim minim nulla exercitation sint mollit ut eiusmod voluptate est velit irure do duis laboris laborum sit aliquip ea magna id',
        file: 'product/product-6-cover.png',
        date: '2021-10-23T04:11:52+04:00',
      },
      {
        senderId: '65b6ae3c88c2e3dd7995cd61',
        text: 'aliquip non est ipsum nostrud ipsum ex ex consequat cupidatat magna laborum nostrud quis velit qui dolor cillum aliquip elit elit amet aliquip ad anim in tempor nostrud esse sit',
        file: 'product/product-7-cover.png',
        date: '2015-04-02T01:18:55+04:00',
      },
      {
        senderId: '65b6ae3cf761b2c243dcec6f',
        text: 'non tempor magna nisi ut duis occaecat non occaecat sint Lorem elit ea laboris et amet excepteur quis dolor aliquip eu ipsum eiusmod eu cupidatat dolore dolor consectetur qui eiusmod',
        file: 'product/product-8-cover.png',
        date: '2018-05-14T05:56:36+04:00',
      },
      {
        senderId: '65b6ae3c35717afa8aef9e3a',
        text: 'officia qui reprehenderit et laborum cupidatat aliqua anim veniam ut nulla quis aute consectetur laboris fugiat id et dolore do proident ipsum est fugiat ea mollit dolor minim consectetur laboris',
        file: 'product/product-9-cover.png',
        date: '2015-04-01T05:04:57+04:00',
      },
      {
        senderId: '65b6ae3c083beb0e1119d04e',
        text: 'adipisicing qui consequat ullamco sunt excepteur sunt tempor eu reprehenderit incididunt mollit do pariatur sunt proident nisi labore pariatur labore laborum cillum elit quis deserunt elit anim magna labore occaecat',
        file: 'product/product-10-cover.png',
        date: '2021-02-09T07:11:58+04:00',
      },
      {
        senderId: '65b6ae3cf8dbf23175df0808',
        text: 'ullamco enim sint adipisicing occaecat magna reprehenderit voluptate incididunt in adipisicing non culpa aliqua id culpa Lorem in ad excepteur nulla et ullamco ad consectetur velit aute pariatur qui reprehenderit',
        file: 'product/product-11-cover.png',
        date: '2020-09-30T09:10:20+04:00',
      },
      {
        senderId: '65b6ae3c02dc4fb39c652ad3',
        text: 'ullamco cillum reprehenderit enim proident ipsum pariatur ea mollit aute esse laborum quis cillum quis elit sunt laboris amet incididunt Lorem sint qui in reprehenderit ipsum reprehenderit fugiat cupidatat incididunt',
        file: 'product/product-12-cover.png',
        date: '2017-04-13T01:51:10+04:00',
      },
      {
        senderId: '65b6ae3c791b84295d84adc8',
        text: 'nostrud reprehenderit amet culpa nisi ullamco commodo eu tempor ipsum officia eu magna ad ipsum esse anim in fugiat sit enim deserunt aute voluptate non sunt ut laboris aliquip commodo',
        file: 'product/product-13-cover.png',
        date: '2020-11-20T08:27:29+04:00',
      },
      {
        senderId: '65b6ae3cbcf86983de75f675',
        text: 'eiusmod pariatur anim labore voluptate consequat est aute exercitation magna mollit et duis proident qui proident duis officia sit et cillum duis aliqua ex et est magna aliquip officia do',
        file: 'product/product-14-cover.png',
        date: '2023-07-27T04:26:55+04:00',
      },
      {
        senderId: '65b6ae3c937ff4ea0f8d5455',
        text: 'velit aute laboris ullamco esse velit do duis voluptate ea et sunt culpa cupidatat ea in adipisicing veniam irure elit fugiat duis quis exercitation incididunt aliqua reprehenderit amet laborum cillum',
        file: 'product/product-15-cover.png',
        date: '2022-06-15T07:13:59+04:00',
      },
    ],
  },
]

// LAYOUT
export const layout = [
  {
    _id: '65b7c9d55a31a03aa3570470',
    _type: LayoutEnum.Home,
    name: 'Página inicial',
    slug: 'pagina-inicial',
    createdAt: '2017-07-05T08:21:47+04:00',
    updatedAt: '2023-04-18T04:39:58+04:00',
  },
  {
    _id: '65b7c9d5ab91b5cbd8daf9a3',
    _type: LayoutEnum.Contact,
    name: 'Contato',
    slug: 'contato',
    createdAt: '2023-08-06T10:09:24+04:00',
    updatedAt: '2017-01-25T11:17:05+03:00',
  },
  {
    _id: '65b7c9d55cef781e3659c558',
    _type: LayoutEnum.About,
    name: 'Sobre',
    slug: 'sobre',
    createdAt: '2017-09-27T11:21:06+04:00',
    updatedAt: '2014-09-22T04:04:36+04:00',
  },
]

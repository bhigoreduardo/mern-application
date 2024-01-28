import {
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
        _id: '659edb43f26a45ceed256d3a',
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
        _id: '659edb43f26a45ceed256d3a',
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
        _id: '659edb43f26a45ceed256d3a',
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
        _id: '659edb43f26a45ceed256d3a',
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
    facebook: 'facebook.com/furniture',
    instagram: 'instagram.com/furniture',
    twitter: 'twitter.com/furniture',
    linkedin: 'linkedin.com/furniture',
    pinterest: 'pinterest.com/furniture',
    youtube: 'youtube.com/furniture',
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
              _id: '659edb43f26a45ceed256d3b',
              name: 'Azul',
              color: '#1e40af',
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
    ],
    obs: 'irure voluptate anim fugiat non labore et nisi ut ipsum eiusmod esse irure qui Lorem ut elit irure qui id officia exercitation occaecat eu laborum ipsum consectetur id incididunt nulla elit eu consectetur occaecat ea magna laboris irure magna duis',
    createdAt: '2024-01-13T02:28:55+04:00',
    updatedAt: '2023-02-02T03:11:29+04:00',
  },
]

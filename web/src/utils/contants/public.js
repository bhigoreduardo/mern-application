import { categories } from '../mock'

// HEADER
export const headerMainLinks = [
  {
    name: 'Sobre',
    slug: '/sobre',
  },
  {
    name: 'Produtos',
    slug: '/loja',
  },
  {
    name: 'Favoritos',
    slug: '/favoritos',
  },
]

export const headerSecondLinks = [
  {
    name: 'Cadastrar',
    slug: '/cadastrar',
  },
  {
    name: 'Conta',
    slug: '/conta',
  },
  {
    name: 'Rastrear',
    slug: '/rastrear',
  },
]

export const headerCurrency = ['R$', 'USD', 'LBR']

export const headerLocalce = [
  'Português-BR',
  'English',
  'Portuguese',
  'Spanish',
]

export const mobileLinks = [
  {
    name: 'Início',
    icon: 'ri-home-4-line',
  },
  {
    name: 'Conta',
    icon: 'ri-user-line',
  },
  {
    name: 'Favoritos',
    icon: 'ri-heart-line',
  },
  {
    name: 'Pesquisar',
    icon: 'ri-search-line',
  },
  {
    name: 'Carrinho',
    icon: 'ri-shopping-cart-line',
  },
]

// FOOTER
export const footerLinks = [
  {
    title: 'Ajuda & contato',
    children: [
      {
        name: 'Conta',
        slug: '/conta',
      },
      {
        name: 'Pedidos',
        slug: '/pedidos',
      },
      {
        name: 'Taxas de envio',
        slug: '/taxas',
      },
      {
        name: 'Devoluções',
        slug: '/devolucoes',
      },
      {
        name: 'Ajuda',
        slug: '/ajuda',
      },
      {
        name: 'Contato',
        slug: '/contato',
      },
    ],
  },
  {
    title: 'Categoria de produtos',
    children: categories.slice(0, 9),
  },
  {
    title: 'Informações de pagamento',
    children: [
      {
        name: 'Cartão de visita',
      },
      {
        name: 'Resgatar pontos',
      },
      {
        name: 'Recarga de saldo',
      },
      {
        name: 'Pagamentos',
      },
    ],
  },
  {
    title: 'Sobre nós',
    children: [
      {
        name: 'A empresa',
      },
      {
        name: 'Notícias',
      },
      {
        name: 'Trabalhe conosco',
      },
      {
        name: 'Investidores',
      },
      {
        name: 'Políticas de privacidade',
      },
      {
        name: 'Avaliações',
      },
    ],
  },
]

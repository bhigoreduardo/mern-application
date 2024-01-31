import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { orders, products, store } from '../../../utils/mock'
import { BadgeEnum } from '../../../types/enum-type'
import {
  incomes,
  socialColumns,
  socialTraffic,
} from '../../../utils/contants/admin'
import { orderColumns } from '../../../utils/contants/public'
import IncomeCard from '../../components/ui/cards/income-card'
import Chart from '../../components/ui/chart'
import Heading from '../../components/ui/table/heading'
import TableData from '../../components/ui/table/data'
import Button from '../../components/ui/buttons/button'
import Carousel from '../../components/ui/carousel'
import ProductCard from '../../components/ui/cards/product-card'

export default function Home() {
  const { pathname } = useLocation()
  const settingHref =
    pathname.split('/')[2] === 'loja' ? 'configuracao' : 'perfil'
  const user = store
  const responsive = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      {/* GREETINGS */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xl text-gray-900">Olá, {user?.name}</h4>
        <p className="text-sm text-gray-700">
          No painel administrativo. você pode verificar e visualizar facilmente{' '}
          <Link to="pedidos" className="text-blue-500">
            pedidos
          </Link>{' '}
          recentes, gerenciar{' '}
          <Link to="clientes" className="text-blue-500">
            clientes
          </Link>{' '}
          e editar sua{' '}
          <Link to={settingHref} className="text-blue-500">
            senha
          </Link>{' '}
          e detalhes da{' '}
          <Link to={settingHref} className="text-blue-500">
            conta
          </Link>
          .
        </p>
      </div>
      {/* INCOMES */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {incomes.map((item, i) => (
          <IncomeCard key={i} {...item} />
        ))}
      </div>
      {/* CHART */}
      <div className="flex flex-col gap-6 bg-white border border-gray-100 rounded-sm shadow-sm">
        <Heading title="Análise da loja" />
        <Chart />
      </div>
      {/* ORDERS */}
      <TableData
        title="Pedidos do dia"
        btn={
          <Button
            className="!gap-1 font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-white !py-2"
            // onClick={() => navigate('pedidos')}
          >
            Vê todos
            <ArrowRight size={14} />
          </Button>
        }
        columns={orderColumns('pedidos')}
        data={orders}
      />
      {/* MOST SALES */}
      <div className="flex flex-col gap-6 border border-gray-100 rounded-sm shadow-sm overflow-x-auto bg-white">
        <Heading title="Mais vendidos" />
        {/* {products?.length > 0 ? (
          <div className="w-[1200px] px-6 mx-auto pb-2">
            <Carousel autoplay slidesToShow={4} responsive={responsive}>
              {() =>
                products.map((item, i) => (
                  <ProductCard
                    key={i}
                    badge={BadgeEnum.Offer}
                    badgeValue="18"
                    cover={item?.productData?.media?.cover}
                    backCover={item?.productData?.media?.backCover}
                    name={item.name}
                    rangePrice={item.rangePrice}
                  />
                ))
              }
            </Carousel>
          </div>
        ) : (
          <span className="text-sm text-gray-600 text-left px-6">
            Sem resultados
          </span>
        )} */}
      </div>
      {/* TRAFFIC */}
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex-1 flex flex-col gap-6 border border-gray-100 rounded-sm shadow-sm bg-white">
          <Heading title="Análise de visitas" />
          <Chart />
        </div>
        <TableData
          title="Tráfego das redes sociais"
          columns={socialColumns}
          data={socialTraffic}
          extraSmallTable
          className="flex-1 md:max-w-[350px]"
        />
      </div>
    </section>
  )
}

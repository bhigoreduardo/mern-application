import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { customer, order, product } from '../../../utils/mocks/public'
import { latested, orderColumns } from '../../../utils/contants/public'
import { BadgeEnum } from '../../../types/public/enum-type'
import ProfileCard from '../../components/ui/cards/profile-card'
import AddressCard from '../../components/ui/cards/address-card'
import LatestedCard from '../../components/ui/cards/latested-card'
import TableData from '../../components/ui/table/data'
import Button from '../../components/ui/buttons/button'
import Heading from '../../components/ui/common/heading'
import Carousel from '../../components/ui/carousel'
import ProductCard from '../../components/ui/cards/product-card'

export default function Dashboard() {
  const navigate = useNavigate()
  const user = customer
  const orders = new Array(10).fill(order)
  const history = new Array(10).fill(product)
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
    <section className="flex-grow flex flex-col gap-6">
      {/* GREETINGS */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xl text-gray-900">Olá, {user?.name}</h4>
        <p className="text-sm text-gray-700">
          No painel da sua conta. você pode verificar e visualizar facilmente
          seus{' '}
          <Link to="pedidos" className="text-blue-500">
            pedidos
          </Link>{' '}
          recentes, gerenciar seus{' '}
          <Link to="endereco" className="text-blue-500">
            endereços
          </Link>{' '}
          de envio e cobrança e editar sua{' '}
          <Link to="configuracao" className="text-blue-500">
            senha
          </Link>{' '}
          e configurações da{' '}
          <Link to="configuracao" className="text-blue-500">
            conta
          </Link>
          .
        </p>
      </div>
      {/* ACCOUNT OVERVIEW */}
      <div className="flex gap-6 xl:flex-row flex-col">
        <ProfileCard user={user} href="configuracao" />
        <AddressCard address={user?.address} href="configuracao" />
        <div className="flex-1 flex flex-col gap-6">
          {latested.map((item, i) => (
            <LatestedCard
              key={i}
              icon={item.icon}
              value={item.value}
              description={item.description}
              className={item.className}
            />
          ))}
        </div>
      </div>
      {/* LATESTED ORDERS */}
      <TableData
        title="Pedidos recentes"
        btn={
          <Button
            className="!gap-1 font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-white !py-2"
            onClick={() => navigate('/conta/pedidos')}
          >
            Vê todos
            <ArrowRight size={14} />
          </Button>
        }
        columns={orderColumns('/conta/pedidos')}
        data={orders}
      />
      {/* HISTORY */}
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2 overflow-x-auto">
        <Heading
          title="Histórico"
          btn={
            <Button
              className="!gap-1 font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-white !py-2 normal-case"
              onClick={() => navigate('/conta/historico')}
            >
              Vê todos
              <ArrowRight size={14} />
            </Button>
          }
        />
        {history.length > 0 ? (
          <div className="w-[1200px] px-6 mx-auto">
            <Carousel autoplay slidesToShow={4} responsive={responsive}>
              {() =>
                history.map((item, i) => (
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
        )}
      </div>
    </section>
  )
}

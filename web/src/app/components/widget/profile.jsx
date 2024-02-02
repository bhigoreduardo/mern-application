/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { BadgeEnum } from '../../../types/public/enum-type'
import { latested, orderColumns } from '../../../utils/contants/public'
import useMediaQuery from '../../../hooks/use-mediaQuery'
import Button from '../ui/buttons/button'
import AddressCard from '../ui/cards/address-card'
import LatestedCard from '../ui/cards/latested-card'
import ProductCard from '../ui/cards/product-card'
import ProfileCard from '../ui/cards/profile-card'
import Carousel from '../ui/carousel'
import Heading from '../ui/table/heading'
import TableData from '../ui/table/data'

export default function Profile({
  user,
  address,
  orders,
  history,
  hrefProfile,
  hrefAddress,
  hrefOrdersHeader,
  hrefOrders,
  hrefHistory,
}) {
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width: 768px)')
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
    <>
      {/* ACCOUNT OVERVIEW */}
      <div className="flex gap-6 xl:flex-row flex-col">
        <ProfileCard user={user} href={hrefProfile} />
        <AddressCard address={address} href={hrefAddress} />
        <div className="flex-1 flex flex-col gap-6 justify-between">
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
            onClick={() => navigate(hrefOrdersHeader)}
          >
            Vê todos
            <ArrowRight size={14} />
          </Button>
        }
        smallTable={matches}
        columns={orderColumns(hrefOrders)}
        data={orders}
      />
      {/* HISTORY */}
      <div className="flex flex-col gap-6 border border-gray-100 rounded-sm shadow-md pb-2 overflow-x-auto bg-white">
        <Heading
          title="Histórico"
          btn={
            <Button
              className="!gap-1 font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-white !py-2 normal-case"
              onClick={() => navigate(hrefHistory)}
            >
              Vê todos
              <ArrowRight size={14} />
            </Button>
          }
        />
        {history?.length > 0 ? (
          <div className="w-full max-w-full px-6 mx-auto">
            Em desenvolvimento
            {/* <Carousel autoplay slidesToShow={4} responsive={responsive}>
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
            </Carousel> */}
          </div>
        ) : (
          <span className="text-sm text-gray-600 text-left px-6">
            Sem resultados
          </span>
        )}
      </div>
    </>
  )
}

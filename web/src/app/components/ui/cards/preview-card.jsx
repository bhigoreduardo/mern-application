/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { ShoppingCartSimple, Heart, ArrowsClockwise } from 'phosphor-react'

import Container from '../common/container'
import Price from '../common/price'
import Count from '../buttons/count'
import Button from '../buttons/button'

export default function PreviewCard({
  name,
  sku,
  productStatus,
  brand,
  category,
  rangePrice,
}) {
  const isFavorite = true
  const isCompare = false
  const handleDecrease = () => {}
  const handleIncrease = () => {}

  return (
    <Container className="grid grid-cols-2 gap-10 max-w-[1400px]">
      {/* IMAGES */}
      <div className="flex flex-col gap-4"></div>
      {/* CONTENT */}
      <div className="flex-1 flex flex-col gap-6 justify-between">
        {/* TITLE */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400">Sem avaliações</span>
          <h2 className="font-semibold text-xl text-gray-900">{name}</h2>
        </div>
        <div className="flex flex-col gap-1">
          {/* STOCK */}
          <div className="flex justify-between">
            <p className="flex-1 font-semibold text-xs text-gray-900">
              <span className="font-normal text-gray-600">SKU:</span> {sku}
            </p>
            <p
              className={`flex-1 font-semibold text-xs ${
                productStatus ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <span className="font-normal text-gray-500">Disponilidade:</span>{' '}
              {productStatus ? 'Em estoque' : 'Fora de estoque'}
            </p>
          </div>
          {/* BRAND */}
          <div className="flex justify-between">
            <p className="flex-1 font-semibold text-xs text-gray-900">
              <span className="font-normal text-gray-600">Marca:</span> {brand}
            </p>
            <p className="flex-1 font-semibold text-xs text-gray-900">
              <span className="font-normal text-gray-500">Categoria:</span>{' '}
              {category?.map((item, i) => (
                <Fragment key={i}>
                  {item.name}
                  {category?.length === i + 1 ? '' : '/'}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
        {/* PRICE */}
        <Price
          rangePrice={rangePrice}
          biggerPrice
          className="border-b border-gray-200 pb-4"
        />
        {/* COLORS */}
        {/* BUTTONS */}
        <div className="flex gap-4">
          <Count
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            value={1}
            className="min-w-[160px]"
          />
          <Button className="bg-orange-500 text-white hover:bg-orange-600 uppercase w-full">
            Adicionar ao carrinho
            <ShoppingCartSimple size={20} className="text-white" />
          </Button>
        </div>
        {/* FAVORITS */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className={`${
              isFavorite ? 'text-orange-500' : 'text-gray-900'
            } flex items-center gap-1 text-sm hover:text-orange-500 duration-300 ease-in-out`}
          >
            <Heart size={16} weight="duotone" />
            {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          </button>
          <button
            type="button"
            className={`${
              isCompare ? 'text-orange-500' : 'text-gray-900'
            } flex items-center gap-1 text-sm hover:text-orange-500 duration-300 ease-in-out`}
          >
            <ArrowsClockwise size={16} />
            {isCompare ? 'Remover dos compare' : 'Adicionar aos compare'}
          </button>
        </div>
        {/* PAYMENTS */}
        <div className="flex flex-col gap-3 border border-gray-100 p-5">
          <span className="text-sm text-gray-900">Formas de pagamento</span>
        </div>
      </div>
    </Container>
  )
}

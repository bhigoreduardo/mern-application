/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { ShoppingCartSimple, Heart, ArrowsClockwise } from 'phosphor-react'

import { colors, product, payment } from '../../../../utils/mocks/public'
import config from '../../../../config'
import Container from '../common/container'
import Price from '../common/price'
import Count from '../buttons/count'
import Button from '../buttons/button'
import Carousel from '../carousel'
import RadioGroup from '../inputs/radio/group'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

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
  const stock = 10
  const handleDecrease = () => {}
  const handleIncrease = () => {}
  function customPaging(i) {
    return (
      <a className="flex items-center justify-center h-20 w-20 p-1 border rounded-sm duration-300 ease-in-out border-gray-100">
        <img
          src={`${serverPublicImages}/products/gallery-${i + 1}.jpg`}
          className="w-full h-full object-cover"
        />
      </a>
    )
  }

  return (
    <Container className="grid xl:grid-cols-2 grid-cols-1 gap-10 xl:mb-[90px]">
      {/* IMAGES */}
      <div className="flex flex-col gap-4 h-[calc(100%+90px)] xl:mb-0 mb-[90px]">
        <Carousel
          customPaging={customPaging}
          dots
          dotsClass="slick-dots slick-thumb"
          slidesToShow={1}
          responsive={[]}
        >
          {() =>
            product.productData.media.gallery.map((item, i) => (
              <div
                key={i}
                className="w-full h-[450px] p-2 border border-gray-100 rounded-sm"
              >
                <img
                  src={`${serverPublicImages}/${item}`}
                  className="w-ful h-full object-contain"
                />
              </div>
            ))
          }
        </Carousel>
      </div>
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
        <div className="flex flex-col gap-2">
          <RadioGroup
            label="Cor"
            name="color"
            data={colors}
            // error={formik.touched?.color && formik.errors?.color}
            // onChange={({ target: { value } }) => {
            //   const color = parsedColor?.find((item) => item.value === value)
            //   formik.setFieldValue('color', value)
            //   formik.setFieldValue('bg', color?.color)
            //   formik.setFieldValue('colorName', color?.label)
            // }}
            // selectedValue={formik.values.color}
            // onBlur={formik.handleBlur}
          />
          <p className="text-xs text-gray-600">
            <span className="font-semibold">Unidades:</span> {stock}
          </p>
        </div>
        {/* BUTTONS */}
        <div className="flex sm:flex-row flex-col gap-4">
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
        <div className="flex items-center justify-center sm:flex-row flex-col gap-4">
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
          <div className="flex items-center gap-1">
            {payment?.map((item, i) => (
              <div
                key={i}
                title={item.method}
                className="group relative h-7 w-10 p-1 bg-white border border-gray-200 rounded-sm cursor-pointer"
              >
                <img
                  src={`${serverPublicImages}/${item.image}`}
                  className="w-full h-full object-contain"
                />
                <div className="hidden absolute top-[calc(100%+10px)] left-0 p-1 bg-white border border-gray-200 group-hover:flex flex-col text-xs text-gray-600">
                  {item?.availableInstallments ? (
                    item.infoInstallments.map((item, i) => (
                      <span key={i} className="inline-block w-[100px]">
                        {item.installments}x{' '}
                        {Number(item.fee) !== 0
                          ? `+ ${item.fee}%a.m.`
                          : 'sem juros'}
                      </span>
                    ))
                  ) : (
                    <span className="inline-block w-[50px] text-center">
                      à vista
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

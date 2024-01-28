/* eslint-disable react/prop-types */
import { optionsFullLocaleDate } from '../../../utils/format'
import Heading from '../ui/table/heading'
import ToggleLabel from '../ui/inputs/toggle/label'
import FilterHistory from '../filters/history'
import ProductCard from '../ui/cards/product-card'
import { BadgeEnum } from '../../../types/enum-type'
import Button from '../ui/buttons/button'

export default function History({ history, isAdmin = false }) {
  const keys = history ? Object.keys(history) : []

  return (
    <>
      <Heading
        title="Histórico de navegação"
        btn={
          !isAdmin && (
            <ToggleLabel
              id="historyAvailable"
              name="historyAvailable"
              label="Ativar/desativar histórico de navegação"
            />
          )
        }
        className="!border-none !px-0 sm:flex-row flex-col gap-2"
      />
      <FilterHistory />
      {keys?.length > 0 ? (
        <>
          {Object.keys(history).map((key, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 border border-gray-100 rounded-sm shadow-md py-2"
            >
              <Heading
                title={`${new Date(key).toLocaleDateString(
                  'pt-BR',
                  optionsFullLocaleDate(false)
                )}`}
              />
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-6">
                {history[key].map((item, i) => (
                  <ProductCard
                    key={i}
                    badge={BadgeEnum.Offer}
                    badgeValue="18"
                    cover={item?.productData?.media?.cover}
                    backCover={item?.productData?.media?.backCover}
                    name={item.name}
                    rangePrice={item.rangePrice}
                  />
                ))}
              </div>
            </div>
          ))}
          <Button className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white w-fit mx-auto uppercase">
            Carregar mais
          </Button>
        </>
      ) : (
        <span className="text-sm text-gray-600 text-left">Sem resultados</span>
      )}
    </>
  )
}

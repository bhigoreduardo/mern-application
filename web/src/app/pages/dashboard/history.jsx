import { history } from '../../../utils/mocks/public'
import { optionsFullLocaleDate } from '../../../utils/format'
import { BadgeEnum } from '../../../types/public/enum-type'
import Heading from '../../components/ui/common/heading'
import FilterHistory from '../../components/filters/history'
import ToggleLabel from '../../components/ui/inputs/toggle/label'
import ProductCard from '../../components/ui/cards/product-card'
import Button from '../../components/ui/buttons/button'

export default function History() {
  const keys = history ? Object.keys(history) : []

  return (
    <section className="flex-grow flex flex-col gap-6">
      <Heading
        title="Histórico de navegação"
        btn={
          <ToggleLabel
            id="historyAvailable"
            name="historyAvailable"
            label="Ativar/desativar histórico de navegação"
          />
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
      {/* {keys?.length > 0 ? (
        <>
          {Object.keys(history)?.map((key) => (
            <div
              key={key}
              className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2"
            >
              <Heading
                title={`${new Date(key).toLocaleDateString(
                  'pt-BR',
                  optionsFullLocaleDate(false)
                )}`}
              />
              <div className="grid grid-cols-auto-250 gap-4 px-6">
                {history[key].map((item) => (
                  <CardProduct
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    cover={item?.productData?.media?.cover}
                    backCover={item?.productData?.media?.backCover}
                    rangePrice={item.rangePrice}
                    reviewsAvg={item.reviewsAvg}
                    reviews={item.reviews}
                  />
                ))}
              </div>
            </div>
          ))}
          <Button
            label="Carregar mais"
            // onClick={}
            className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white w-fit mx-auto"
          />
        </>
      ) : (
        <span className="text-sm text-gray-600 text-left">Sem resultados</span>
      )} */}
    </section>
  )
}

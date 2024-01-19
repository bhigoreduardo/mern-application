import { features } from '../../../../../utils/contants/public'
import { hero } from '../../../../../utils/mocks/public'
import FeatureCard from '../../../ui/cards/feature-card'
import HeroCard from '../../../ui/cards/hero-card'
import Container from '../../../ui/common/container'
import Slider from '../../../ui/slider'

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* SLIDER */}
          <div className="xl:w-[65%] w-[100%]">
            <Slider showIndicators>
              {hero?.slider?.map((item, i) => (
                <HeroCard
                  key={i}
                  title={item.title}
                  name={item?.product?.name}
                  description={item.description}
                  image={item?.product?.cover}
                  href={``}
                  offer={item?.product?.price}
                  className="flex-col-reverse xl:flex-row"
                />
              ))}
            </Slider>
          </div>
          {/* BANNER */}
          <div className="flex xl:flex-col md:flex-row flex-col gap-6 w-full">
            {hero?.banner?.map((item, i) => (
              <HeroCard
                key={i}
                subTitle={item.subTitle}
                name={item?.product?.name}
                image={item?.product?.cover}
                href={``}
                badge={item.badge}
                price={item?.product?.price}
                smallCard
                first={i === 0}
                className={`flex-col-reverse !text-start sm:flex-row ${
                  i === 0 && 'bg-gray-900'
                } ${i === 1 && 'sm:flex-row-reverse'}`}
              />
            ))}
          </div>
        </div>
        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 p-4 border border-gray-200 rounded-md">
          {features.map((item, i) => (
            <FeatureCard
              key={i}
              {...item}
              className={`
              justify-start
              ${features.length !== i + 1 && 'xl:border-r sm:border-gray-100'}
              ${(i + 1) % 2 !== 0 && 'sm:border-r'}
              `}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

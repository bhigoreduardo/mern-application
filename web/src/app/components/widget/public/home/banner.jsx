import { hero } from '../../../../../utils/mocks/public'
import HeroCard from '../../../ui/cards/hero-card'
import Container from '../../../ui/common/container'

export default function Banner() {
  return (
    <section>
      <Container className="flex items-center sm:flex-row flex-col justify-between gap-6">
        {hero?.slider?.map((item, i) => (
          <HeroCard
            key={i}
            bannerCard
            darkCard={i === 1}
            name={item?.product?.name}
            description={item.description}
            image={item?.product?.cover}
            href={``}
            badge={`Cozinha`}
            offer={i === 1 && item?.product?.price}
            className={`flex-col-reverse xl:flex-row ${
              i === 1 && 'bg-gray-900'
            }`}
          />
        ))}
      </Container>
    </section>
  )
}

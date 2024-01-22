/* eslint-disable react/prop-types */
import ReviewCard from '../cards/review-card'
import Pagination from '../common/pagination'
import ReviewAvg from './review-avg'

export default function Reviews({ reviews, reviewsAvg }) {
  return reviews !== undefined && reviews?.length > 0 ? (
    <section className="flex flex-col gap-6 border border-gray-200 p-6">
      <ReviewAvg
        reviewAvg={reviewsAvg?.avg}
        reviewsAmount={reviews?.length}
        starAmount={reviewsAvg?.starAmount}
      />
      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-base text-gray-900">
          Comentários dos clientes
        </h6>
        {reviews.map((item, i) => (
          <ReviewCard key={i} {...item} />
        ))}
        <Pagination total={10} pages={2} />
      </div>
    </section>
  ) : (
    <div className="flex items-center justify-center border border-gray-200 p-10">
      <span className="text-base text-gray-400">Sem avaliações</span>
    </div>
  )
}

/* eslint-disable react/prop-types */
import ReactStars from 'react-rating-stars-component'

export default function ReviewStar({ reviewsAvg, reviews }) {
  return reviewsAvg !== undefined && reviews?.length != 0 ? (
    <div className="flex items-center gap-1">
      <ReactStars
        count={5}
        size={16}
        value={reviewsAvg?.avg}
        edit={false}
        activeColor="#FA8232"
      />
      <span className="font-semibold text-sm text-gray-900">
        {reviewsAvg?.avg}
      </span>
      <span className="text-sm text-gray-400">
        ({reviews?.length} Avaliações)
      </span>
    </div>
  ) : (
    <span className="text-sm text-gray-400">Sem avaliações</span>
  )
}

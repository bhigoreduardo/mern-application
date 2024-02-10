/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider({ children }) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {children}
    </Swiper>
  )
}

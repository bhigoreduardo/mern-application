/* eslint-disable react/prop-types */
import { useState } from 'react'
import Slick from 'react-slick'

export default function Carousel({ children }) {
  const [onSwipe, setOnSwipe] = useState(false)
  const settings = {
    infinite: true,
    swipe: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slick
      autoplay={false}
      autoplaySpeed={5000}
      onSwipe={() => setOnSwipe(true)}
      afterChange={() => setOnSwipe(false)}
      slidesToShow={1}
      slidesToScroll={1}
      {...settings}
    >
      {children && children(onSwipe)}
    </Slick>
  )
}

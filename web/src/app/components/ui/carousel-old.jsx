/* eslint-disable react/prop-types */
import { useState } from 'react'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel({ children }) {
  const [onSwipe, setOnSwipe] = useState(false)
  const settings = {
    infinite: true,
    swipe: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

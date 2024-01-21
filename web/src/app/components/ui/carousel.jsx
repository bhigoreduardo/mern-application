/* eslint-disable react/prop-types */
import { useState } from 'react'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: props.isNonRenderArrow ? 'none' :'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        backgroundColor: '#f97316',
        borderRadius: '50%',
        paddingTop: 4,
        width: 30,
        height: 30,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  )
}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: props.isNonRenderArrow ? 'none' :'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        backgroundColor: '#f97316',
        borderRadius: '50%',
        paddingTop: 4,
        width: 30,
        height: 30,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  )
}

export default function Carousel({
  autoplay = false,
  swipe = true,
  slidesToShow = 5,
  autoplaySpeed = 5000,
  responsive,
  isNonRenderArrow = false,
  children,
}) {
  const [onSwipe, setOnSwipe] = useState(false)
  const settings = {
    autoplay,
    swipe,
    slidesToShow,
    autoplaySpeed,
    infinite: true,
    centerPadding: '60px',
    swipeToSlide: true,
    nextArrow: <NextArrow isNonRenderArrow={isNonRenderArrow} />,
    prevArrow: <PrevArrow isNonRenderArrow={isNonRenderArrow} />,
    dots: false,
    slidesToScroll: 1,
    responsive,
  }

  return (
    <Slick
      onSwipe={() => setOnSwipe(true)}
      afterChange={() => setOnSwipe(false)}
      {...settings}
    >
      {children && children(onSwipe)}
    </Slick>
  )
}

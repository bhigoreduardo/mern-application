/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Slider({
  autoPlay = true,
  infiniteLoop = true,
  showThumbs = false,
  showIndicators = false,
  showStatus = false,
  renderIndicator,
  children,
}) {
  return (
    <Carousel
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      showThumbs={showThumbs}
      showIndicators={showIndicators}
      showStatus={showStatus}
      renderIndicator={renderIndicator}
      emulateTouch
      renderArrowPrev={(clickHandler) => (
        <button
          type="button"
          onClick={clickHandler}
          className="absolute top-1/2 -translate-y-1/2 -left-[15px] bg-orange-500 p-1 rounded-full border-white hover:bg-orange-600 duration-300 ease-in-out z-10"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
      )}
      renderArrowNext={(clickHandler) => (
        <button
          type="button"
          onClick={clickHandler}
          className="absolute top-1/2 -translate-y-1/2 -right-[15px] bg-orange-500 p-1 rounded-full border-white hover:bg-orange-600 duration-300 ease-in-out z-10"
        >
          <ArrowRight size={20} className="text-white" />
        </button>
      )}
    >
      {children}
    </Carousel>
  )
}

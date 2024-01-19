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
  renderArrows = false,
  children,
}) {
  const indicatorStyles = {
    background: '#D1D5DB',
    width: 10,
    height: 10,
    borderRadius: '50%',
  }

  return (
    <Carousel
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      showThumbs={showThumbs}
      showIndicators={showIndicators}
      showStatus={showStatus}
      emulateTouch
      renderArrowPrev={(clickHandler) =>
        renderArrows && (
          <button
            type="button"
            onClick={clickHandler}
            className="absolute top-1/2 -translate-y-1/2 -left-[15px] bg-orange-500 p-1 rounded-full border-white hover:bg-orange-600 duration-300 ease-in-out z-10"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
        )
      }
      renderArrowNext={(clickHandler) =>
        renderArrows && (
          <button
            type="button"
            onClick={clickHandler}
            className="absolute top-1/2 -translate-y-1/2 -right-[15px] bg-orange-500 p-1 rounded-full border-white hover:bg-orange-600 duration-300 ease-in-out z-10"
          >
            <ArrowRight size={20} className="text-white" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) =>
        isSelected ? (
          <button
            type="button"
            style={{ ...indicatorStyles, background: '#111827' }}
            aria-label={`Selected: ${label} ${index + 1}`}
            title={`Selected: ${label} ${index + 1}`}
          />
        ) : (
          <button
            type="button"
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }
    >
      {children}
    </Carousel>
  )
}

// {
//   if (isSelected) {
//     return (
//       <li
//         style={{ ...indicatorStyles, background: '#000' }}
//         aria-label={`Selected: ${label} ${index + 1}`}
//         title={`Selected: ${label} ${index + 1}`}
//       />
//     )
//   }
//   return (
//     <li
//       style={indicatorStyles}
//       onClick={onClickHandler}
//       onKeyDown={onClickHandler}
//       value={index}
//       key={index}
//       role="button"
//       tabIndex={0}
//       title={`${label} ${index + 1}`}
//       aria-label={`${label} ${index + 1}`}
//     />
//   )
// }

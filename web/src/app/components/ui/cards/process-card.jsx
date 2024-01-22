/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { Check } from 'phosphor-react'

import { OrderStatusEnum } from '../../../../types/public/enum-type'
import { orderStatusIconItems } from '../../../../utils/contants/public'
import useMediaQuery from '../../../../hooks/use-mediaQuery'

const Bullet = ({ index, currIndex, className }) => (
  <span
    className={`flex items-center justify-center w-6 h-6 rounded-full z-10 border-[2px] text-white ${
      index !== 0 && '-ml-1'
    } ${className(index)}`}
  >
    {currIndex > index && <Check size={18} />}
  </span>
)

const Divider = ({ index, className }) => (
  <span
    className={`lg:w-[130px] md:w-[100px] w-[85px] h-2 -ml-1 ${className(
      index
    )}`}
  />
)

const IconBullet = ({ icon, label, colorIcon, index, className }) => (
  <span
    className={`flex flex-col items-center gap-1 lg:w-[100px] md:w-[70px] w-[55px] ${className(
      index,
      colorIcon
    )}`}
  >
    {icon}
    <span
      className={`font-semibold text-sm text-center text-gray-${className(
        index
      )}`}
    >
      {label}
    </span>
  </span>
)

export default function ProcessCard({ status }) {
  const matches = useMediaQuery('(min-width: 640px)')
  const bulletQuantity = 6
  let currIndex = 1
  Object.values(OrderStatusEnum).forEach((item, i) => {
    if (item === status) currIndex += i
  })
  const getBulletClassName = (key) => {
    if (key < currIndex) return 'bg-orange-500 border-orange-500'
    else if (key === currIndex) return 'bg-orange-500 border-white'
    return 'bg-orange-100 border-orange-500'
  }
  const getDividerClassName = (key) => {
    if (key < currIndex) return 'bg-orange-500'
    return 'bg-orange-100'
  }
  const getIconBulletClassName = (key, colorIcon) => {
    if (key <= currIndex) return colorIcon ? `text-${colorIcon}-500` : 500
    return colorIcon ? `text-${colorIcon}-200` : 200
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {matches && (
        <div className="w-fit flex items-center mx-auto">
          {Array.from({ length: bulletQuantity }).map((_, i) => (
            <Fragment key={i}>
              <Bullet
                index={i}
                currIndex={currIndex}
                className={getBulletClassName}
              />
              {i < bulletQuantity - 1 && (
                <Divider index={i} className={getDividerClassName} />
              )}
            </Fragment>
          ))}
        </div>
      )}

      <div className="w-fit flex items-center justify-center flex-wrap gap-12">
        {orderStatusIconItems.map((item, i) => (
          <IconBullet
            key={i}
            icon={item.icon}
            label={item.label}
            colorIcon={item.colorIcon}
            index={i}
            className={getIconBulletClassName}
          />
        ))}
      </div>
    </div>
  )
}

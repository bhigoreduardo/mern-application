/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ArrowsClockwise, CaretDown, CaretUp } from 'phosphor-react'

import Button from '../buttons/button'
import Heading from '../table/heading'

export default function Wrapper({ title, handleClear, children }) {
  const [isVisible, setIsVisible] = useState(true)
  const handleIsVisible = () => setIsVisible((prevState) => !prevState)

  return (
    <div className="flex flex-col gap-4 border border-100 rounded-sm shadow-md bg-white">
      <Heading
        title={title}
        btn={
          <div className="flex gap-2">
            {handleClear && (
              <Button
                title="Limpar"
                onClick={handleClear}
                className="text-orange-500 border !border-orange-500 !p-1 !rounded-full hover:bg-orange-500 hover:text-white transition-all duration-0"
              >
                <ArrowsClockwise size={14} />
              </Button>
            )}
            <Button
              onClick={handleIsVisible}
              className="bg-orange-500 text-white hover:bg-orange-600 !p-1 !rounded-full"
            >
              {!isVisible ? (
                <CaretDown size={14} className="text-white" />
              ) : (
                <CaretUp size={14} className="text-white" />
              )}
            </Button>
          </div>
        }
      />
      {isVisible && (
        <div className="flex flex-col gap-6 px-6 pb-3">{children}</div>
      )}
    </div>
  )
}

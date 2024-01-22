/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'
import useFilter from '../../../../hooks/use-filter'
import Arrow from '../buttons/arrow'
import Bullet from '../buttons/bullet'

export default function Pagination({ total, pages, className }) {
  const { page, setPage } = useFilter()
  const handlePage = (item) => setPage(item)
  const handleArrowPage = (direction) => {
    if (direction === 'right') {
      if (page === pages) return
      return setPage((prevState) => prevState + 1)
    }
    if (page === 1) return
    setPage((prevState) => prevState - 1)
  }

  return (
    <div
      className={mergeClassName('flex items-center justify-between', className)}
    >
      <p className="text-xs text-gray-600">
        <span className="font-semibold">({total})</span> Resultados
      </p>
      {pages > 1 && (
        <div className="flex items-center gap-5 w-fit">
          <Arrow onClick={() => handleArrowPage('left')} />
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }, (_, k) => k + 1).map((item) => (
              <Bullet
                key={item}
                label={item}
                selected={item === page}
                onClick={() => handlePage(item)}
              />
            ))}
          </div>
          <Arrow direction="right" onClick={() => handleArrowPage('right')} />
        </div>
      )}
    </div>
  )
}

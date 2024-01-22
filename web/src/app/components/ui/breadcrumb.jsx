import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { House, CaretRight } from 'phosphor-react'

import useQueries from '../../../hooks/use-queries'
import Container from './common/container'

export default function Breadcrumb() {
  const queries = useQueries()
  const queriesCategory = queries.get('categoria')?.split(',')
  const linkClassName = 'flex items-center gap-1 text-sm text-gray-600'

  return (
    <article className="bg-gray-50">
      <Container className="flex items-center gap-4 py-6 flex-wrap">
        {/* LINK DEFAULT */}
        <Link to="/" className={linkClassName}>
          <House size={16} weight="duotone" />
          Início
        </Link>
        <CaretRight size={12} className="text-gray-600" />
        <Link
          to="/loja"
          className={`${linkClassName} ${
            !queriesCategory?.length > 0 && '!text-blue-500'
          }`}
        >
          Loja
        </Link>
        {/* CATEGORIES */}
        {queriesCategory?.length > 0 &&
          queriesCategory.map((item, i) => (
            <Fragment key={i}>
              <CaretRight size={12} className="text-gray-600" />
              <Link
                to={`/loja/${item}`}
                className={`${linkClassName} ${
                  i + 1 == queriesCategory.length && '!text-blue-500'
                }`}
              >
                {item}
              </Link>
            </Fragment>
          ))}
      </Container>
    </article>
  )
}

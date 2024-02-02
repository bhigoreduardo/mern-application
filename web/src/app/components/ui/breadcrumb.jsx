/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { House, CaretRight } from 'phosphor-react'

import { toCapitalize } from '../../../utils/format'
import useQueries from '../../../hooks/use-queries'
import Container from './common/container'

const CategoryLink = ({ name, slug, className }) => (
  <>
    <CaretRight size={12} className="text-gray-600" />
    <Link to={`/loja?categoria=${slug}`} className={className}>
      {toCapitalize(name)}
    </Link>
  </>
)

export default function Breadcrumb({ product }) {
  const queries = useQueries()
  const queriesCategory = queries.get('categoria')?.split(',')
  const linkClassName = 'flex items-center gap-1 text-sm text-gray-600'
  let slug = ''

  return (
    <article className="bg-gray-50 mb-[50px]">
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
            !queriesCategory?.length > 0 && !product && '!text-blue-500'
          }`}
        >
          Loja
        </Link>
        {/* QUERIES CATEGORIES */}
        {queriesCategory?.length > 0 &&
          queriesCategory.map((item, i) => (
            <CategoryLink
              key={i}
              name={item}
              slug={item}
              className={`${linkClassName} ${
                i + 1 == queriesCategory.length && '!text-blue-500'
              }`}
            />
          ))}
        {/* PRODUCT */}
        {product !== null && product !== undefined && (
          <>
            {product?.category?.map((item, i) => {
              slug += i === 0 ? item.slug : ''
              slug += i > 0 ? `,${item.slug}` : ''

              return (
                <CategoryLink
                  key={i}
                  name={item.name}
                  slug={slug}
                  className={linkClassName}
                />
              )
            })}
            <CaretRight size={12} className="text-gray-600" />
            <span className={`${linkClassName} !text-blue-500`}>
              {toCapitalize(product.name)}
            </span>
          </>
        )}
      </Container>
    </article>
  )
}

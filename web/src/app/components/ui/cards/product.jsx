/* eslint-disable react/prop-types */
import config from '../../../../config'
import Offer from '../offer'
import Review from '../review'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES
const actions = ['ri-heart-line', 'ri-eye-line', 'ri-shuffle-line']

export default function CardProduct({
  image,
  name,
  biggest = false,
  smaller = false,
  details = true,
  description = false,
}) {
  return (
    <article
      className={`group relative flex flex-col gap-6 ${
        biggest && 'p-10 border border-gray-100 rounded-sm'
      } ${smaller && '!flex-row'}`}
    >
      {biggest && <Offer />}
      <div
        className={`relative overflow-hidden max-h-[400px] ${
          smaller && 'max-h-[160px] w-[130px]'
        }`}
      >
        <img
          src={`${SERVER_PUBLIC_IMAGES}/${image}`}
          className="object-contain transform duration-300 group-hover:scale-110 w-full"
        />
        <div className="absolute top-0 right-0 flex flex-col gap-1">
          {actions.map((item, i) => (
            <button
              key={i}
              className={`flex items-center justify-center w-7 h-7 p-2 bg-gray-100 rounded-full opacity-50 transition duration-300 group-hover:opacity-100 hover:bg-black hover:text-white text-black group-hover:translate-x-0 text-base ${
                i !== 0 && 'translate-x-full'
              }`}
            >
              <i className={item} />
            </button>
          ))}
        </div>
        <span className="absolute bottom-0 right-0 bg-slate-700 text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full">
          31%
        </span>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className={`flex gap-1 flex-col ${smaller && 'flex-col-reverse'}`}>
          <Review />
          <h3 className="font-rubik text-base line-clamp-2">{name}</h3>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-xl text-orange-500">R$190.00</span>
          <span className="text-xs text-gray-600 line-through">R$190.00</span>
        </div>
        {details && (
          <>
            <div
              className={`flex justify-between ${
                biggest ? 'flex-row items-center' : 'flex-col'
              }`}
            >
              <span className="text-sm text-gray-500">
                Quantidade: <strong>290</strong>
              </span>
              <span className="text-sm text-gray-500">
                Vendido: <strong>120</strong>
              </span>
            </div>
            <div className="w-full bg-gray-100 h-1 rounded-sm overflow-hidden">
              <div className="w-10 h-full bg-purple-600" />
            </div>
          </>
        )}
      </div>
      {description && (
        <div className="hidden group-hover:block duration-300 transition absolute top-full z-10 bg-gradient-to-br from-white from-50% to-gray-200 w-full px-4 py-6 rounded-b-md">
          <ul className="list-disc text-xs text-gray-500">
            <li>Poliéster, Algodão</li>
            <li>Importado</li>
            <li>Novo</li>
          </ul>
        </div>
      )}
    </article>
  )
}

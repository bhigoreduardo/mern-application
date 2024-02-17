import { Link } from 'react-router-dom'

import { parsedSelectData } from '../../../utils/format'
import Breadcrumb from '../../components/ui/breadcrumb'
import Container from '../../components/ui/container'
import Review from '../../components/ui/review'
import Badge from '../../components/ui/badge'
import RadioGroup from '../../components/ui/inputs/radio/group'
import Count from '../../components/ui/buttons/count'
import Button from '../../components/ui/buttons/button'

export default function Product() {
  const inStock = true
  const colors = [
    {
      _id: '659edb43f26a45ceed256d3b',
      name: 'Azul',
      slug: 'azul',
      color: '#1e40af',
    },
    {
      _id: '659edb43f26a45ceed256d3c',
      name: 'Preto',
      slug: 'preto',
      color: '#000',
    },
    {
      _id: '659edb43f26a45ce3d256d3b',
      name: 'Vermelho',
      slug: 'vermelho',
      color: '#FF0000',
    },
  ]
  const sizes = [
    {
      _id: '659edb43f26a45ceed256d3b',
      name: '40',
    },
    {
      _id: '659edb43f26a45ceed256d3c',
      name: '41',
    },
    {
      _id: '659edb43f26a45ce3d256d3b',
      name: '42',
    },
  ]
  const parsedColor = parsedSelectData(colors, '_id', 'name', ['color'])
  const parsedSize = parsedSelectData(sizes, '_id', 'name')

  return (
    <main>
      <Container className="2md:pt-10 flex flex-col gap-6">
        <Breadcrumb />
        {/* DESCRIPTION */}
        <div className="flex 2md:flex-row flex-col justify-between">
          <div className="flex-1">Image</div>
          <div className="flex-1 flex flex-col gap-4">
            <h1>Slip On Casual</h1>
            <div className="flex items-center gap-2">
              <Review />
              <Link className="font-semibold text-sm text-gray-900">
                Adicionar avaliação
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                className={`font-semibold text-xs bg-gray-50 px-1 py-2 ${
                  inStock ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {inStock ? 'Em estoque' : 'Fora de estoque'}
              </Badge>
              <span className="font-normal text-gray-600 text-xs">SKU-881</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-orange-500">R$190.00</span>
              <span className="text-xs text-gray-600 line-through">
                R$190.00
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup
                label="Cor"
                name="color"
                data={parsedColor}
                className="flex-1"
              />
              <RadioGroup
                label="Tamanho"
                name="size"
                data={parsedSize}
                isChildren
                className="flex-1"
              />
            </div>
            <div className="flex items-center xxs:flex-row flex-col gap-2">
              <Count
                handleDecrease={() => {}}
                handleIncrease={() => {}}
                value={2}
                className="xxs:min-w-[200px] min-w-full"
              />
              <Button className="text-white bg-red-400 hover:bg-gray-900 w-full">
                Adicionar ao carrinho
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button className="flex items-center gap-1 text-sm hover:text-purple-500 duration-300 ease-in-out">
                <i className="ri-heart-line text-lg" />
                Adicionar aos favoritos
              </Button>
              <Button className="flex items-center gap-1 text-sm hover:text-purple-500 duration-300 ease-in-out">
                <i className="ri-share-line text-lg" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

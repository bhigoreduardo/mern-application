/* eslint-disable react/prop-types */
import { useState } from 'react'

import Button from '../../../../ui/buttons/button'
import Wrapper from '../../../../ui/common/wrapper'
import Media from './media'
import Stocked from './stocked'
import Shipped from './shipped'

export const ACTIVED =
  'bg-orange-500 text-white hover:bg-orange-600 border-[2px]'
export const DESACTIVED =
  'text-orange-500 !border-orange-300 hover:text-white hover:bg-orange-600 hover:!border-orange-600 border-[2px]'

const SwitchType = ({ type, formik }) => {
  switch (type) {
    case 'media':
      return <Media formik={formik} />
    case 'stocked':
      return <Stocked formik={formik} />
    case 'shipped':
      return <Shipped formik={formik} />
    default:
      return null
  }
}

export default function Data(props) {
  const [switchType, setSwitchType] = useState('media')
  const buttonActived = (type) => (type === switchType ? ACTIVED : DESACTIVED)

  return (
    <Wrapper title="Dados do produto">
      <div className="flex gap-3">
        <Button
          className={`${buttonActived('media')} uppercase`}
          onClick={() => setSwitchType('media')}
        >
          Imagens
        </Button>
        <Button
          className={`${buttonActived('stocked')} uppercase`}
          onClick={() => setSwitchType('stocked')}
        >
          Estoque
        </Button>
        <Button
          className={`${buttonActived('shipped')} uppercase`}
          onClick={() => setSwitchType('shipped')}
        >
          Entrega
        </Button>
      </div>
      <SwitchType type={switchType} formik={props.formik} />
    </Wrapper>
  )
}

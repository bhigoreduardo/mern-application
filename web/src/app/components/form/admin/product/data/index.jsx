/* eslint-disable react/prop-types */
import { useState } from 'react'

import Button from '../../../../ui/buttons/button'
import Wrapper from '../../../../ui/common/wrapper'
import Media from './media'
import Stocked from './stocked'
import Shipped from './shipped'

const ACTIVED = 'bg-orange-500 text-white hover:bg-orange-600 border-[2px]'
const DESACTIVED =
  'text-orange-500 !border-orange-300 hover:text-white hover:bg-orange-600 hover:!border-orange-600 border-[2px]'

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
      {switchType === 'media' ? (
        <Media formik={props.formik} />
      ) : switchType === 'stocked' ? (
        <Stocked formik={props.formik} />
      ) : (
        <Shipped formik={props.formik} />
      )}
    </Wrapper>
  )
}

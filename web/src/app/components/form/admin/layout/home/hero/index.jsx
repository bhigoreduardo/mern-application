/* eslint-disable react/prop-types */
import { useState } from 'react'

import { ACTIVED, DESACTIVED } from '../../../product/data'
import Button from '../../../../../ui/buttons/button'
import Wrapper from '../../../../../ui/common/wrapper'
import Main from './main'
import Banner from './banner'

const SwitchType = ({ type }) => {
  switch (type) {
    case 'slider':
      return <Main />
    case 'banner':
      return <Banner />
    default:
      return null
  }
}

export default function Hero() {
  const [switchType, setSwitchType] = useState('slider')
  const buttonActived = (type) => (type === switchType ? ACTIVED : DESACTIVED)

  return (
    <Wrapper title="Seção principal">
      <div className="flex gap-3">
        <Button
          className={`${buttonActived('slider')} uppercase`}
          onClick={() => setSwitchType('slider')}
        >
          Slider
        </Button>
        <Button
          className={`${buttonActived('banner')} uppercase`}
          onClick={() => setSwitchType('banner')}
        >
          Bannner
        </Button>
      </div>
      <SwitchType type={switchType} />
    </Wrapper>
  )
}

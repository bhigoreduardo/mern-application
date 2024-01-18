/* eslint-disable react/prop-types */
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'

import { mergeClassName } from '../../../../utils/format'

export default function SocialIcons({ size = 16, className }) {
  return (
    <>
      <TwitterLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
      <FacebookLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
      <InstagramLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
      <LinkedinLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
      <YoutubeLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
      <WhatsappLogo
        size={size}
        weight="duotone"
        className={mergeClassName('text-white', className)}
      />
    </>
  )
}

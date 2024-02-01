/* eslint-disable react/prop-types */
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  PinterestLogo,
  YoutubeLogo,
} from 'phosphor-react'

import { store } from '../../../../utils/mock'
import { mergeClassName } from '../../../../utils/format'

export default function SocialIcons({ size = 16, className }) {
  return (
    <>
      <a href={store.socialMedia.twitter} target="blank">
        <TwitterLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
      <a href={store.socialMedia.facebook} target="blank">
        <FacebookLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
      <a href={store.socialMedia.instagram} target="blank">
        <InstagramLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
      <a href={store.socialMedia.linkedin} target="blank">
        <LinkedinLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
      <a href={store.socialMedia.youtube} target="blank">
        <YoutubeLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
      <a href={store.socialMedia.pinterest} target="blank">
        <PinterestLogo
          size={size}
          weight="duotone"
          className={mergeClassName('text-white', className)}
        />
      </a>
    </>
  )
}

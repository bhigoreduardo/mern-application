import { pages } from '../../../../../utils/contants/public'
import FooterLink from '../../../ui/buttons/footer-link'

export default function PageNav() {
  return (
    <div className="flex flex-col gap-3 w-[200px]">
      <h4 className="font-semibold text-white text-base uppercase">Páginas</h4>
      <div className="flex flex-col gap-2">
        {pages?.map((item, i) => (
          <FooterLink key={i} label={item.name} href={item.slug} />
        ))}
      </div>
    </div>
  )
}

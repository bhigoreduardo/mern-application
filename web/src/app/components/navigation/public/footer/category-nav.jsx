import { ArrowRight } from 'phosphor-react'

import { categories } from '../../../../../utils/mock'
import Button from '../../../ui/buttons/button'
import FooterLink from '../../../ui/buttons/footer-link'

export default function CategoryNav() {
  return (
    <div className="flex flex-col gap-3 w-[200px]">
      <h4 className="font-semibold text-white text-base uppercase">
        Categorias
      </h4>
      <div className="flex flex-col gap-2">
        {categories?.map((item, i) => (
          <FooterLink key={i} label={item.name} to={item.slug} />
        ))}
        <Button className="normal-case !justify-start !gap-1 text-yellow-500 text-sm !p-0">
          Todos
          <ArrowRight size={16} className="text-yellow-500" />
        </Button>
      </div>
    </div>
  )
}

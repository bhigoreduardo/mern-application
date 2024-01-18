import { Heart } from 'phosphor-react'

import Container from './container'

export default function Copyright() {
  return (
    <section className="bg-gray-900 border-t border-gray-600">
      <Container className="flex justify-center py-6">
        <span className="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-300">
          Furniture - eCommerce &copy; {new Date().getFullYear()} | Todos os
          direitos reservados. Desenvolvido com
          <Heart className="text-red-500" /> por
          <a>Higor Eduardo</a>
        </span>
      </Container>
    </section>
  )
}

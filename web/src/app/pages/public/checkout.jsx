import { cart } from '../../../utils/mocks/public'
import Container from '../../components/ui/common/container'
import FormCheckout from '../../components/form/public/checkout'
import Empty from '../../components/widget/public/common/empty'

export default function Checkout() {
  const cartItems = new Array(10).fill(cart)

  return (
    <section>
      {cartItems?.length > 0 ? (
        <Container className="py-16">
          <FormCheckout />
        </Container>
      ) : (
        <Empty
          title="Carrinho vazio"
          description="Navegue em nossa loja e escolha os produtos."
        />
      )}
    </section>
  )
}

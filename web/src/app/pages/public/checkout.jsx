import { orders } from '../../../utils/mock'
import useQueries from '../../../hooks/use-queries'
import Container from '../../components/ui/common/container'
import FormCheckout from '../../components/form/public/checkout'
import Empty from '../../components/widget/public/common/empty'
import CheckoutSuccess from '../../components/widget/public/checkout-sucess'

export default function Checkout() {
  const successQueries = useQueries().get('sucesso')
  const checkoutSuccess = successQueries && !!parseInt(successQueries)
  const cartItems = orders[0].cart

  return (
    <section>
      {cartItems?.length > 0 ? (
        <Container className="py-16">
          {successQueries ? (
            <CheckoutSuccess isSuccess={checkoutSuccess} />
          ) : (
            <FormCheckout />
          )}
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

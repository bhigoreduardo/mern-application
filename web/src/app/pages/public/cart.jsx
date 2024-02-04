import useApp from '../../../hooks/use-app'
import CartItems from '../../components/widget/public/cart-items'
import Empty from '../../components/widget/public/common/empty'

export default function Cart() {
  const { cartItems } = useApp()

  return (
    <section>
      {cartItems?.length > 0 ? (
        <CartItems />
      ) : (
        <Empty
          title="Carrinho vazio"
          description="Navegue em nossa loja e escolha os produtos."
        />
      )}
    </section>
  )
}

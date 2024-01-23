import { customer } from '../../../utils/mocks/public'
import AddressCard from '../../components/ui/cards/address-card'

export default function Address() {
  const user = customer
  const address = user?.address

  return (
    <section className="flex-grow flex flex-col gap-6">
      <AddressCard address={address} href="/conta/configuracao" />
    </section>
  )
}

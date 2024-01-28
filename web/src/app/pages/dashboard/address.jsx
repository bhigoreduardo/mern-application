import { customers } from '../../../utils/mock'
import AddressCard from '../../components/ui/cards/address-card'

export default function Address() {
  const user = customers[0]
  const address = user?.address

  return (
    <section className="flex-grow flex flex-col gap-6">
      <AddressCard address={address} href="/conta/configuracao" />
    </section>
  )
}

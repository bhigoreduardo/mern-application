import Container from '../../../ui/common/container'
import SocialIcons from '../../../ui/icons/social-icon'

export default function TopNav() {
  return (
    <div className="bg-blue-900 text-white border-b border-gray-600">
      <Container className="flex items-center justify-center sm:justify-between py-3">
        <span className="hidden sm:inline-block text-sm font-thin text-center">
          Bem-vindo a Furniture eCommerce de móveis.
        </span>
        <div className="flex items-center gap-3">
          <span className="text-sm font-thin">Siga nos:</span>
          <SocialIcons />
        </div>
      </Container>
    </div>
  )
}

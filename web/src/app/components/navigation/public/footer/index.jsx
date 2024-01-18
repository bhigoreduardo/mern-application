import Container from '../../../ui/common/container'
import AboutNav from './about-nav'
import CategoryNav from './category-nav'
import ContactNav from './contact-nav'
import PageNav from './page-nav'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 py-16 gap-6">
        <AboutNav />
        <CategoryNav />
        <PageNav />
        <ContactNav />
      </Container>
    </footer>
  )
}

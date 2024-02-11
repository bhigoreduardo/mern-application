import { mobileLinks } from '../../../../../utils/contants/public'
import useApp from '../../../../../hooks/use-app'
import Container from '../../../ui/container'

export default function Tab() {
  const { setOpenSearch } = useApp()
  return (
    <section className="bg-gray-100 fixed w-full bottom-0 right-0 left-0 py-2 z-50">
      <Container>
        <ul className="flex items-center justify-around xs:gap-6 gap-1">
          {mobileLinks.map((item, i) => (
            <li
              key={i}
              onClick={() =>
                i === 3 && setOpenSearch((prevState) => !prevState)
              }
              className="flex flex-col items-center justify-center text-gray-500 text-xs"
            >
              <i className={`${item.icon}`} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

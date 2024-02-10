import { footerLinks } from '../../../../utils/contants/public'
import { social } from '../../../../utils/mock'
import Container from '../../ui/container'
import Logo from '../../ui/logo'

export default function Footer() {
  return (
    <footer>
      {/* NEWSLETTER */}
      <section className="bg-slate-700 text-white">
        <Container className="flex flex-col gap-6 py-10">
          <div className="flex md:items-end md:flex-row flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3>Assine nossa newsletter</h3>
              <p className="text-gray-200">
                Receba atualizações por e-mail sobre nossa loja mais recente e{' '}
                <strong>ofertas especiais</strong>
              </p>
            </div>
            <form className="relative w-full md:max-w-[500px]">
              <i className="hidden ri-mail-line absolute top-0 left-0 h-full px-6 rounded-l-md text-gray-600 bg-gray-200 sm:flex items-center" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Insira seu email"
                className="w-full font-normal pr-28 sm:pl-20 pl-2 text-sm py-2 rounded-md"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-6 bg-red-400 rounded-r-md text-sm hover:bg-gray-900 text-white duration-300 ease-in-out transition-all"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </Container>
      </section>
      {/* LINKS */}
      <section className="bg-gray-100">
        <Container className="flex flex-col gap-6 py-10">
          <div className="flex gap-6 py-10 flex-wrap">
            {footerLinks.map((item, i) => (
              <div key={i} className="flex-1 min-w-[250px] flex flex-col gap-3">
                <h4>{item.title}</h4>
                <ul className="flex flex-col gap-1 font-normal text-gray-400 text-sm">
                  {item.children.map((value, key) => (
                    <li key={key}>{value.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white">
        <Container className="flex flex-col items-center gap-6 py-6">
          <div className="flex flex-col items-center gap-2 z-10">
            <Logo />
            <ul className="flex items-center gap-2">
              {social.map((item, i) => (
                <li
                  key={i}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white duration-300 transition ease-in-out"
                >
                  <i className={`${item.icon} text-xl`} />
                </li>
              ))}
            </ul>
          </div>
          <span className="text-sm text-gray-400">
            Copyright {new Date().getFullYear()} @ Store. Todos os direitos
            reservados
          </span>
        </Container>
      </section>
    </footer>
  )
}

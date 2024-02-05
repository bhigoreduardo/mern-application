import Container from '../../../ui/container'

export default function BottomNav() {
  return (
    <section className="bg-slate-700">
      <Container className="flex items-center gap-5 py-5">
        <div className="relative flex flex-col gap-1 py-3 px-6 rounded-t-md -mb-8 bg-red-400 w-[300px]">
          <h5 className="font-semibold text-white text-base">
            Todos departamentos
          </h5>
          <span className="text-sm text-white">Total 1298 produtos</span>
          <button type="button" className="absolute top-5 right-5 text-white">
            <i className="ri-menu-3-line text-xl" />
          </button>
        </div>
        <form className="relative flex-1">
          <i className="ri-search-line absolute top-0 left-0 h-full px-6 rounded-l-md text-gray-600 bg-gray-200 flex items-center" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Pesquisar produtos"
            className="w-full font-normal pr-28 pl-20 text-sm py-2 rounded-md"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full px-6 bg-gray-200 text-gray-600 rounded-r-md text-sm hover:bg-gray-900 hover:text-white duration-300 ease-in-out transition-all"
          >
            Pesquisar
          </button>
        </form>
      </Container>
    </section>
  )
}

import { layout } from '../../../../utils/mock'
import { layoutColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import TableData from '../../../components/ui/table/data'

export default function Layout() {
  const matches = useMediaQuery('(max-width: 640px)')
  const docs = layout

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <TableData
        title="Layout"
        columns={layoutColumns}
        data={docs}
        total={10}
        pages={2}
        smallTable={matches}
      />
    </section>
  )
}

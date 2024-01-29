import { layout } from '../../../../utils/mock'
import { layoutColumns } from '../../../../utils/contants/admin'
import TableData from '../../../components/ui/table/data'

export default function Layout() {
  const docs = layout

  return (
    <section className="flex-grow flex flex-col gap-6">
      <TableData
        title="Layout"
        columns={layoutColumns}
        data={docs}
        total={10}
        pages={2}
      />
    </section>
  )
}

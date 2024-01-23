/* eslint-disable react/prop-types */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { mergeClassName } from '../../../../utils/format'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './'
import Heading from '../common/heading'
import Pagination from '../common/pagination'

export default function Data({
  title,
  btn,
  columns,
  data,
  total,
  pages,
  isColumn,
  isHeader = true,
  className,
}) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })
  if (typeof data === 'undefined') return

  return (
    <div
      className={mergeClassName(
        'flex flex-col border border-100 rounded-sm shadow-md py-2 pb-4',
        className
      )}
    >
      {title && <Heading title={title} btn={btn} />}
      <Table className={`${isColumn && 'flex'}`}>
        {isHeader && (
          <TableHeader>
            {table.getHeaderGroups()?.map((item, i) => (
              <TableRow
                key={i}
                className={`${isColumn && 'flex flex-col h-full !items-start'}`}
              >
                {item.headers?.map((value, key) => (
                  <TableHead
                    key={key}
                    // className={`${isColumn && 'first-of-type:py-[190px]'}`}
                    className={`${
                      isColumn &&
                      'first-of-type:flex-grow first-of-type:flex first-of-type:items-center flex-none text-sm h-[20px]'
                    }`}
                  >
                    {value.isPlaceholder
                      ? null
                      : flexRender(
                          value.column.columnDef.header,
                          value.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
        )}
        <TableBody className={`${isColumn && 'flex overflow-x-auto'}`}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((item, i) => (
              <TableRow
                key={i}
                data-state={item.getIsSelected() && 'selected'}
                className={`${isColumn && 'flex flex-col !items-start'}`}
              >
                {item.getVisibleCells().map((value, key) => (
                  <TableCell
                    key={key}
                    className={`${isColumn && 'flex-none min-w-[256px]'}`}
                  >
                    {flexRender(
                      value.column.columnDef.cell,
                      value.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>Sem resultados</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {typeof total !== 'undefined' && typeof pages !== 'undefined' && (
        <Pagination total={total} pages={pages} className="mt-6 px-6" />
      )}
    </div>
  )
}

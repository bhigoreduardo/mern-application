/* eslint-disable react/prop-types */
import { MagnifyingGlass } from 'phosphor-react'

import { product } from '../../../../utils/mocks/public'
import { mergeClassName, parsedSelectData } from '../../../../utils/format'
import config from '../../../../config'
import TextLabel from '../../ui/inputs/text/label'
import Check from '../../ui/inputs/check'
import TableData from '../../ui/table/data'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function Highlight(props) {
  const docs = new Array(10).fill(product)
  const docsParsed =
    docs && parsedSelectData(docs, '_id', 'name', ['productData'])
  const data = docs

  return (
    <div className={mergeClassName('flex flex-col gap-4', props.className)}>
      <div className="flex flex-col gap-2">
        <TextLabel
          label="Produtos"
          id="searchProduct"
          placeholder="Pesquisar"
          name="searchProduct"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          icon={<MagnifyingGlass className="text-gray-400" weight="duotone" />}
          className="flex-grow"
        />
        {/* {props.formik.touched.product && props.formik.errors.product && (
          <span className="text-xs text-red-500">
            {props.formik.errors.product}
          </span>
        )} */}
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {docsParsed?.map((item) => (
          <label
            key={item.value}
            htmlFor={item.value}
            className="p-1 border border-gray-100 rounded-sm w-[100px] h-[100px] flex items-center justify-between"
          >
            <Check
              id={item.value}
              value={item.value}
              name="product"
              // onChange={(e) =>
              //   props.formik.setFieldValue('product', handleProduct(e))
              // }
              // checked={props.formik.values?.product?.includes(item.value)}
            />
            <div className="flex flex-grow flex-col items-center justify-center">
              <img
                src={`${serverPublicImages}/${item?.productData?.media?.cover}`}
                alt={item.label}
                className="w-14 h-14 rounded-sm"
              />
              <span className="text-xs text-gray-600 line-clamp-2 text-center">
                {item.label}
              </span>
            </div>
          </label>
        ))}
      </div>
      <div className="overflow-y-auto max-h-[400px]">
        <TableData
          columns={props.columns}
          data={data}
          className="!p-0 !border-none !shadow-none"
        />
      </div>
    </div>
  )
}

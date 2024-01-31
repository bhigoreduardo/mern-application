/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useFormik } from 'formik'
import { PlusCircle } from 'phosphor-react'

import { colors } from '../../../../../../utils/mock'
import {
  inventoryInitialValues,
  inventoryValidationInfoSchema,
} from '../../../../../../types/admin/form-type'
import { parsedSelectData } from '../../../../../../utils/format'
import { invetoryProductColumns } from '../../../../../../utils/contants/admin'
import ToggleLabel from '../../../../ui/inputs/toggle/label'
import SelectLabel from '../../../../ui/inputs/select/label'
import TextLabel from '../../../../ui/inputs/text/label'
import Button from '../../../../ui/buttons/button'
import TableData from '../../../../ui/table/data'
import DatePickerLabel from '../../../../ui/inputs/datepicker/label'

export default function Stocked(props) {
  const [indexEdit, setIndexEdit] = useState(null)
  const parsedColors = colors ? parsedSelectData(colors, '_id', 'name') : []
  const formik = useFormik({
    initialValues: inventoryInitialValues,
    validationSchema: inventoryValidationInfoSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = (values) => console.log(values)
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 flex-wrap">
        <ToggleLabel
          id="productData.inventory.manageStock"
          name="productData.inventory.manageStock"
          label="Controle de estoque"
          error={
            props.formik.touched?.productData?.inventory?.manageStock &&
            props.formik.errors?.productData?.inventory?.manageStock
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.productData?.inventory?.manageStock}
          checked={props.formik.values?.productData?.inventory?.manageStock}
        />
        <ToggleLabel
          id="productData.inventory.stockStatus"
          name="productData.inventory.stockStatus"
          label="Exibir estoque"
          error={
            props.formik.touched?.productData?.inventory?.stockStatus &&
            props.formik.errors?.productData?.inventory?.stockStatus
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.productData?.inventory?.stockStatus}
          checked={props.formik.values?.productData?.inventory?.stockStatus}
        />
        <ToggleLabel
          id="productData.inventory.lowStockWarning"
          name="productData.inventory.lowStockWarning"
          label="Aviso de baixo estoque"
          error={
            props.formik.touched?.productData?.inventory?.lowStockWarning &&
            props.formik.errors?.productData?.inventory?.lowStockWarning
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.productData?.inventory?.lowStockWarning}
          checked={props.formik.values?.productData?.inventory?.lowStockWarning}
        />
      </div>
      <div className="flex gap-4 sm:flex-row flex-col">
        <SelectLabel
          id="color"
          label="Cor"
          name="color"
          placeholder="Cor"
          data={parsedColors}
          error={formik.touched?.color && formik.errors?.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.color}
          className="flex-grow flex-1"
        />
        <TextLabel
          id="stock"
          type="number"
          label="Quantidade"
          placeholder="Infome a quantidade"
          name="stock"
          error={formik.touched?.stock && formik.errors?.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.stock}
          className="flex-grow flex-1"
        />
        <TextLabel
          id="price"
          type="number"
          label="Preço"
          placeholder="Infome o preço"
          name="price"
          error={formik.touched?.price && formik.errors?.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.price}
          className="flex-grow flex-1"
        />
      </div>
      <div className="flex gap-4 sm:flex-row flex-col">
        <TextLabel
          id="offer.offerValue"
          type="number"
          label="Desconto"
          placeholder="Infome o desconto"
          name="offer.offerValue"
          error={
            formik.touched?.offer?.offerValue &&
            formik.errors?.offer?.offerValue
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.offer?.offerValue}
          className="flex-grow flex-1"
        />
        {formik.values?.offer?.offerValue !== 0 && (
          <>
            <SelectLabel
              id="offer.offerType"
              label="Tipo desconto"
              name="offer.offerType"
              placeholder="Selecione"
              // data={offer}
              error={
                formik.touched?.offer?.offerType &&
                formik.errors?.offer?.offerType
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.offer?.offerType}
              className="flex-grow flex-1"
            />
            <TextLabel
              id="offer.offerPrice"
              type="number"
              label="Preço desconto"
              placeholder="Desconto final"
              name="offer.offerPrice"
              error={
                formik.touched?.offer?.offerPrice &&
                formik.errors?.offer?.offerPrice
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.offer?.offerPrice}
              className="flex-grow flex-1"
              disabled
            />
          </>
        )}
      </div>
      <div className="flex gap-4 sm:flex-row flex-col">
        {formik.values?.offer?.offerValue !== 0 && (
          <DatePickerLabel
            id="expiresIn"
            label="Data limite"
            name="expiresIn"
            placeholder="Selecione a data"
            startDate={
              formik.values?.offer?.offerPriceDates[0]
                ? new Date(formik.values?.offer?.offerPriceDates[0])
                : null
            }
            endDate={
              formik.values?.offer?.offerPriceDates[1]
                ? new Date(formik.values?.offer?.offerPriceDates[1])
                : null
            }
            onChange={(update) =>
              formik.setFieldValue('offer.offerPriceDates', update)
            }
            className="flex-grow flex-1"
          />
        )}
        <ToggleLabel
          id="featured"
          name="featured"
          label="Pronta entrega"
          error={formik.touched?.featured && formik.errors?.featured}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.featured}
          checked={formik.values?.featured}
          className="flex-grow flex-1"
        />
      </div>
      <Button
        onClick={formik.handleSubmit}
        className="bg-orange-500 text-white hover:bg-orange-600 !py-2 w-fit uppercase"
      >
        {indexEdit !== null ? 'Salvar' : 'Adicionar'}
        <PlusCircle size={16} />
      </Button>
      <div className="flex flex-col gap-3 overflow-y-auto max-[300px]">
        {props.formik.touched?.productData?.inventory?.info &&
          props.formik.errors?.productData?.inventory?.info && (
            <span className="text-xs text-red-500">
              {props.formik.errors?.productData?.inventory?.info}
            </span>
          )}
        <TableData
          columns={invetoryProductColumns(handleEdit, handleDelete)}
          data={props.formik.values?.productData?.inventory?.info?.map(
            (item) => ({
              ...item,
              color: parsedColors.find((i) => i.value === item.color)?.label,
            })
          )}
          className="!p-0"
        />
      </div>
    </div>
  )
}

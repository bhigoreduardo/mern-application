/* eslint-disable no-unsafe-optional-chaining */
import { useState } from 'react'
import { useFormik } from 'formik'
import { XCircle } from 'phosphor-react'

import { payments } from '../../../../../utils/mock'
import {
  installmentValidationSchema,
  paymentInitialValues,
  paymentValidationSchema,
} from '../../../../../types/admin/form-type'
import { paymentColumns } from '../../../../../utils/contants/admin'
import ImageLabel from '../../../ui/inputs/image/label'
import TextLabel from '../../../ui/inputs/text/label'
import ToggleLabel from '../../../ui/inputs/toggle/label'
import Button from '../../../ui/buttons/button'
import Badge from '../../../ui/common/badge'
import TableData from '../../../ui/table/data'

export default function Payment() {
  const [indexEdit, setIndexEdit] = useState(null)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: paymentInitialValues,
    validationSchema: paymentValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const installmentFormik = useFormik({
    enableReinitialize: true,
    initialValues: { installments: '', fee: '' },
    validationSchema: installmentValidationSchema,
    onSubmit: (values) => {
      formik.setFieldValue('infoInstallments', [
        ...formik?.values?.infoInstallments,
        values,
      ])
      installmentFormik.resetForm()
    },
  })
  const handleSubmit = async (values) => console.log(values)
  const handleEdit = () => {}
  const handleDelete = () => {}
  const handleRemove = () => {}

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 sm:flex-row flex-col">
          <ImageLabel
            id="image"
            label="Imagem"
            name="image"
            info="800*800"
            error={formik.touched.image && formik.errors.image}
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            onClear={() => formik.setFieldValue('image', '')}
            className="mx-auto"
          />
          <div className="flex-grow flex flex-col gap-4">
            <div className="flex gap-4 md:flex-row flex-col">
              <TextLabel
                id="method"
                label="Método"
                placeholder="Infome método"
                name="method"
                error={formik.touched?.method && formik.errors?.method}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.method}
                className="flex-grow"
              />
              <ToggleLabel
                id="availableGateway"
                name="availableGateway"
                label="Integrado com gateway"
                onChange={formik.handleChange}
                value={formik.values.availableGateway}
                checked={formik.values.availableGateway}
                className="flex-grow"
              />
              <ToggleLabel
                id="availableInstallments"
                name="availableInstallments"
                label="Aceita parcela"
                onChange={formik.handleChange}
                value={formik.values.availableInstallments}
                checked={formik.values.availableInstallments}
                className="flex-grow"
              />
            </div>
            {formik.values.availableInstallments && (
              <div className="flex flex-col gap-4">
                <div className="flex-grow flex-1 flex gap-4 sm:flex-row flex-col">
                  <TextLabel
                    id="installments"
                    label="Parcela"
                    placeholder="Infome a parcela"
                    name="installments"
                    error={
                      installmentFormik.touched?.installments &&
                      installmentFormik.errors?.installments
                    }
                    onChange={installmentFormik.handleChange}
                    onBlur={installmentFormik.handleBlur}
                    value={installmentFormik.values?.installments}
                    className="flex-grow"
                  />
                  <TextLabel
                    id="fee"
                    label="Taxa"
                    placeholder="Infome a taxa ao mês"
                    name="fee"
                    error={
                      installmentFormik.touched?.fee &&
                      installmentFormik.errors?.fee
                    }
                    onChange={installmentFormik.handleChange}
                    onBlur={installmentFormik.handleBlur}
                    value={installmentFormik.values?.fee}
                    className="flex-grow"
                  />
                  <Button
                    onClick={installmentFormik.handleSubmit}
                    className="bg-orange-500 text-white hover:bg-orange-600 !py-2 h-[37.6px] mt-7 uppercase"
                  >
                    Adicionar
                  </Button>
                </div>
                <div className="flex flex-wrap justify-start gap-1">
                  {formik?.values?.infoInstallments?.length > 0 &&
                    formik?.values?.infoInstallments.map((item, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => handleRemove(i)}
                        className="group relative"
                      >
                        <Badge className="bg-gray-200">
                          {item.installments}x{' '}
                          {Number(item.fee) !== 0
                            ? `+ ${item.fee}%a.m.`
                            : 'sem juros'}
                        </Badge>
                        <Badge className="w-full hidden group-hover:inline-flex justify-center text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-40">
                          <XCircle size={20} />
                        </Badge>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
        >
          {indexEdit !== null ? 'Salvar' : 'Adicionar'}
        </Button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px]">
        {formik.touched?.payments && formik.errors?.payments && (
          <span className="text-xs text-red-500">
            {formik.errors?.payments}
          </span>
        )}
        <TableData
          columns={paymentColumns(handleEdit, handleDelete)}
          data={payments}
          className="!p-0"
        />
      </div>
    </form>
  )
}

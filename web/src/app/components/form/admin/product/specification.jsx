/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useFormik } from 'formik'
import { CheckCircle, PlusCircle } from 'phosphor-react'

import {
  otherInfoInitialValues,
  otherInfoValidationsSchema,
} from '../../../../../types/admin/form-type'
import { infoProductColumns } from '../../../../../utils/contants/admin'
import useMediaQuery from '../../../../../hooks/use-mediaQuery'
import Button from '../../../ui/buttons/button'
import Heading from '../../../ui/table/heading'
import Wrapper from '../../../ui/common/wrapper'
import TextLabel from '../../../ui/inputs/text/label'
import TextRichLabel from '../../../ui/inputs/textrich/label'
import TableData from '../../../ui/table/data'

export default function Specification(props) {
  const [indexEdit, setIndexEdit] = useState(null)
  const matches = useMediaQuery('(max-width: 640px)')
  const formik = useFormik({
    initialValues: otherInfoInitialValues,
    validationSchema: otherInfoValidationsSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)
  const handleClear = () => {}
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <Wrapper title="Especificações" handleClear={handleClear}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <Heading
            title="Detalhe"
            btn={
              <Button
                onClick={formik.handleSubmit}
                label={indexEdit !== null ? '' : ''}
                className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
              >
                {indexEdit !== null ? (
                  <>
                    Salvar
                    <CheckCircle size={16} className="text-white" />
                  </>
                ) : (
                  <>
                    Adicionar
                    <PlusCircle size={16} className="text-white" />
                  </>
                )}
              </Button>
            }
            className="!normal-case !px-0"
          />
          <TextLabel
            id="title"
            placeholder="Infome título da informação"
            name="title"
            error={formik.touched.title && formik.errors.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="flex-grow"
          />
          <TextRichLabel
            id="description"
            placeholder="Informe a descrição"
            onChange={(value) => formik.setFieldValue('description', value)}
            value={formik.values.description}
            error={formik.touched.description && formik.errors.description}
            className="mb-6"
          />
        </div>
        <div className="flex flex-col gap-3 overflow-y-auto max-[300px]">
          {props.formik.touched?.specification &&
            props.formik.errors?.specification && (
              <span className="text-xs text-red-500">
                {props.formik.errors?.specification}
              </span>
            )}
          <TableData
            columns={infoProductColumns(handleEdit, handleDelete)}
            data={props.formik.values?.specification}
            smallTable={matches}
            className="!p-0"
          />
        </div>
      </div>
    </Wrapper>
  )
}

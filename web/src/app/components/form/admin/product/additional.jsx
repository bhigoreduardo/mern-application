/* eslint-disable react/prop-types */
import { useFormik } from 'formik'
import { useState } from 'react'
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
import TextRichLabel from '../../../ui/inputs/textrich/label'
import TextLabel from '../../../ui/inputs/text/label'
import TableData from '../../../ui/table/data'

export default function Additional(props) {
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
    <Wrapper title="Informações adicionais" handleClear={handleClear}>
      <div className="flex flex-col gap-6 w-full">
        <TextRichLabel
          id="additional.detail"
          label="Detalhe"
          placeholder="Informe a descrição"
          onChange={(value) =>
            value.split('<br>')?.length === 2
              ? props.formik.setFieldValue('additional.detail', '')
              : props.formik.setFieldValue('additional.detail', value)
          }
          value={props.formik.values?.additional?.detail}
          error={
            props.formik.touched?.additional?.detail &&
            props.formik.errors?.additional?.detail
          }
          className="mb-6"
        />
        <div className="flex flex-col">
          <Heading
            title="Outras informações"
            btn={
              <Button
                onClick={formik.handleSubmit}
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
        <div className="flex flex-col gap-3 overflow-y-auto max-[300px] w-full">
          <TableData
            columns={infoProductColumns(handleEdit, handleDelete)}
            data={props.formik.values?.additional?.otherInfos}
            smallTable={matches}
            className="!p-0"
          />
        </div>
      </div>
    </Wrapper>
  )
}

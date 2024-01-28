/* eslint-disable react/prop-types */
import { useState } from 'react'
import { CheckCircle, PlusCircle } from 'phosphor-react'
import { useFormik } from 'formik'

import {
  otherInfoInitialValues,
  otherInfoValidationsSchema,
} from '../../../../../types/admin/form-type'
import { infoProductColumns } from '../../../../../utils/contants/admin'
import Wrapper from '../../../ui/common/wrapper'
import Heading from '../../../ui/table/heading'
import Button from '../../../ui/buttons/button'
import TextLabel from '../../../ui/inputs/text/label'
import TableData from '../../../ui/table/data'
import TextRichLabel from '../../../ui/inputs/textrich/label'

export default function Description(props) {
  const [indexEdit, setIndexEdit] = useState(null)
  const formik = useFormik({
    initialValues: otherInfoInitialValues,
    validationSchema: otherInfoValidationsSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = (values) => console.log(values)
  const handleClear = () => {}
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <Wrapper title="Descrição" handleClear={handleClear}>
      <div className="flex flex-col gap-6">
        <TextRichLabel
          id="description.overview"
          label="Detalhe"
          placeholder="Informe a descrição"
          onChange={(value) =>
            value.split('<br>')?.length === 2
              ? props.formik.setFieldValue('description.overview', '')
              : props.formik.setFieldValue('description.overview', value)
          }
          value={props.formik.values?.description?.overview}
          error={
            props.formik.touched?.description?.overview &&
            props.formik.errors?.description?.overview
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
        <div className="flex flex-col gap-3 overflow-y-auto max-[300px] max-h-[250px]">
          <TableData
            columns={infoProductColumns(handleEdit, handleDelete)}
            // data={props.formik.values?.description?.otherInfos}
            className="!p-0"
          />
        </div>
      </div>
    </Wrapper>
  )
}

/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useFormik } from 'formik'
import { CheckCircle, PlusCircle } from 'phosphor-react'

import {
  contactLayoutInitialValues,
  contactLayoutValidationSchema,
  otherInfoInitialValues,
  otherInfoValidationsSchema,
} from '../../../../../types/admin/form-type'
import { infoProductColumns } from '../../../../../utils/contants/admin'
import useMediaQuery from '../../../../../hooks/use-mediaQuery'
import Button from '../../../ui/buttons/button'
import Wrapper from '../../../ui/common/wrapper'
import Heading from '../../../ui/table/heading'
import TextLabel from '../../../ui/inputs/text/label'
import TextRichLabel from '../../../ui/inputs/textrich/label'
import TableData from '../../../ui/table/data'

export default function Contact({ data }) {
  const [indexEdit, setIndexEdit] = useState(null)
  const matches = useMediaQuery('(max-width: 640px)')
  const formik = useFormik({
    initialValues: data ? data : contactLayoutInitialValues,
    validationSchema: contactLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const formikItems = useFormik({
    initialValues: otherInfoInitialValues,
    validationSchema: otherInfoValidationsSchema,
    onSubmit: (values) => handleItems(values),
  })
  const handleSubmit = async (values) => console.log(values)
  const handleItems = (values) => console.log(values)
  const handleClear = () => {}
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <Heading
        title="Contato"
        btn={
          <Button
            type="submit"
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
          >
            Salvar
          </Button>
        }
        className="!border border-gray-100 rounded-sm shadow-md"
      />
      <Wrapper title="Perguntas frequentes" handleClear={handleClear}>
        <TextLabel
          id="title"
          label="Título"
          placeholder="Infome título da informação"
          name="title"
          error={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className="flex-grow"
        />
        <Heading
          title="Informações"
          btn={
            <Button
              onClick={formikItems.handleSubmit}
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
        <div className="flex flex-col gap-4">
          <TextLabel
            id="item.title"
            label="Título"
            placeholder="Infome título da informação"
            name="item.title"
            error={formikItems.touched.title && formikItems.errors.title}
            onChange={formikItems.handleChange}
            onBlur={formikItems.handleBlur}
            value={formikItems.values.title}
            className="flex-grow"
          />

          <TextRichLabel
            id="description"
            label="Descrição"
            placeholder="Informe a descrição"
            onChange={(value) =>
              formikItems.setFieldValue('description', value)
            }
            value={formikItems.values.description}
            error={
              formikItems.touched.description && formikItems.errors.description
            }
            className="mb-6"
          />
          <div className="flex flex-col gap-3 overflow-y-auto max-[300px]">
            {formik.touched?.items && formik.errors?.items && (
              <span className="text-xs text-red-500">
                {formik.errors?.items}
              </span>
            )}
            <TableData
              columns={infoProductColumns(handleEdit, handleDelete)}
              data={formik.values?.items}
              smallTable={matches}
              className="!p-0"
            />
          </div>
        </div>
      </Wrapper>
    </form>
  )
}

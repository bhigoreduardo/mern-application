import { useState } from 'react'
import { useFormik } from 'formik'
import { CheckCircle, PlusCircle } from 'phosphor-react'

import {
  heroHomeLayoutInitalValues,
  heroHomeLayoutValidationSchema,
} from '../../../../../../../types/admin/form-type'
import { actived } from '../../../../../../../types/filter-type'
import { sanitizeSelectData } from '../../../../../../../utils/format'
import Heading from '../../../../../ui/table/heading'
import Button from '../../../../../ui/buttons/button'
import TextLabel from '../../../../../ui/inputs/text/label'
import SelectLabel from '../../../../../ui/inputs/select/label'
import TextRichLabel from '../../../../../ui/inputs/textrich/label'
import FormHighlight from '../../../highlight'

export default function Main() {
  const [indexEdit, setIndexEdit] = useState(null)
  const activedParsed = sanitizeSelectData(actived, ['undefined'])
  const formik = useFormik({
    initialValues: heroHomeLayoutInitalValues,
    validationSchema: heroHomeLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-4">
      <Heading
        title="Detalhe"
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
      <div className="flex gap-4">
        <TextLabel
          id="title"
          placeholder="Infome título"
          name="title"
          label="Título"
          error={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className="flex-grow flex-1"
        />
        <SelectLabel
          id="badge"
          label="Bolão suspenso"
          name="badge"
          placeholder="Selecione"
          data={activedParsed}
          error={formik.touched?.badge && formik.errors?.badge}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.badge}
          className="flex-grow flex-1"
        />
      </div>
      <TextRichLabel
        id="description"
        placeholder="Informe a descrição"
        label="Descrição"
        onChange={(value) => formik.setFieldValue('description', value)}
        value={formik.values.description}
        error={formik.touched.description && formik.errors.description}
        className="mb-6"
      />
      <Heading title="Produto" />
      <FormHighlight formik={formik} isUnique />
    </form>
  )
}

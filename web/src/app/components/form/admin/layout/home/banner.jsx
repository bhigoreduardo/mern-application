import { useFormik } from 'formik'
import { useState } from 'react'
import { CheckCircle, PlusCircle } from 'phosphor-react'

import {
  bannerHomeLayoutInitialValues,
  bannerHomeLayoutValitionSchema,
} from '../../../../../../types/admin/form-type'
import { actived } from '../../../../../../types/filter-type'
import { sanitizeSelectData } from '../../../../../../utils/format'
import Button from '../../../../ui/buttons/button'
import Heading from '../../../../ui/table/heading'
import TextLabel from '../../../../ui/inputs/text/label'
import SelectLabel from '../../../../ui/inputs/select/label'
import FormHighlight from '../../highlight'
import TextRichLabel from '../../../../ui/inputs/textrich/label'
import Wrapper from '../../../../ui/common/wrapper'

export default function Banner() {
  const [indexEdit, setIndexEdit] = useState(null)
  const activedParsed = sanitizeSelectData(actived, ['undefined'])
  const formik = useFormik({
    initialValues: bannerHomeLayoutInitialValues,
    validationSchema: bannerHomeLayoutValitionSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <Wrapper title="Banner central">
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
            id="subTitle"
            placeholder="Infome título"
            name="subTitle"
            label="Título"
            error={formik.touched.subTitle && formik.errors.subTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subTitle}
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
    </Wrapper>
  )
}

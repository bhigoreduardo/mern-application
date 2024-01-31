import { useFormik } from 'formik'

import {
  newsHomeLayoutInitialValues,
  newsHomeLayoutValidationSchema,
} from '../../../../../../types/admin/form-type'
import { imageMessage } from '../../../../../../utils/helper'
import Wrapper from '../../../../ui/common/wrapper'
import TextLabel from '../../../../ui/inputs/text/label'
import ImageLabel from '../../../../ui/inputs/image/label'
import FormCategory from '../../product/category'
import Button from '../../../../ui/buttons/button'

export default function News() {
  const formik = useFormik({
    initialValues: newsHomeLayoutInitialValues,
    validationSchema: newsHomeLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <Wrapper title="Banner novidades">
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="flex gap-4 md:flex-row flex-col">
          <ImageLabel
            id="image"
            label="Imagem"
            name="image"
            info="512*512"
            hint={imageMessage('70kb')}
            error={formik.touched.image && formik.errors.image}
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            onClear={() => formik.setFieldValue('image', '')}
            className="mx-auto"
          />
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
          <TextLabel
            id="description"
            placeholder="Infome a descrição"
            name="description"
            label="Descriçao"
            error={formik.touched.description && formik.errors.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="flex-grow flex-1"
          />
          <TextLabel
            id="badge"
            placeholder="Infome o balaão suspenso"
            name="badge"
            label="Balão suspenso"
            error={formik.touched.badge && formik.errors.badge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.badge}
            className="flex-grow flex-1"
          />
        </div>
        <FormCategory formik={formik} label="Categoria" />
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
        >
          Salvar
        </Button>
      </form>
    </Wrapper>
  )
}

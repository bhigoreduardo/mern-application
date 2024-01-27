/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  brandInitialValues,
  brandValidationSchema,
} from '../../../../types/admin/form-type'
import { imageMessage } from '../../../../utils/helper'
import ImageLabel from '../../ui/inputs/image/label'
import TextLabel from '../../ui/inputs/text/label'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import Button from '../../ui/buttons/button'

export default function Brand({ data }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data ? data : brandInitialValues,
    validationSchema: brandValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
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
          />
          <TextLabel
            id="name"
            label="Nome"
            placeholder="Infome nome da marca"
            name="name"
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="flex-grow"
          />
        </div>
        <TextAreaLabel
          id="description"
          label="Descrição"
          name="description"
          placeholder="Informe a descrição da categoria"
          error={formik.touched.description && formik.errors.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

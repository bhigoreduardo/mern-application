/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  colorInitialValues,
  colorValidationSchema,
} from '../../../../types/admin/form-type'
import TextLabel from '../../ui/inputs/text/label'
import ColorLabel from '../../ui/inputs/color/label'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import Button from '../../ui/buttons/button'

export default function Color({ data }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data ? data : colorInitialValues,
    validationSchema: colorValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <TextLabel
            id="name"
            label="Nome"
            placeholder="Infome nome da cor"
            name="name"
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="flex-grow"
          />
          <ColorLabel
            id="color"
            type="color"
            label="Cor"
            name="color"
            error={formik.touched.color && formik.errors.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.color}
            className="flex-grow"
          />
        </div>
        <TextAreaLabel
          id="description"
          label="Descrição"
          name="description"
          placeholder="Informe a descrição da cor"
          error={formik.touched.description && formik.errors.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2"
      >
        Salvar
      </Button>
    </form>
  )
}

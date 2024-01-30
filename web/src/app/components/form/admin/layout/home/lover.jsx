import { useFormik } from 'formik'

import {
  loverHomeLayoutInitialValues,
  loverHomeLayoutValidationSchema,
} from '../../../../../../types/admin/form-type'
import Wrapper from '../../../../ui/common/wrapper'
import TextLabel from '../../../../ui/inputs/text/label'
import FormSpecification from '../../offer/specification'
import Button from '../../../../ui/buttons/button'

export default function Lover() {
  const formik = useFormik({
    initialValues: loverHomeLayoutInitialValues,
    validationSchema: loverHomeLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <Wrapper title="Banner Queridinhos">
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
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
        <FormSpecification formik={formik} />
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

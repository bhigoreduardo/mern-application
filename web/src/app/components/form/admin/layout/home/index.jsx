import { useFormik } from 'formik'

import {
  homeLayoutInitalValues,
  homeLayoutValidationSchema,
} from '../../../../../../types/admin/form-type'
import Button from '../../../../ui/buttons/button'

export default function Home() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: homeLayoutInitalValues,
    validationSchema: homeLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

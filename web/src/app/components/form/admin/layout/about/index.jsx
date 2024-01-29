import { useFormik } from 'formik'

import {
  aboutLayoutInitialValues,
  aboutLayoutValidationSchema,
} from '../../../../../../types/admin/form-type'
import Button from '../../../../ui/buttons/button'
import Heading from '../../../../ui/table/heading'
import Form from './form'

export default function About() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: aboutLayoutInitialValues,
    validationSchema: aboutLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <Heading
        title="Sobre"
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
      <Form
        title="Empresa"
        fields={['hero?.title', 'hero?.description']}
        formik={formik}
      />
      <Form
        title="Marca"
        fields={['brand?.title', 'brand?.description']}
        formik={formik}
      />
      <Form
        title="Banner"
        fields={['banner?.title', 'banner?.description']}
        formik={formik}
      />
    </form>
  )
}

/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  offerInitialValues,
  offerValidationSchema,
} from '../../../../../types/admin/form-type'
import ToggleLabel from '../../../ui/inputs/toggle/label'
import FormInformation from './information'
import FormSpecification from './specification'
import Button from '../../../ui/buttons/button'

export default function Offer({ data }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data ? data : offerInitialValues,
    validationSchema: offerValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <ToggleLabel
        id="status"
        name="status"
        label="Ativo"
        error={formik.touched?.status && formik.errors?.status}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values?.status}
        checked={formik.values?.status}
      />
      <FormInformation formik={formik} />
      <FormSpecification formik={formik} />
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

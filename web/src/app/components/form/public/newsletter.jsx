import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  newsletterInitialValues,
  newsletterValidationSchema,
} from '../../../../types/public/form-type'
import TextLabel from '../../ui/inputs/text/label'
import Button from '../../ui/buttons/button'

export default function Newsletter() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: newsletterInitialValues,
    validationSchema: newsletterValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => {
    // TODO: SEND SERVER VALUES
    console.log(values)
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex sm:flex-row flex-col items-center gap-4 w-full max-w-[500px] bg-white rounded-sm p-3"
    >
      <TextLabel
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full"
        inputClassName="border-transparent"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 uppercase sm:w-fit w-full"
      >
        Inscrever
        <ArrowRight size={20} className="text-white" />
      </Button>
    </form>
  )
}

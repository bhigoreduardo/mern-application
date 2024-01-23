import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  contactInitialValues,
  contactValidationSchema,
} from '../../../../types/public/form-type'
import TextLabel from '../../ui/inputs/text/label'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import Button from '../../ui/buttons/button'

export default function Contact() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-3">
        <TextLabel
          id="email"
          placeholder="Email"
          name="email"
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          inputClassName="border-transparent"
        />
        <TextLabel
          id="name"
          placeholder="Nome"
          name="name"
          error={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          inputClassName="border-transparent"
        />
        <TextAreaLabel
          id="message"
          name="message"
          placeholder="Mensagem"
          error={formik.touched.message && formik.errors.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          inputClassName="border-transparent"
        />
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 uppercase sm:w-fit w-full"
      >
        Enviar mensagem
        <ArrowRight size={20} className="text-white" />
      </Button>
    </form>
  )
}

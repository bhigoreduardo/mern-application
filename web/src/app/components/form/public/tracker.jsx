import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  trackerInitialValues,
  trackerValidationSchema,
} from '../../../../types/public/form-type'
import TextLabel from '../../ui/inputs/text/label'
import Button from '../../ui/buttons/button'

export default function Tracker() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: trackerInitialValues,
    validationSchema: trackerValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form
      className="w-full flex flex-col gap-6 px-8 py-6 max-w-[800px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-3xl text-gray-900">
          Rastrear pedido
        </h4>

        <p className="text-sm text-gray-600">
          Informe código do pedido junto com seu endereço de email cadastrada na
          Furniture eCommerce.
        </p>
      </div>

      <div className="flex sm:flex-row flex-col gap-4">
        <TextLabel
          id="code"
          label="Número do pedido"
          placeholder="Informe o número do pedido"
          name="code"
          hint="Número do pedido foi enviado para seu email durante a compra"
          error={formik.touched.code && formik.errors.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          className="flex-grow"
        />
        <TextLabel
          id="email"
          label="Email"
          type="email"
          placeholder="Insira seu email"
          name="email"
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="flex-grow"
        />
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 uppercase w-fit"
      >
        Rastrear
        <ArrowRight size={20} className="text-white" />
      </Button>
    </form>
  )
}

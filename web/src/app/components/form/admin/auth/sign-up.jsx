import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  signUpInitialValues,
  signUpValidationSchema,
} from '../../../../../types/admin/form-type'
import TextLabel from '../../../ui/inputs/text/label'
import PasswordLabel from '../../../ui/inputs/password/label'
import Button from '../../../ui/buttons/button'

export default function SignUp() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: signUpInitialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[450px] border border-gray-100 bg-white rounded-sm shadow-md"
    >
      <div className="flex flex-col gap-4 px-8 py-6">
        <TextLabel
          id="email"
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <PasswordLabel
          id="password"
          label="Senha"
          placeholder="Senha com +6 caracteres"
          name="password"
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <PasswordLabel
          id="repeatPassword"
          label="Repetir senha"
          placeholder="Repetir senha"
          name="repeatPassword"
          error={formik.touched.repeatPassword && formik.errors.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
        />
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Cadastrar
          <ArrowRight size={20} />
        </Button>
      </div>
    </form>
  )
}

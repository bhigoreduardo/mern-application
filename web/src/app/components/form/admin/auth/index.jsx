import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  signInValidationSchema,
  signIninitialValues,
} from '../../../../../types/admin/form-type'
import TextLabel from '../../../ui/inputs/text/label'
import PasswordLabel from '../../../ui/inputs/password/label'
import Button from '../../../ui/buttons/button'

export default function Auth() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const path = pathname.split('/')
  path.pop()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: signIninitialValues,
    validationSchema: signInValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => {
    navigate('/acesso/loja')
    console.log(values)
  }

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
          placeholder="Senha"
          name="password"
          btn={
            <Link
              to={`${path.join('/')}/recuperar-senha`}
              className="font-semibold text-blue-500 hover:text-blue-600"
            >
              Esqueceu a senha?
            </Link>
          }
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Entrar
          <ArrowRight size={20} />
        </Button>
      </div>
    </form>
  )
}

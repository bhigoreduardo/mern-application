import { useState } from 'react'
import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  recoveryPasswordInitialValues,
  recoveryPasswordValidationSchema,
} from '../../../../../types/public/form-type'
import PasswordLabel from '../../../ui/inputs/password/label'
import Button from '../../../ui/buttons/button'

export default function RecoveryPassword() {
  const [info, setInfo] = useState('')
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: recoveryPasswordInitialValues,
    validationSchema: recoveryPasswordValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[450px] border border-gray-100 bg-white rounded-sm shadow-md"
    >
      <div className="flex flex-col gap-6 px-8 py-6">
        <div className="flex flex-col gap-3 items-center">
          <h4 className="font-semibold text-base text-gray-900">
            Recuperar senha
          </h4>

          <p className="text-sm text-gray-600 text-center">
            Informe sua nova senha
          </p>
        </div>
        {info && (
          <span
            className={`flex pt-2 justify-center text-xs ${
              success ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {info}
          </span>
        )}
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
          Redefinir senha
          <ArrowRight size={20} className="text-white" />
        </Button>
      </div>
    </form>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  generateRecoveryPasswordInitialValues,
  generateRecoveryPasswordValidationSchema,
} from '../../../../../types/public/form-type'
import TextLabel from '../../../ui/inputs/text/label'
import Button from '../../../ui/buttons/button'

export default function GenerateRecoveryPassword() {
  const [info, setInfo] = useState('')
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: generateRecoveryPasswordInitialValues,
    validationSchema: generateRecoveryPasswordValidationSchema,
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
            Esqueceu a senha?
          </h4>

          <p className="text-sm text-gray-600 text-center">
            Informe seu endereço de email cadastrada na Furniture eCommerce.
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
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Recuperar senha
          <ArrowRight size={20} className="text-white" />
        </Button>
        <div className="flex flex-col gap-2 border-b border-gray-100 pb-6">
          <span className="flex gap-[6px] text-sm text-gray-600">
            Não possui uma conta?
            <Link to="/entrar" className="text-blue-500">
              Cadastrar
            </Link>
          </span>
          <span className="flex gap-[6px] text-sm text-gray-600">
            Lembrou a senha?
            <Link to="/entrar" className="text-blue-500">
              Entrar
            </Link>
          </span>
        </div>
        <span className="text-sm text-gray-600">
          Você pode entrar em contato com o{' '}
          <Link className="text-orange-500">Atendimento</Link> ao Cliente para
          obter ajuda para restaurar o acesso à sua conta.
        </span>
      </div>
    </form>
  )
}

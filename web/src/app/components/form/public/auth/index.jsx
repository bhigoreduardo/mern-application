import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  signInValidationSchema,
  signIninitialValues,
  signUpinitialValues,
  signUpvalidationSchema,
} from '../../../../../types/public/form-type'
import { cpfMask, mobileMask } from '../../../../../utils/mask'
import Tab from '../../../ui/buttons/tab'
import TextLabel from '../../../ui/inputs/text/label'
import PasswordLabel from '../../../ui/inputs/password/label'
import CheckLabel from '../../../ui/inputs/check/label'
import Button from '../../../ui/buttons/button'

export default function Auth() {
  const [isNonLogin, setIsNonLogin] = useState(false)
  const [info, setInfo] = useState('')
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: isNonLogin ? signUpinitialValues : signIninitialValues,
    validationSchema: isNonLogin
      ? signUpvalidationSchema
      : signInValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[450px] border border-gray-100 bg-white rounded-sm shadow-md"
    >
      {/* TABS BUTTONS */}
      <div className="flex items-center justify-between border-b border-gray-100">
        <Tab
          className="w-full"
          active={!isNonLogin}
          onClick={() => setIsNonLogin(false)}
        >
          Entrar
        </Tab>
        <Tab
          className="w-full"
          active={isNonLogin}
          onClick={() => setIsNonLogin(true)}
        >
          Cadastrar
        </Tab>
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
      <div className="flex flex-col gap-4 px-8 py-6">
        {isNonLogin && (
          <>
            <TextLabel
              id="name"
              label="Nome"
              placeholder="Nome"
              name="name"
              error={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <TextLabel
              id="cpf"
              label="CPF"
              placeholder="CPF"
              name="cpf"
              error={formik.touched.cpf && formik.errors.cpf}
              onChange={(e) =>
                formik.setFieldValue('cpf', cpfMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={cpfMask(formik.values.cpf)}
            />
          </>
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
        {isNonLogin && (
          <TextLabel
            id="whatsApp"
            label="WhatsApp"
            placeholder="WhatsApp"
            name="whatsApp"
            error={formik.touched.whatsApp && formik.errors.whatsApp}
            onChange={(e) =>
              formik.setFieldValue('whatsApp', mobileMask(e.target.value))
            }
            onBlur={formik.handleBlur}
            value={mobileMask(formik.values.whatsApp)}
          />
        )}
        <PasswordLabel
          id="password"
          label="Senha"
          placeholder={isNonLogin ? 'Senha com +6 caracteres' : 'Senha'}
          name="password"
          btn={
            !isNonLogin && (
              <Link
                to="/recuperar-senha"
                className="font-semibold text-blue-500 hover:text-blue-600"
              >
                Esqueceu a senha?
              </Link>
            )
          }
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {isNonLogin && (
          <>
            <PasswordLabel
              id="repeatPassword"
              label="Repetir senha"
              placeholder="Repetir senha"
              name="repeatPassword"
              error={
                formik.touched.repeatPassword && formik.errors.repeatPassword
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repeatPassword}
            />
            <CheckLabel
              name="terms"
              label={
                <span className="text-xs text-gray-600">
                  Aceito os{' '}
                  <Link className="text-blue-500">Termos de Condições</Link> e{' '}
                  <Link className="text-blue-500">Política de Privacidade</Link>
                </span>
              }
              error={formik.touched.terms && formik.errors.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.terms}
              checked={formik.values.terms}
            />
          </>
        )}
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          {isNonLogin ? 'Cadastrar' : 'Entrar'}
          <ArrowRight size={20} className="text-white" />
        </Button>
        {!isNonLogin && (
          <Link
            to="/ativar-conta"
            className="ml-auto font-semibold text-blue-500 hover:text-blue-600"
          >
            Ativar conta
          </Link>
        )}
      </div>
    </form>
  )
}

/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import {
  signIninitialValues,
  signInValidationSchema,
} from '../../../../../types/public/form-type'
import TextLabel from '../../../ui/inputs/text/label'
import PasswordLabel from '../../../ui/inputs/password/label'
import Button from '../../../ui/buttons/button'

export default function Card({ setOpenCard }) {
  const navigate = useNavigate()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: signIninitialValues,
    validationSchema: signInValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => {
    console.log(values)
    navigate('/conta')
  }

  return (
    <form
      className="absolute right-0 top-[calc(100%+25px)] z-20 w-[400px] border border-gray-100 bg-white rounded-sm shadow-md py-6 px-6"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <h4 className="font-semibold text-xl text-gray-900 text-center">
          Acessar conta
        </h4>
        {/* FIELDS */}
        <div className="flex flex-col gap-4">
          <TextLabel
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            label="Email"
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <PasswordLabel
            name="password"
            id="password"
            placeholder="Senha"
            label="Senha"
            btn={
              <Link
                to="/recuperar-senha"
                onClick={() => setOpenCard(false)}
                className="font-normal text-sm text-blue-500 hover:text-blue-600"
              >
                Esqueceu a senha?
              </Link>
            }
            error={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Entrar
          <ArrowRight size={20} className="text-white" />
        </Button>
        <div className="flex flex-col gap-3">
          <span className="text-xs text-gray-600 text-center">
            Não possui uma conta?
          </span>
          <Button
            onClick={() => {
              navigate('/entrar')
              setOpenCard(false)
            }}
            className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase"
          >
            Criar
          </Button>
        </div>
      </div>
    </form>
  )
}

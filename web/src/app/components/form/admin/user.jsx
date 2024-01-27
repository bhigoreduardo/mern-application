/* eslint-disable react/prop-types */
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import ToggleLabel from '../../ui/inputs/toggle/label'
import Heading from '../../ui/common/heading'
import Button from '../../ui/buttons/button'
import FormProfile from '../profile'
import FormAddress from '../address'
import FormPassword from '../password'

export default function User({ user, isAdmin = false, _type }) {
  const navigate = useNavigate()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { status: user.status || false },
  })

  return (
    <div className="flex flex-col gap-6">
      {Object.keys(user)?.length !== 0 && isAdmin && (
        <ToggleLabel
          id="status"
          name="status"
          label="Status"
          onChange={() => {
            formik.setFieldValue('status', !formik.values.status)
            formik.handleSubmit()
          }}
          checked={formik.values.status}
        />
      )}
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Dados pessoais"
          btn={
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse uppercase"
              onClick={() => navigate(-1)}
            >
              Voltar
              <ArrowLeft size={16} />
            </Button>
          }
        />
        <FormProfile user={user} _type={_type} />
      </div>
      {Object.keys(user)?.length !== 0 && (
        <>
          <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
            <Heading title="Endereço" />
            <FormAddress user={user} _type={_type} />
          </div>
          {!isAdmin && (
            <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
              <Heading title="Segurança" />
              <FormPassword />
            </div>
          )}
        </>
      )}
    </div>
  )
}

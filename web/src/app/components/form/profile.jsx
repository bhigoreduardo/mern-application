/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  profileInitialValus,
  profileSignUpValidationSchema,
  profileUpdateValidationSchema,
} from '../../../types/public/form-type'
import { cpfMask, mobileMask } from '../../../utils/mask'
import { imageMessage } from '../../../utils/helper'
import ImageLabel from '../ui/inputs/image/label'
import TextLabel from '../ui/inputs/text/label'
import Button from '../ui/buttons/button'

export default function Profile({ user, _type }) {
  const validationSchema =
    Object.keys(user)?.length !== 0
      ? profileUpdateValidationSchema
      : profileSignUpValidationSchema
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user ? { ...user } : { ...profileInitialValus, _type },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex gap-4 sm:flex-row flex-col">
        {Object.keys(user)?.length !== 0 && (
          <ImageLabel
            id="image"
            label="Imagem"
            name="image"
            info="800*800"
            hint={imageMessage('70kb')}
            error={formik.touched.image && formik.errors.image}
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            onClear={() => formik.setFieldValue('image', '')}
            className="!w-[180px] !h-[180px] !rounded-full mx-auto"
            isCircle
          />
        )}
        <div className="flex-grow flex flex-col gap-4">
          <div className="flex gap-4 md:flex-row flex-col">
            <TextLabel
              id="name"
              label="Nome"
              placeholder="Infome nome completo"
              name="name"
              error={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="flex-grow"
            />
            <TextLabel
              id="email"
              label="Email"
              placeholder="Infome email"
              name="email"
              error={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="flex-grow"
              disabled={!!Object.keys(user)?.length}
            />
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <TextLabel
              id="cpf"
              label="CPF"
              placeholder="Infome o CPF"
              name="cpf"
              error={formik.touched.cpf && formik.errors.cpf}
              onChange={(e) =>
                formik.setFieldValue('cpf', cpfMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={cpfMask(formik.values.cpf)}
              className="flex-grow"
            />
            <TextLabel
              id="whatsApp"
              label="WhatsApp"
              placeholder="Infome seu whatsApp"
              name="whatsApp"
              error={formik.touched.whatsApp && formik.errors.whatsApp}
              onChange={(e) =>
                formik.setFieldValue('whatsApp', mobileMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={mobileMask(formik.values.whatsApp)}
              className="flex-grow"
            />
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

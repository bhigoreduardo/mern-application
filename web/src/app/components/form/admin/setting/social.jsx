/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useFormik } from 'formik'

import {
  socialInitialValues,
  socialValidationSchema,
} from '../../../../../types/admin/form-type'
import TextLabel from '../../../ui/inputs/text/label'
import Button from '../../../ui/buttons/button'

export default function Social({ user }) {
  const [info, setInfo] = useState('')
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user ? { ...user?.socialMedia } : socialInitialValues,
    validationSchema: socialValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex-grow flex flex-col gap-4">
        {info && (
          <span className="flex pt-2 justify-center text-xs text-blue-500">
            {info}
          </span>
        )}
        <div className="flex gap-4">
          <TextLabel
            id="facebook"
            label="Facebook"
            placeholder="Infome perfil facebook"
            name="facebook"
            error={formik.touched.facebook && formik.errors.facebook}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.facebook}
            className="flex-grow"
          />
          <TextLabel
            id="instagram"
            label="Instagram"
            placeholder="Infome perfil instagram"
            name="instagram"
            error={formik.touched.instagram && formik.errors.instagram}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.instagram}
            className="flex-grow"
          />
        </div>
        <div className="flex gap-4">
          <TextLabel
            id="twitter"
            label="Twitter"
            placeholder="Infome perfil twitter"
            name="twitter"
            error={formik.touched.twitter && formik.errors.twitter}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.twitter}
            className="flex-grow"
          />
          <TextLabel
            id="linkedin"
            label="Linkedin"
            placeholder="Infome perfil linkedin"
            name="linkedin"
            error={formik.touched.linkedin && formik.errors.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.linkedin}
            className="flex-grow"
          />
        </div>
        <div className="flex gap-4">
          <TextLabel
            id="pinterest"
            label="Pinterest"
            placeholder="Infome perfil pinterest"
            name="pinterest"
            error={formik.touched.pinterest && formik.errors.pinterest}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pinterest}
            className="flex-grow"
          />
          <TextLabel
            id="youtube"
            label="Youtube"
            placeholder="Infome perfil youtube"
            name="youtube"
            error={formik.touched.youtube && formik.errors.youtube}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.youtube}
            className="flex-grow"
          />
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

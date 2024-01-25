import { useFormik } from 'formik'

import {
  passwordInitialValues,
  passwordValidationSchema,
} from '../../../types/public/form-type'
import PasswordLabel from '../ui/inputs/password/label'
import Button from '../ui/buttons/button'

export default function Password() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: passwordInitialValues,
    validationSchema: passwordValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex gap-4 sm:flex-row flex-col">
        <PasswordLabel
          id="password"
          label="Senha atual"
          placeholder="Senha atual"
          name="password"
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="flex-grow"
        />
        <PasswordLabel
          id="newPassword"
          label="Nova senha"
          placeholder="Senha com +6 caracteres"
          name="newPassword"
          error={formik.touched.newPassword && formik.errors.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.newPassword}
          className="flex-grow"
        />
        <PasswordLabel
          id="repeatPassword"
          label="Repetir senha"
          placeholder="Repetir nova senha"
          name="repeatPassword"
          error={formik.touched.repeatPassword && formik.errors.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          className="flex-grow"
        />
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

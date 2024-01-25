/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  addressInitialValues,
  addressValidationSchema,
} from '../../../types/public/form-type'
import TextLabel from '../ui/inputs/text/label'
import { zipCodeMask } from '../../../utils/mask'
import Button from '../ui/buttons/button'

export default function Address({ user }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user?.address ? user.address : addressInitialValues,
    validationSchema: addressValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 sm:flex-row flex-col">
          <TextLabel
            id="street"
            label="Rua"
            placeholder="Infome nome da rua"
            name="street"
            error={formik.touched?.street && formik.errors?.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.street}
            className="flex-grow"
          />
          <TextLabel
            id="neighborhood"
            label="Bairro"
            placeholder="Infome nome do bairro"
            name="neighborhood"
            error={formik.touched?.neighborhood && formik.errors?.neighborhood}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.neighborhood}
            className="flex-grow"
          />
        </div>
        <div className="flex gap-4 sm:flex-row flex-col">
          <TextLabel
            id="city"
            label="Cidade"
            placeholder="Infome nome da cidade"
            name="city"
            error={formik.touched?.city && formik.errors?.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.city}
            className="flex-grow"
          />
          <TextLabel
            id="state"
            label="Estado"
            placeholder="Infome nome do estado"
            name="state"
            error={formik.touched?.state && formik.errors?.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.state}
            className="flex-grow"
          />
        </div>
        <div className="flex gap-4 sm:flex-row flex-col">
          <TextLabel
            id="number"
            label="Número"
            placeholder="Infome o número"
            name="number"
            error={formik.touched?.number && formik.errors?.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.number}
            className="flex-grow"
          />
          <TextLabel
            id="zipCode"
            label="CEP"
            placeholder="Infome o CEP"
            name="zipCode"
            error={formik.touched?.zipCode && formik.errors?.zipCode}
            onChange={(e) =>
              formik.setFieldValue('zipCode', zipCodeMask(e.target.value))
            }
            onBlur={formik.handleBlur}
            value={zipCodeMask(formik.values?.zipCode)}
            className="flex-grow"
          />
          <TextLabel
            id="complement"
            label="Complemento"
            placeholder="Infome o complemento"
            name="complement"
            error={formik.touched?.complement && formik.errors?.complement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.complement}
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

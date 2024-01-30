import { useFormik } from 'formik'

import { promotionHomeLayoutValidationSchema } from '../../../../../../types/admin/form-type'
import Wrapper from '../../../../ui/common/wrapper'
import FormHighlight from '../../highlight'
import Button from '../../../../ui/buttons/button'

export default function Promotion() {
  const formik = useFormik({
    initialValues: { product: '' },
    validationSchema: promotionHomeLayoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <Wrapper title="Banner Promoção">
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <FormHighlight formik={formik} isUnique />
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
        >
          Salvar
        </Button>
      </form>
    </Wrapper>
  )
}

import { useFormik } from 'formik'

import { customers } from '../../../../utils/mock'
import { reviewValidationSchema } from '../../../../types/public/form-type'
import useApp from '../../../../hooks/use-app'
import SelectLabel from '../../ui/inputs/select/label'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import Button from '../../ui/buttons/button'

export default function Review() {
  const { productReview } = useApp()
  const user = customers[0]
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: user.image,
      order: productReview?.order ?? '',
      cartItem: productReview?.cartItem ?? '',
      stars: '',
      description: '',
    },
    validationSchema: reviewValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <SelectLabel
        id="stars"
        label="Avaliação"
        name="stars"
        placeholder="Selecione"
        // data={starsReview}
        error={formik.touched.stars && formik.errors.stars}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.stars}
      />
      <TextAreaLabel
        id="description"
        label="Descrição"
        name="description"
        placeholder="Informe a descrição da avaliação"
        error={formik.touched.description && formik.errors.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2"
      >
        Avaliar
      </Button>
    </form>
  )
}

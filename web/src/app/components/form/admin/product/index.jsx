/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  productInitialValues,
  productValidationSchema,
} from '../../../../../types/admin/form-type'
import Button from '../../../ui/buttons/button'
import FormIdentity from './identity'
import FormDescription from './description'
import FormAdditional from './additional'
import FormSpecification from './specification'
import FormData from './data'
import FormSeo from './seo'
import FormPublished from './published'
import FormCategory from './category'
import FormBrand from './brand'
import FormTag from './tag'

export default function Product({ data }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data
      ? {
          ...data,
          category: data?.category?.map((item) => item._id),
          brand: data?.brand?._id,
          cover: data?.productData?.media?.cover,
          backCover: data?.productData?.media?.backCover,
          gallery: data?.productData?.media?.gallery,
          video: data?.productData?.media?.video,
        }
      : productInitialValues,
    validationSchema: productValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
      <div className="flex gap-6 justify-between lg:flex-row flex-col">
        <div className="flex-grow flex flex-col gap-6">
          <FormIdentity formik={formik} />
          <FormDescription formik={formik} />
          <FormAdditional formik={formik} />
          <FormSpecification formik={formik} />
          <FormData formik={formik} />
          <FormSeo formik={formik} />
        </div>
        <div className="flex lg:flex-col flex-col-reverse gap-6 lg:w-[350px] lg:min-w-[350px]">
          <Button className="bg-orange-500 text-white hover:bg-orange-600 !p-2 lg:h-[42px] uppercase lg:w-full w-fit">
            Salvar
          </Button>
          <FormPublished formik={formik} />
          <FormCategory formik={formik} wrapper />
          <FormBrand formik={formik} wrapper />
          <FormTag formik={formik} />
        </div>
      </div>
    </form>
  )
}

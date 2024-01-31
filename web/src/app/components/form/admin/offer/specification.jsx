/* eslint-disable react/prop-types */
import { offerProductColumns } from '../../../../../utils/contants/admin'
import Heading from '../../../ui/table/heading'
import ToggleLabel from '../../../ui/inputs/toggle/label'
import FormCategory from '../product/category'
import FormBrand from '../product/brand'
import FormProduct from './product'

export default function Specification({ formik }) {
  const handleDelete = () => {}

  return (
    <div className="flex flex-col gap-6">
      <Heading title="Informações específicas" />
      <div className="flex flex-col gap-4">
        <ToggleLabel
          id="everyOne"
          name="everyOne"
          label="Todos produtos"
          error={formik.touched?.everyOne && formik.errors?.everyOne}
          onChange={() => {
            formik.setFieldValue('everyOne', !formik.values.everyOne)
            formik.setFieldValue('category', [])
            formik.setFieldValue('brand', [])
            formik.setFieldValue('product', [])
          }}
          onBlur={formik.handleBlur}
          value={formik.values?.everyOne}
          checked={formik.values?.everyOne}
        />
        {formik?.values?.everyOne !== true && (
          <>
            <div className="flex gap-4 sm:flex-row flex-col">
              <FormCategory
                formik={formik}
                label="Categoria"
                className="flex-1"
              />
              <FormBrand
                formik={formik}
                label="Marca"
                multiple
                className="flex-1"
              />
            </div>
            <FormProduct
              formik={formik}
              columns={offerProductColumns(handleDelete)}
            />
          </>
        )}
      </div>
    </div>
  )
}

/* eslint-disable react/prop-types */
import Wrapper from '../../../ui/common/wrapper'
import ToggleLabel from '../../../ui/inputs/toggle/label'
import TextLabel from '../../../ui/inputs/text/label'

export default function Identity({ formik }) {
  const handleClear = () => {}

  return (
    <Wrapper title="Identitifação" handleClear={handleClear}>
      <div className="flex flex-col gap-4">
        <ToggleLabel
          id="status"
          name="status"
          label="Status"
          error={formik.touched.status && formik.errors.status}
          onChange={() => {
            formik.setFieldValue('status', !formik.values.status)
          }}
          onBlur={formik.handleBlur}
          checked={formik.values.status}
        />

        <div className="flex gap-4 sm:flex-row flex-col">
          <TextLabel
            id="name"
            label="Nome"
            placeholder="Infome nome do produto"
            name="name"
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="flex-grow"
          />
          <TextLabel
            id="sku"
            label="SKU"
            placeholder="Infome sku do produto"
            name="sku"
            error={formik.touched.sku && formik.errors.sku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sku}
            className="flex-grow"
          />
          <TextLabel
            id="code"
            label="Código"
            placeholder="Infome código do produto"
            name="code"
            error={formik.touched.code && formik.errors.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.code}
            className="flex-grow"
          />
        </div>
      </div>
    </Wrapper>
  )
}

/* eslint-disable react/prop-types */
import Wrapper from '../../../ui/common/wrapper'
import TextLabel from '../../../ui/inputs/text/label'
import TextAreaLabel from '../../../ui/inputs/textarea/label'

export default function Seo(props) {
  const handleClear = () => {}

  return (
    <Wrapper title="SEO" handleClear={handleClear}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <TextLabel
            id="seoData.metaTitle"
            label="Título"
            placeholder="Infome título do produto"
            name="seoData.metaTitle"
            error={
              props.formik.touched?.seoData?.metaTitle &&
              props.formik.errors?.seoData?.metaTitle
            }
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            value={props.formik.values?.seoData?.metaTitle}
            className="flex-grow"
          />
          <TextLabel
            id="seoData.slug"
            label="Slug"
            placeholder="Infome slug do produto"
            name="seoData.slug"
            error={
              props.formik.touched?.seoData?.slug &&
              props.formik.errors?.seoData?.slug
            }
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            value={props.formik.values?.seoData?.slug}
            className="flex-grow"
          />
        </div>
        <TextAreaLabel
          id="seoData.metaDescription"
          label="Descrição"
          name="seoData.metaDescription"
          placeholder="Informe a descrição resumida do produto"
          error={
            props.formik.touched?.seoData?.metaDescription &&
            props.formik.errors?.seoData?.metaDescription
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.seoData?.metaDescription}
        />
      </div>
    </Wrapper>
  )
}

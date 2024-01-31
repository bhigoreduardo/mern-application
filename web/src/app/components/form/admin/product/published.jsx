/* eslint-disable react/prop-types */
import { published, visibility } from '../../../../../types/common-type'
import Wrapper from '../../../ui/common/wrapper'
import SelectLabel from '../../../ui/inputs/select/label'

export default function Published(props) {
  return (
    <Wrapper title="Publicação">
      <div className="flex gap-4 sm:flex-row flex-col">
        <SelectLabel
          id="published.step"
          label="Status"
          name="published.step"
          placeholder="Selecione"
          data={published}
          error={
            props.formik.touched?.published?.step &&
            props.formik.errors?.published?.step
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.published?.step}
          className="flex-1 flex-grow"
        />
        <SelectLabel
          id="published.visibility"
          label="Visibilidade"
          name="published.visibility"
          placeholder="Selecione"
          data={visibility}
          error={
            props.formik.touched?.published?.visibility &&
            props.formik.errors?.published?.visibility
          }
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values?.published?.visibility}
          className="flex-1 flex-grow"
        />
      </div>
    </Wrapper>
  )
}

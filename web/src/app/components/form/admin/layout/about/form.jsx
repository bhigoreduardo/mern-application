/* eslint-disable react/prop-types */
import Wrapper from '../../../../ui/common/wrapper'
import TextLabel from '../../../../ui/inputs/text/label'
import TextRichLabel from '../../../../ui/inputs/textrich/label'

export default function Form({ title, formik, fields }) {
  const handleClear = () => {}

  return (
    <Wrapper title={title} handleClear={handleClear}>
      <div className="flex flex-col gap-4">
        <TextLabel
          id={fields[0]}
          label="Título"
          placeholder="Infome título da informação"
          name={fields[0]}
          error={formik.touched?.[fields[0]] && formik.errors?.[fields[0]]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.[fields[0]]}
          className="flex-grow"
        />

        <TextRichLabel
          id={fields[1]}
          label="Descrição"
          placeholder="Informe a descrição"
          onChange={(value) => formik.setFieldValue([fields[1]], value)}
          value={formik.values?.[fields[1]]}
          error={formik.touched?.[fields[1]] && formik.errors?.[fields[1]]}
          className="mb-6"
        />
      </div>
    </Wrapper>
  )
}

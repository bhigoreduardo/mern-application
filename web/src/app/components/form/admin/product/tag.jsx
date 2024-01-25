/* eslint-disable react/prop-types */
import * as yup from 'yup'
import { useFormik } from 'formik'
import { XCircle } from 'phosphor-react'

import Button from '../../../ui/buttons/button'
import Badge from '../../../ui/common/badge'
import Wrapper from '../../../ui/common/wrapper'
import TextLabel from '../../../ui/inputs/text/label'

export default function Tag(props) {
  const formik = useFormik({
    initialValues: { title: '' },
    validationSchema: yup
      .object()
      .shape({ title: yup.string().required('Tag é obrigatório') }),
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)
  const handleClear = () => {}
  const handleRemove = () => {}

  return (
    <Wrapper title="Tags" handleClear={handleClear}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <TextLabel
            id="title"
            placeholder="Informe a tag"
            name="title"
            error={formik.touched.title && formik.errors.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="flex-grow"
          />
          <Button
            onClick={formik.handleSubmit}
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 h-[37.6px] uppercase"
          >
            Adicionar
          </Button>
        </div>
        <div className="flex flex-wrap justify-start gap-1">
          {props.formik.values.tags?.length > 0 &&
            props.formik.values.tags.map((item, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleRemove(i)}
                className="group relative"
              >
                <Badge className="bg-gray-200">{item}</Badge>
                <Badge className="w-full hidden group-hover:inline-flex justify-center text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-40">
                  <XCircle size={20} />
                </Badge>
              </button>
            ))}
        </div>
      </div>
    </Wrapper>
  )
}

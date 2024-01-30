/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import { categories } from '../../../../utils/mock'
import {
  categoryInitalValues,
  categoryValidationSchema,
} from '../../../../types/admin/form-type'
import { parsedSelectData } from '../../../../utils/format'
import { highlightProductColumns } from '../../../../utils/contants/admin'
import { imageMessage } from '../../../../utils/helper'
import ImageLabel from '../../ui/inputs/image/label'
import TextLabel from '../../ui/inputs/text/label'
import SelectLabel from '../../ui/inputs/select/label'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import Heading from '../../ui/table/heading'
import Button from '../../ui/buttons/button'
import FormHighlight from './highlight'

export default function Category({ data }) {
  const parsedData = categories && parsedSelectData(categories, '_id', 'name')
  const parsedCategories = data
    ? parsedData?.filter((item) => item.value !== data._id)
    : parsedData
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data
      ? {
          ...data,
          ...(Object.keys(data)?.length !== 0 && {
            product: data?.spotlights || [],
          }),
        }
      : categoryInitalValues,
    validationSchema: categoryValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)
  const handleDelete = () => {}

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 px-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <ImageLabel
            id="image"
            label="Imagem"
            name="image"
            info="512*512"
            hint={imageMessage('70kb')}
            error={formik.touched.image && formik.errors.image}
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            onClear={() => formik.setFieldValue('image', '')}
          />
          <TextLabel
            id="name"
            label="Nome"
            placeholder="Infome nome da categoria"
            name="name"
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="flex-grow"
          />
          {parsedCategories?.length > 0 && (
            <SelectLabel
              id="parent"
              label="Categoria herdeira"
              name="parent"
              placeholder="Selecione"
              data={parsedCategories}
              error={formik.touched.parent && formik.errors.parent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.parent}
              className="flex-grow"
            />
          )}
        </div>
        <TextAreaLabel
          id="description"
          label="Descrição"
          name="description"
          placeholder="Informe a descrição da categoria"
          error={formik.touched.description && formik.errors.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </div>
      {data && Object.keys(data)?.length !== 0 && (
        <>
          <Heading title="Destaques" />
          <FormHighlight
            formik={formik}
            columns={highlightProductColumns(handleDelete)}
          />
        </>
      )}
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

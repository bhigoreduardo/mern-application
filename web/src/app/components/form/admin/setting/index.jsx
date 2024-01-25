/* eslint-disable react/prop-types */
import { useFormik } from 'formik'

import {
  cnpjMask,
  ieMask,
  mobileMask,
  phoneMask,
} from '../../../../../utils/mask'
import {
  settingInitialValues,
  settingValidationSchema,
} from '../../../../../types/admin/form-type'
import { imageMessage } from '../../../../../utils/helper'
import ImageLabel from '../../../ui/inputs/image/label'
import TextLabel from '../../../ui/inputs/text/label'
import TextAreaLabel from '../../../ui/inputs/textarea/label'
import Button from '../../../ui/buttons/button'

export default function Setting({ user }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user ? { ...user } : settingInitialValues,
    validationSchema: settingValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const handleSubmit = async (values) => console.log(values)

  return (
    <form className="flex flex-col gap-6 px-6" onSubmit={formik.handleSubmit}>
      <div className="flex gap-4">
        <ImageLabel
          id="image"
          label="Imagem"
          name="image"
          info="800*800"
          hint={imageMessage('70kb')}
          error={formik.touched.image && formik.errors.image}
          onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          onClear={() => formik.setFieldValue('image', '')}
        />
        <div className="flex-grow flex flex-col gap-4">
          <div className="flex gap-4">
            <TextLabel
              id="name"
              label="Nome"
              placeholder="Infome nome da loja"
              name="name"
              error={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="flex-grow"
            />
            <TextLabel
              id="email"
              label="Email"
              placeholder="Infome email"
              name="email"
              error={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="flex-grow"
              disabled
            />
            <TextLabel
              id="contactEmail"
              label="Email de contato"
              placeholder="Infome email de contato"
              name="contactEmail"
              error={formik.touched.contactEmail && formik.errors.contactEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactEmail}
              className="flex-grow"
            />
          </div>
          <div className="flex gap-4">
            <TextLabel
              id="phone"
              label="Telefone"
              placeholder="Infome o telefone"
              name="phone"
              error={formik.touched.phone && formik.errors.phone}
              onChange={(e) =>
                formik.setFieldValue('phone', phoneMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={phoneMask(formik.values.phone)}
              className="flex-grow"
            />
            <TextLabel
              id="whatsApp"
              label="WhatsApp"
              placeholder="Infome seu whatsApp"
              name="whatsApp"
              error={formik.touched.whatsApp && formik.errors.whatsApp}
              onChange={(e) =>
                formik.setFieldValue('whatsApp', mobileMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={mobileMask(formik.values.whatsApp)}
              className="flex-grow"
            />
          </div>
          <div className="flex gap-4">
            <TextLabel
              id="cnpj"
              label="CNPJ"
              placeholder="Infome o CNPJ"
              name="cnpj"
              error={formik.touched.cnpj && formik.errors.cnpj}
              onChange={(e) =>
                formik.setFieldValue('cnpj', cnpjMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={cnpjMask(formik.values.cnpj)}
              className="flex-grow"
            />
            <TextLabel
              id="ie"
              label="IE"
              placeholder="Infome seu IE"
              name="ie"
              error={formik.touched.ie && formik.errors.ie}
              onChange={(e) =>
                formik.setFieldValue('ie', ieMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={ieMask(formik.values.ie)}
              className="flex-grow"
            />
          </div>
          <div className="flex gap-4">
            <TextLabel
              id="clockAvailable"
              label="Horário de funcionamento"
              placeholder="Infome horário de funcionamento"
              name="clockAvailable"
              hint="Separe os horário com ',' (vírgula). Ex: Seg à Sex: 8-18h, Sáb: 8-12h"
              error={
                formik.touched.clockAvailable && formik.errors.clockAvailable
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clockAvailable}
              className="flex-grow"
            />
            <TextLabel
              id="site"
              label="Site"
              placeholder="Infome o site"
              name="site"
              error={formik.touched.site && formik.errors.site}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.site}
              className="flex-grow"
            />
          </div>
          <TextAreaLabel
            id="description"
            label="Descrição"
            name="description"
            hint="Breve resumo sobre a loja, tente usar até no máximo 500 caracteres"
            placeholder="Informe a descrição"
            error={formik.touched.description && formik.errors.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </div>
      </div>
      <Button
        type="submit"
        className="bg-orange-500 text-white hover:bg-orange-600 w-fit !p-2 uppercase"
      >
        Salvar
      </Button>
    </form>
  )
}

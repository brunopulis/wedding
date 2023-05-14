import { SelectIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeService',
  type: 'document',
  icon: SelectIcon,
  title: 'Tipo de serviço',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tipo serviço'
    }),
  ]
})

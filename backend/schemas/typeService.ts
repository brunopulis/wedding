import { BasketIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeService',
  type: 'document',
  icon: BasketIcon,
  title: 'Categoria de serviço',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tipo serviço'
    }),
  ]
})

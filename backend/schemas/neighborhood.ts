import { HeartIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'neighboorhood',
  type: 'document',
  icon: HeartIcon,
  title: 'Bairro',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: (Rule) => Rule.required(),
    })
  ]
})

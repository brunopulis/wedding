import { UserIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'couple',
  type: 'document',
  icon: UserIcon,
  title: 'Casal',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem'
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'blockContent', 
    })
  ]
})

import { HomeIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accomodation',
  type: 'document',
  icon: HomeIcon,
  title: 'Locais',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contact',
      type: 'number',
      title: 'Contato'
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Link',
      description: 'adicione a URL do local'
    }),
    defineField({
      name: 'location', 
      title: 'Localização',
      type: 'string', 
    })
  ]
})

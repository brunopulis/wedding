import { PlayIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'attraction',
  type: 'document',
  icon: PlayIcon,
  title: 'Atrações turísticas',
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
      title: 'Imagem destacada'
    }),
    defineField({
      name: 'contact',
      type: 'number',
      title: 'Contato'
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Instagram'
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'blockContent', 
    })
  ]
})

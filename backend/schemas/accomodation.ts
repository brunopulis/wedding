import { HomeIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import typeAccomodation from './typeAccomodation'
import neighborhood from './neighborhood'

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
      name: 'type',
      type: 'reference',
      title: 'Tipo local',
      to: [{type: 'typeAccomodation' }]
    }),
    defineField({
      name: 'neighboorhood',
      type: 'reference',
      title: 'Bairro',
      to: [{type: 'neighboorhood' }]
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

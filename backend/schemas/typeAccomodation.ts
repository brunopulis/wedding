import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeAccomodation',
  type: 'document',
  title: 'Tipo de local',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tipo local'
    }),
  ]
})

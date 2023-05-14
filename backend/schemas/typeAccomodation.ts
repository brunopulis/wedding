import { SelectIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeAccomodation',
  type: 'document',
  icon: SelectIcon,
  title: 'Tipo de local',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tipo local'
    }),
  ]
})

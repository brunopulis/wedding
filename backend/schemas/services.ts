import { UserIcon } from '@sanity/icons'
import serviceType from './typeService'

export default {
  name: 'service',
  type: 'document',
  icon: UserIcon,
  title: 'Serviços',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do profissional'
    },
    {
      name: 'type',
      title: 'Tipo serviço',
      type: 'reference',
      to: [{ type: serviceType.name }],
    },
    {
      name: 'contact',
      type: 'number',
      title: 'Contato'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Instagram',
      description: 'Rede social do profissional'
    }
  ]
}

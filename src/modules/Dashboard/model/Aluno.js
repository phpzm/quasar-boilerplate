import { parseRecord } from 'src/modules/Dashboard/model/Util'

// definition of entity
export const schemas = {
  'aln_nome': {
    field: 'aln_nome',
    component: 'field-text',
    label: 'Nome',
    placeholder: 'Informe o nome',
    default: ''
  },
  'aln_sexo': {
    field: 'aln_sexo',
    component: 'field-radio',
    options: [
      {
        value: 'F',
        label: 'Feminino'
      },
      {
        value: 'M',
        label: 'Masculino'
      }
    ],
    label: 'Sexo',
    placeholder: 'Informe o sexo',
    default: ''
  }
}

export const record = parseRecord(schemas)

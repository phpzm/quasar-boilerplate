export const defaults = {
  tabs: [],
  scope: '',
  editable: false,
  fixed: false,
  schemas: [],
  actions: [],
  record: {},
  stylish: {},
  debug: false,
  scopes: [
    {
      id: 'view',
      method: 'get',
      editable: false
    },
    {
      id: 'create',
      method: 'post',
      editable: true
    },
    {
      id: 'edit',
      method: 'put',
      editable: true
    }
  ]
}

export default {
  data: () => ({
    dirty: false,
    blocked: false,
    ...defaults
  })
}

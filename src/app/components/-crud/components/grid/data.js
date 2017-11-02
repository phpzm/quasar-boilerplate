export const defaults = {
  scope: 'index',
  loaded: 'none',
  schemas: [],
  actions: [],
  records: [],
  toolbar: true,
  header: true,
  filter: false,
  visibility: false,
  search: false,
  pagination: false,
  sortable: false,
  page: 1,
  pages: 1,
  height: '',
  debug: false
}

export default {
  data: () => ({
    ...defaults
  })
}

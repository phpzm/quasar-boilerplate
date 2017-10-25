export default {
  data: () => ({
    type: 'grid',
    limits: [
      {
        value: 5, label: '5'
      },
      {
        value: 10, label: '10'
      },
      {
        value: 15, label: '15'
      },
      {
        value: 20, label: '20'
      },
      {
        value: 25, label: '25'
      },
      {
        value: 50, label: '50'
      },
      {
        value: 100, label: '100'
      },
      {
        value: 250, label: '250'
      },
      {
        value: 500, label: '500'
      }
    ],
    controls: {
      visibility: {
        model: [],
        options: []
      },
      filter: {
        model: [],
        options: []
      },
      pagination: 1,
      limit: 25,
      search: '',
      order: []
    }
  })
}

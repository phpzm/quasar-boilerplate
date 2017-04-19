export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/Components/Home' },
      { path: 'forms', component: 'Dashboard/Components/Forms' },
      { path: 'charts', component: 'Dashboard/Components/Charts' },
      { path: 'crud', component: 'Dashboard/Components/Crud' }
    ]
  }
]

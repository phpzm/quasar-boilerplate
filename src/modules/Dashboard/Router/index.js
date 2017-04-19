export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/Components/Index' },
      { path: 'forms', component: 'Dashboard/Components/Forms' }
    ]
  }
]

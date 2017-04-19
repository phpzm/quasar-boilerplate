export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/Components/Index' },
      { path: 'academic', component: 'Dashboard/Components/Academic' }
    ]
  }
]

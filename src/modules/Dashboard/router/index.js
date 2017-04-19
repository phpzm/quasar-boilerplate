export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/components/Index' },
      { path: 'academic', component: 'Dashboard/components/Academic' }
    ]
  }
]

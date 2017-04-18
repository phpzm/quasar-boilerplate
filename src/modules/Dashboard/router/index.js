export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/components/Index' }
    ]
  }
]

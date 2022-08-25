const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AdminPage.vue') }],
    meta: { title: 'Admin' },
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'fm', component: () => import('pages/FleetManagerPage.vue') },
    ],
    meta: { title: 'Fleet manager' },
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'operator', component: () => import('pages/OperatorPage.vue') },
    ],
    meta: { title: 'Operator' },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

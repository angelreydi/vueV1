const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'inicio', component: () => import('pages/IndexPage.vue') },
      { path: 'productos', component: () => import('pages/pageProductos.vue') },
      { path: 'nuevo', component: () => import('pages/nuevoProducto.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

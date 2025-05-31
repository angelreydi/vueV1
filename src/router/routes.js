const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue')
  },
  {
    path: '/MainPage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'inicio', component: () => import('pages/IndexPage.vue') },
      { path: 'productos', component: () => import('pages/pageProductos.vue') },
      { path: 'nuevo', component: () => import('pages/nuevoProducto.vue') },
      { path: 'detalle', component: () => import('pages/detalleNota.vue') },
      { path: 'resumen', component: () => import('pages/ResumenNota.vue') },
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

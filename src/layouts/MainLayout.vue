<template>
  <q-layout  view="hHh lpR fFf" class="bg-grey-3">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn flat round icon="shopping_bag" />
        <q-btn flat round icon="cached"/>
        <q-btn flat round icon="shopping_cart" />
        <q-btn flat round icon="notifications"  />

        <q-btn flat round icon="security_update_good" />
          <q-avatar >
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" >
          </q-avatar>
        <q-btn flat round icon="more_vert" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above v-model="leftDrawerOpen" side="left" bordered
    >
      <q-list bordered>
        <q-item clickable v-ripple v-if="true" @click="navegar('inicio')">
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
          <q-item-section>NOTAS</q-item-section>
        </q-item>
        <q-item clickable v-ripple v-if="true" @click="navegar('productos')">
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
          <q-item-section>PRODUCTOS</q-item-section>
        </q-item>
        <q-item clickable v-ripple  @click="navegar('vista2')">
          <q-item-section avatar>
            <q-icon color="primary" name="people" />
          </q-item-section>
          <q-item-section>Clientes</q-item-section>

        </q-item>
        <q-item clickable v-ripple v-if="true" @click="navegar('vista3')">
          <q-item-section avatar>
            <q-icon color="primary" name="store" />
          </q-item-section>
          <q-item-section>Ventas</q-item-section>

        </q-item>
        <q-item clickable v-ripple @click="navegar('vista4')">
          <q-item-section avatar>
            <q-icon color="primary" name="store" />
          </q-item-section>
          <q-item-section>Sucursales</q-item-section>

        </q-item>
      </q-list>
      <q-item>
        Usuario conectado: XD
      </q-item>
      <q-item class="flex flex-center">

        <q-btn color="deep-orange" glossy label="Cerrar sesion" @click="salir" />
      </q-item>
    </q-drawer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref,onMounted  } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
onMounted(() => {
  console.log('XD')

})
function navegar(ruta) {
  router.push(ruta);
}

//function actualizarRolSeleccionado(nuevoRol) {
//rolSeleccionado.value = nuevoRol
//}

//function actualizarSucursalSeleccionada(nuevaSucursal) {
//  sucursalSeleccionada.value = nuevaSucursal
//}

function salir(){
  router.push('/')
}
</script>

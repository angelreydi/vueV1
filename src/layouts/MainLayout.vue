<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn
          label="Peso Arg" icon="cached" color="blue"
        />
        <q-btn
          icon="shopping_cart" color="primary"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
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

    <q-page-container>
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

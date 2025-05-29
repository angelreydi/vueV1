<template>
  <div>
    <div class="row bordered">
      <div class="col-9"><h6 class=" q-ma-none" >Detalle de nota</h6></div>
      <div class="col-3 float-left">
        <h6 class="q-ma-none text-orange bg-dark">
          ID: 78348
        </h6>
      </div>
    </div>
    <q-separator />
    <div class="row bordered">
      <q-markup-table flat bordered
                      class="full-width">
        <q-infinite-scroll
          @load="listar"
          :debounce="500"
        ><!-- Scroll infinito aquí -->
          <thead class="bg-info" >
          <tr>
            <th class="text-left" style="width: 10%;">No</th>
            <th class="text-center" style="width: 50%;">Detalle</th>
            <th class="text-right" style="width: 20%;">Precio</th>
            <th class="text-right" style="width: 20%;">Cant</th>
          </tr>
          </thead>

          <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">

          <tr >
            <td class="text-left">343</td>
            <td class="text-left">Doña santusa -santa fe klan</td>
            <td class="text-right">15/4/2025 16:12 PM</td>
            <td class="text-right"><q-badge transparent align="middle" color="purple">
              Venta al credito
            </q-badge></td>
          </tr>

          <tr>
            <div v-if="hayMasDatos" class="text-center row justify-center">
              <q-spinner-dots color="primary" size="40px">
              </q-spinner-dots>
            </div>
          </tr>
          </tbody>
        </q-infinite-scroll>
      </q-markup-table>
    </div>
    <div class="row bordered">
      <div class="col-4">
        <p>Total:</p>

      </div>
      <div class="col-8">
       <div class="row">
         <div class="col-8">
           <h3 class="col q-my-none">30.000</h3>
         </div>
         <div class="col">
           <p>Ps. Arg.</p>
         </div>
       </div>
      </div>
    </div>
    <div class="row bordered q-pa-sm">
      <q-btn @click="siguiente" class="full-width" color="deep-orange" glossy label="Siguiente"></q-btn>
    </div>
    <div class="row bordered q-pa-sm">
      <div class="col-10">
        <q-btn @click="productos" class="full-width" outline style="color: goldenrod;" label="Seguir aumentando" />
      </div>
      <div class="col-2">
        <q-btn
          round
          dense
          flat
          icon="delete"
          color="red"
          @click="deleteItem"
        />
      </div>
    </div>
    <q-separator />
    <div class="row bordered">

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function siguiente() {
  router.push('/resumen')
}
function productos() {
  router.push('/inicio')
}
</script>

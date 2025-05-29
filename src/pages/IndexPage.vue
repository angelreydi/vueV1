<template>
  <div >
    <div class="row q-pa-sm">
      <div class="col-4 ">
        <p>NOTAS</p>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-3">
            <q-btn color="primary" @click="nuevo" label="+" style="margin-left: 5px"/>
          </div>
          <div class="col-7">
            <q-select
              filled
              label="Todos"
              option-label="rol"
              option-value="rol"
              emit-value
              map-options
            />
          </div>
          <div class="col-1">
            <q-btn
              round
              dense
              flat
              icon="filter_alt"
              @click="icon = true"
            />
            <q-dialog v-model="icon">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Filtrar por:</div>
                  <q-space/>
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                  <div class="row q-pa-sm">
                    <div class="col-5">
                      <q-radio class="q-mr-sm" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Codigo" label="Codigo" />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        outlined
                        label="###" />
                    </div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col-5">
                      <q-radio class="q-mr-sm" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Cliente" label="Cliente" />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        outlined
                        label="Ingrese texto" />
                    </div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col-5">
                      <q-radio class="q-mr-sm" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Etiqueta" label="Etiqueta" />
                    </div>
                    <div class="col">
                      <q-select
                        filled
                        label="Seleccionar"
                        option-label="rol"
                        option-value="rol"
                        emit-value
                        map-options
                      />
                    </div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col-5">
                      <q-radio class="q-mr-sm" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Fecha" label="Fecha" />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        outlined/>
                    </div>
                  </div>
                  <div class="row q-pa-sm">
                    <q-item class="flex flex-center full-width">
                      <q-btn class="full-width" color="deep-orange" glossy label="Aceptar" v-close-popup/>
                    </q-item>
                  </div>

                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </div>

      </div>
    </div>
    <div class="row q-px-md">
      <q-input
        class="full-width "
        outlined
        filled

        label="Nombre de cliente o id"
        hint="filtrar por criterios"

      />
    </div>

    <q-markup-table flat bordered
                    class="full-width">
      <q-infinite-scroll
        @load="listar"
        :debounce="500"
      ><!-- Scroll infinito aquí -->
        <thead class="bg-teal full-width" >
        <tr>
          <th class="text-left" >id</th>
          <th class="text-left" >Cliente</th>
          <th class="text-center" >Registro</th>
          <th class="text-center" >Etiqueta</th>
        </tr>
        </thead>

        <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">

        <tr @click="detalle" class="full-width">
          <td class="text-left">343</td>
          <td class="text-left">Doña santusa -santa fe klan</td>
          <td class="text-right">15/4/2025 16:12 PM</td>
          <td class="text-right"><q-badge transparent align="middle" color="purple">
            Venta al credito
          </q-badge></td>
        </tr>
        <tr @click="detalle">
          <td class="text-left">543534</td>
          <td class="text-left">Doña santusa -santa fe klan fe de jujuy</td>
          <td class="text-right">15/4/2025 16:12 PM</td>
          <td class="text-right"><q-badge transparent align="middle" color="green">
            Venta al contado
          </q-badge></td>
        </tr>
        <tr @click="detalle">
          <td class="text-left">543534</td>
          <td class="text-left">Doña santusa -santa fe klan fe de jujuy</td>
          <td class="text-right">15/4/2025 16:12 PM</td>
          <td class="text-right"><q-badge transparent align="middle" color="orange">
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

</template>

<script setup>
import { ref } from 'vue';
//import servicesData from '../store/servicesData';
import axios from 'axios'
const URL = 'https://jsonplaceholder.typicode.com'
import { useRouter } from 'vue-router'
const router = useRouter()
const icon = ref(false)

const productos = ref([]);
const limite = 10
const hayMasDatos = ref(true)


// Simulación de una llamada al backend
async function listar(index, done){
  const inicio = index * limite
  const query = `?_start=${inicio}&_limit=${limite}`
  const {data} = await axios.get(`${URL}/posts${query}`)
  if(data.length === 0) hayMasDatos.value = false;
  else productos.value.push(...data);
  done()
}
function nuevo(){
  router.push('/nuevo')
}
function detalle(){
  router.push('/detalle')
}
</script>



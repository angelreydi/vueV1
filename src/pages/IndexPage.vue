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
                        outlined
                        type="date"/>
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
        class="full-width q-mb-xs"
        outlined
        filled
        label="Nombre de cliente o id"
        suffix="filtrar"
      />
    </div>

      <q-infinite-scroll
        @load="listar"
        :debounce="500"
      ><!-- Scroll infinito aquí -->
        <div class=" row items-start  q-gutter-md full-width">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-pa-xs" @click="detalle">
              <div class="col-8">
                <q-label class="row text-bold">475</q-label>
                <q-label class="row q-pl-md">Doña saturnina - Santa Fe klan</q-label>
                <q-label class="row q-pl-md">15/12/2021</q-label>
              </div>
              <div class="col-4 justify-center q-pa-md">
                <label><q-badge rounded color="purple" label="Cotizacion" /></label>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class=" row items-start  q-gutter-md full-width">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-pa-xs" @click="detalle">
              <div class="col-8">
                <q-label class="row text-bold">463</q-label>
                <q-label class="row q-pl-md">Doña saturnina - Santa Fe klan</q-label>
                <q-label class="row q-pl-md">15/12/2021</q-label>
              </div>
              <div class="col-4 justify-center q-pa-md">
                <label><q-badge rounded color="orange" label="Vneta credito" /></label>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class=" row items-start  q-gutter-md full-width">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-pa-xs" @click="detalle">
              <div class="col-8">
                <q-label class="row text-bold">12334</q-label>
                <q-label class="row q-pl-md">Doña saturnina - Santa Fe klan</q-label>
                <q-label class="row q-pl-md">15/12/2021</q-label>
              </div>
              <div class="col-4 justify-center q-pa-md">
                <label><q-badge rounded color="green" label="Venta credito" /></label>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class=" row items-start  q-gutter-md full-width">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-pa-xs" @click="detalle">
              <div class="col-8">
                <q-label class="row text-bold">7504</q-label>
                <q-label class="row q-pl-md">Doña saturnina - Santa Fe klan</q-label>
                <q-label class="row q-pl-md">15/12/2021</q-label>
              </div>
              <div class="col-4 justify-center q-pa-md">
                <label><q-badge rounded color="yellow" label="Vneta relazada" /></label>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class=" row items-start  q-gutter-md full-width">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-pa-xs" @click="detalle">
              <div class="col-8">
                <q-label class="row text-bold"> 475</q-label>
                <q-label class="row q-pl-md">Doña saturnina - Santa Fe klan</q-label>
                <q-label class="row q-pl-md">15/12/2021</q-label>
              </div>
              <div class="col-4 justify-center q-pa-md">
                <label><q-badge rounded color="red" label="Delivery devuelto" /></label>
              </div>
            </q-card-section>
          </q-card>
        </div>





      </q-infinite-scroll>
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



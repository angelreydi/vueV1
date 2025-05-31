<template >
  <div class="">
    <div class="row q-pa-sm">
      <div class="col-4 ">
        <p>PRODUCTOS</p>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-3">
            <q-btn color="primary" @click="nuevo" label="+" style="margin-left: 5px"/>
          </div>
          <div class="col-7">
            <q-select
              class="q-input--dense q-pa-none"
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
                        type="date"
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


      <q-infinite-scroll
        @load="listar"
        :debounce="500"
      ><!-- Scroll infinito aquí -->

          <div class=" row items-start q-gutter-md full-width ">
            <q-card class="col my-card full-width border-radius-10 q-mb-xs" flat bordered>
              <q-card-section horizontal class="q-py-xs">
                <div class="col-3 q-pa-sm items-center" >
                  <q-img
                    class="q-ml-sm shadow-10 rounded-borders"
                    ratio="1"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                  />
                </div>
                <div class="col q-pl-sm" v-if="formato">
                  <div class="row" ><q-label class="text-bold">Olla essen termica nueclear</q-label></div>
                  <div class="row text-caption text-grey">Venta: Si - Catalogo: Si</div>
                  <div class="row">
                    <div class="col">
                      <div class="row justify-start text-bold">
                        45,000 Ps
                      </div>
                      <div class="row justify-start text-caption text-primary">
                        Unidad
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-start text-bold">
                        950,000 Ps
                      </div>
                      <div class="row justify-start text-caption text-primary">
                        Por mayor
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-start text-bold">
                        120 Pcs
                      </div>
                      <div class="row justify-start text-caption text-primary">
                        Stock
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col q-pl-sm" v-if="!formato">
                  <div class="row" ><p class="q-ma-none text-bold">Olla essen termica nueclear</p></div>
                  <div class="row text-caption text-grey"></div>
                  <div class="row">
                    <h4 class="text-bold q-ma-none text-grey">239 </h4> Pesos Arg
                  </div>
                  <div class="row text-caption text-primary">
                    Alerta de stock minimo: 10 Pcs
                  </div>
                </div>
<!--                <div class="col-3">-->
<!--                  <q-card-actions vertical class="justify-around q-px-md ">-->
<!--                    <q-label class="text-caption ">Stok:120</q-label>-->
<!--                    <q-icon-->
<!--                      size="md"-->
<!--                      name="article"-->
<!--                      class="text-caption text-grey"-->
<!--                    />-->
<!--                  </q-card-actions>-->
<!--                </div>-->
              </q-card-section>
            </q-card>
          </div>
        <div class=" row items-start  q-gutter-md full-width ">
          <q-card class="col my-card full-width" flat bordered>
            <q-card-section horizontal class="q-py-xs">
              <div class="col-3 q-pa-sm items-center" >
                <q-img
                  class="q-ml-sm shadow-10 rounded-borders"
                  ratio="1"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </div>
              <div class="col q-pl-sm" v-if="formato">
                <div class="row" ><q-label class="text-bold">Olla essen termica nueclear</q-label></div>
                <div class="row text-caption text-grey">Venta: Si - Catalogo: Si</div>
                <div class="row">
                  <div class="col">
                    <div class="row justify-start text-bold">
                      45,000 Ps
                    </div>
                    <div class="row justify-start text-caption text-primary">
                      Unidad
                    </div>
                  </div>
                  <div class="col">
                    <div class="row justify-start text-bold">
                      950,000 Ps
                    </div>
                    <div class="row justify-start text-caption text-primary">
                      Por mayor
                    </div>
                  </div>
                  <div class="col">
                    <div class="row justify-start text-bold">
                      120 Pcs
                    </div>
                    <div class="row justify-start text-caption text-primary">
                      Stock
                    </div>
                  </div>
                </div>
              </div>
              <div class="col q-pl-sm" v-if="!formato">
                <div class="row" ><p class="q-ma-none text-bold">Olla essen termica nueclear</p></div>
                <div class="row text-caption text-grey"></div>
                <div class="row">
                  <h4 class="text-bold q-ma-none text-grey">239 </h4> Pesos Arg
                </div>
                <div class="row text-caption text-primary">
                  Alerta de stock minimo: 10 Pcs
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class=" fixed-bottom q-pa-md">
          <div class="row justify-between">
            <q-btn class="" label="Formato 1" @click="fomatear" color="primary"/>
            <q-btn class="" label="Formato 2" @click="fomatear" color="primary"/>
          </div>
        </div>

          <div v-if="hayMasDatos" class="text-center row justify-center">
            <q-spinner-dots color="primary" size="40px">
            </q-spinner-dots>
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
const formato = ref(false)

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
function fomatear(){
  formato.value = !formato.value
}
</script>



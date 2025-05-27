<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h6 style="margin: 0">
      Registrar nuevo producto
    </h6>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        label="Nombre"
      />
      <div class="row ">
        <div class="col">
          <q-input
            filled
            v-model="name"
            label="Precio unitario"
            hint="Ps.Arg"
          />

        </div>
        <div class="col">
          <q-input
            filled
            v-model="name"
            label="Precio por mayor"
            hint="Ps.Arg"
          />
        </div>
      </div>
      <div class="row">
        <div class="q-pa-md">
          <q-btn icon="camera" color="primary" @click="takePhoto" />
          <div v-if="image" class="q-mt-md">
            <img :src="image" alt="Imagen tomada" style="max-width: 100%;" />
          </div>
        </div>
        <label class="col">Foto</label>

        <q-file class="col"
                v-model="selectedFile"
                label="Seleccionar archivo"
                outlined
                dense
                clearable
                counter
                @update:model-value="handleFileChange"
        />
        <q-file class="col"
                v-model="selectedFile"
                label="Seleccionar archivo"
                outlined
                dense
                clearable
                counter
                @update:model-value="handleFileChange"
        />
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <label class="col">Visible en catalogo</label>
            <q-toggle class="col" v-model="accept"/>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <label class="col">Visible en Ventas</label>
            <q-toggle class="col" v-model="accept"/>
          </div>
        </div>
      </div>
      <div class="bi-align-bottom">
        <q-btn class="full-width" label="Guardar" type="submit" color="primary"/>

      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  setup () {
    const $q = useQuasar()
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }

    }
  }
}
</script>

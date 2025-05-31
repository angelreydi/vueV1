<template>
  <div style="height: 400px">
    <div class=" row bg-primary rotate-45" style="height: 500px; width: 500px; translate: -400px -100px">

    </div>
  </div>
 <div class="row ">
   <div class="q-px-lg justify-center align-center q-gutter-md row full-width ">
     <q-card class="my-card full-width bg-secondary" style="border-radius: 40px">
       <q-card-section>
         <q-form
           @submit="onSubmit"
           @reset="onReset"
           class="q-gutter-md"
         >
           <q-input
             v-model="name"
             label="Username"
             hint=""
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type something']"
           />

           <q-input
             type="number"
             v-model="age"
             label="Password"
             lazy-rules
             :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
           />

           <label class="text-primary" >Olvido su contraseña</label>

           <div class="q-gutter-md q-px-xl" >
             <q-btn label="Submit" type="Login" class="full-width q-pa-md" style="border-radius: 40px" color="primary" @click="navegar('/MainPage')"/>
           </div>
         </q-form>
       </q-card-section>
     </q-card>
   </div>
 </div>
</template>

<script setup>
import { onMounted  } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useQuasar } from 'quasar'
import { ref } from 'vue'
const $q = useQuasar()
const name = ref(null)
const age = ref(null)
const accept = ref(false)

onMounted(() => {
  console.log('XD')
})
function navegar(ruta) {
  router.push(ruta)
}
function onSubmit () {
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
}


</script>

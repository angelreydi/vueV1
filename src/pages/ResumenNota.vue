<template>
  <div>
    <div class="row bordered">
      <div class="col-9"><h6 class=" q-ma-none" > RESUMEN</h6></div>
      <div class="col-3 float-left">
        <h6 class="q-ma-none text-orange bg-dark">
          ID: 78348
        </h6>
      </div>
    </div>
    <q-separator />
    <div class="row bordered">
      <div class="col-8">
        <p>TOTAL Ps.Arg</p>
      </div>
      <div class="col-3 justify-end align-left">
        <h5  class=" q-ma-none">15,000.0</h5>
      </div>
    </div>
    <q-separator />
    <div class="row bordered">
      <div class="col-4 bg-dark-1 bordered">
        <h6 class="q-ma-none">Descuento</h6>
      </div>
      <div class="col-8">
        <q-input
          class="full-width q-ma-none"
          filled
          outlined
          label="Ingrese texto" />
      </div>
    </div>
    <q-separator />
    <div class="row bordered">
      <div class="col-8">
        Total
      </div>
      <div class=" justify-end align-right">
        <h5  class="col-3 q-ma-none">15,000.0</h5>
      </div>
    </div>
    <q-separator />
    <div class="row">
      <q-input
        class="full-width q-ma-none q-mb-sm"
        filled
        outlined
        label="Para (opcinal):" />
    </div>
    <div class="row">
      <q-input
        class="full-width q-ma-none"
        filled
        outlined
        label="Observacion (opcional):" />
    </div>
    <q-separator />
    <div class="row bordered">
      <div class="col-7">
        Etiqueta
      </div>
      <div class=" justify-end align-right">
        <h5  class="q-ma-none"><q-badge transparent align="middle" color="orange">
          Venta al credito
        </q-badge></h5>
      </div>
    </div>
    <q-separator />
    <div class="row bordered">
      <div class="col-7">
        Forma de pago
      </div>
      <div class=" justify-end align-right">
        <h5  class="q-ma-none q-p-lg" ><q-badge transparent align="middle" color="primary">
          Seleccionar
        </q-badge></h5>
      </div>
    </div>

    <div class="row bordered q-pa-md">
      <q-btn  class="full-width" color="deep-orange" glossy label="Guardar"></q-btn>
    </div>
    <div class="row bordered q-pa-md">
      <q-btn  class="full-width" color="deep-orange" glossy label="Guardar y registrar nueva nota"></q-btn>
    </div>
  </div>
</template>

<script setup>
//
</script>

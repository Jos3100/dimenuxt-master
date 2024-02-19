<template>
  <div class="bg-blue-900">
    <div class=" mt-10">
      <h2 class="text-4xl text-center font-bold tracking-tight text-white">
        Preguntas frecuentes
      </h2>
      <div class="relative mt-7 w-4/5 sm:w-2/3 m-auto">
        <Preguntas
          v-for="({ title, text }, i) in preguntas"
          :key="i"
          :title="title"
          :text="text"
          :nro="i + 1"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import {preguntas} from './../services/ayuda';
</script>
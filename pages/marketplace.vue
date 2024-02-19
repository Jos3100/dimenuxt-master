<template>
  <div class="m-auto max-w-7xl pt-2 ">
   
    <div class="grid grid-col sm:grid-cols-3 gap-0.5 md:grid-cols-4 ">
      <div
        v-for="cliente in clientes"
        class="rounded-xl drop-shadow-2xl m-3 sm:m-1   sm:hover:m-0.5 sm:hover:p-0.5 duration-75 ease-in-out bg-white relative opacity-90 hover:opacity-100"
      >
        <ItemClient :cliente="cliente"></ItemClient>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";

definePageMeta({
  layout: "marketmapa",
});

// data
const db = useFirestore();
const allClientes = useCollection(collection(db, "clientes"));

// computed
const clientes = computed(() =>
  allClientes.value.filter((m) => !m.position !== true)
);
</script>

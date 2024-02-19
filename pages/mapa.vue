<template>
  <div class="max-w-7xl mx-auto rounded-lg p-2 my-2 bg-white">
    <GMapMap
      ref="gmap"
      :center="center"
      :zoom="13"
      :options="{
        mapTypeControl: false,
        mapId: 'e0754b9d7e349a1a',
      }"
      class="w-full !h-[75vh]"
    >
      <GMapCluster :minimumClusterSize="4" :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in clientes"
          :position="m.position"
          :clickable="true"
          icon="/images/icon.svg"
          @click="cliente = m"
        />
        <GMapInfoWindow
          :opened="opened"
          :closeclick="true"
          :options="{
            pixelOffset: {
              width: 0,
              height: -35,
            },
          }"
          :position="cliente.position"
          class="max-w-xs pr-3 sm:p-0"
          @closeclick="cliente = {}"
        >
          <ItemClient :cliente="cliente"></ItemClient>
        </GMapInfoWindow>
      </GMapCluster>
    </GMapMap>
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
const gmap = ref();
const newData = ref(allClientes);
const item = {
  userId: 1,
  id: Math.round(Math.random() * 10),
  title: "delectus aut sadfsdfsdf",
  completed: false,
};
const options = {
  method: "POST",
  query: { datos: newData.value },
};
const { data } = await useFetch("/api/hello", options);

// computed
const clientes = computed(() =>
  allClientes.value.filter((m) => !m.position !== true)
);
const center = ref({ lat: 6.0276319, lng: -75.4403514 });

const cliente = ref({});
const opened = computed(() => Object.keys(cliente.value).length > 0);

// onMounted
onMounted(() =>
  gmap.value.$mapPromise.then((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    gmap.value.$mapObject.setClickableIcons(false);
    for (let m of clientes.value) {
      bounds.extend(m.position);
    }
    map.fitBounds(bounds);
  })
);
</script>

<template>
  <div class="fixed left-1/2 bottom-16 z-10">
    <NuxtLink
      :to="name"
      class="bg-black bg-opacity-75 mb-1 text-white w-40 justify-between -ml-28 flex py-3 px-4 rounded-full hover:scale-105 hover:shadow-black hover:shadow-2xl ease-in-out duration-300"
    >
      <SvgIcon
        :icon="icons[name]"
        class="text-white w-6 font-bold mr-2 fill-none stroke-2"
      />
      <div class="w-full text-center capitalize">{{ name }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();

const getRoute = (val) => (val == "mapa" ? "marketplace" : "mapa");

const name = ref(getRoute(route.name));

watch(
  () => route.name,
  (val) => {
    name.value = getRoute(val);
  }
);
</script>

<template>
  <div
    @click="openMenu"
    class="scale-[0.97] peer h-full hover:scale-100 duration-200 cursor-pointer"
  >
    <img
      :src="
        cliente.foto
          ? cliente.foto
          : 'https://placehold.co/600x400?text=No+Image'
      "
      class="rounded-t-xl object-cover w-full h-40"
      alt=""
    />
    <div class="flex  p-3 border-t mt-1 font-bold">
      <SvgIcon :icon="icons.restaurantes" class="w-6 mr-2 fill-none stroke-2" />
      {{ cliente.nombre }}
    </div>

    <p class="text-sm flex pl-2 text-gray-400">
      <SvgIcon :icon="icons.marketplace" class="w-6 mr-2 fill-none stroke-2" />
      <span class="w-full">{{ cliente.place }}</span>
    </p>
    <div class="flex text-sm p-2 text-gray-400 w-fit">
      <SvgIcon :icon="icons.whatsapp" class="w-6 mr-2 stroke-none" />
      {{ cliente.telefono }}
    </div>
  </div>
  <div
  @click="openMenu" class="absolute cursor-pointer bottom-0 opacity-100 sm:opacity-0 scale-50 right-1 p-1 px-5 origin-bottom-right peer-hover:scale-100 hover:scale-100 text-white rounded-lg mb-1 text-sm font-semibold bg-indigo-800 peer-hover:opacity-100 hover:opacity-100 duration-100 peer-hover:-translate-x-1 flex"
  >
    Menú
    <SvgIcon
      :icon="icons.link"
      class="w-3.5 ml-3 fill-none animate-ping stroke-2"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  cliente: Object,
});

const openMenu = () => {
  window.open(
    "https://app.dime.menu/" + props.cliente.url,
    "_blank",
    "menubar=no,location=yes,resizable=no,scrollbars=no,status=no,width=460,height=800"
  );
};
</script>

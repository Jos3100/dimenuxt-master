<template>
  <div
    class="bg-neutral-900 flex w-full text-white py-3 text-center z-10 pb-20 sm:pb-0"
  >
    <!-- Modal -->
    <div
      :class="{ 'opacity-0 invisible translate-y-2': modal }"
      class="fixed w-full p-0 bg-neutral-900 z-20 duration-300 h-auto bottom-0 rounded-t-2xl text-right"
    >
      <button
        class="duration-200 transition ease-in-out hover:scale-110 pt-3 mr-7"
        @click="modal = !modal"
      >
        <SvgIcon
          :icon="icons.flecha"
          class="w-6 -rotate-90 fill-none stroke-2"
        />
      </button>
      <Footer></Footer>
    </div>

    <div class="w-1/2 sm:w-1/3 text-center text-lg font-bold mt-1">
      DIME MENÚ
    </div>
    <div class="hidden lg:block w-full mt-1">
      <NuxtLink
        to="/"
        class="mx-2 text-gray-400 hover:text-white hover:underline hover:underline-offset-2 duration-200"
      >
        Inicio
      </NuxtLink>
      <NuxtLink
        to="/marketplace"
        class="mx-2 text-gray-400 hover:text-white hover:underline hover:underline-offset-2 duration-200"
      >
        Marketplace
      </NuxtLink>
      <NuxtLink
        to="/contacto"
        class="mx-2 text-gray-400 hover:text-white hover:underline hover:underline-offset-2 duration-200"
      >
        Contacto
      </NuxtLink>
      <NuxtLink
        to="/ayuda"
        class="mx-2 text-gray-400 hover:text-white hover:underline hover:underline-offset-2 duration-200"
      >
        Preguntas Frecuentes
      </NuxtLink>
    </div>
    <div class="w-1/3 hidden sm:flex justify-center mt-0.5">
      <NuxtLink
        to="https://www.facebook.com/dime.menu"
        target="black"
        class="duration-200 transition ease-in-out hover:scale-110"
      >
        <SvgIcon :icon="icons.facebook" class="w-7 mr-2 stroke-none" />
      </NuxtLink>
      <NuxtLink
        to="https://wa.me/573136592716"
        target="black"
        class="duration-200 transition ease-in-out hover:scale-110"
      >
        <SvgIcon :icon="icons.whatsapp" class="w-7 mr-2 stroke-none"
      /></NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/dime.menu/"
        target="black"
        class="duration-200 transition ease-in-out hover:scale-110"
      >
        <SvgIcon :icon="icons.instagram" class="w-7 stroke-none"
      /></NuxtLink>
    </div>
    <div class="w-2/3 sm:w-1/3">
      <p class="font-bold mt-0.5">
        Tailors.dev &copy; {{ new Date().getFullYear() }}
      </p>
    </div>

    <div class="w-1/5">
      <button
        class="duration-200 transition ease-in-out hover:scale-110 pt-1"
        @click="modal = !modal"
      >
        <SvgIcon :icon="icons.flechaarriba" class="w-6 fill-none stroke-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
const modal = ref(true);
</script>

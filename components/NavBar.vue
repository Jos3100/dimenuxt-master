<template>
  <nav
    class="w-full h-16 bg-blue-900 bg-opacity-75 shadow-xl backdrop-blur-md fixed z-30"
    v-show="modal"
  >
    <div class="flex m-auto justify-between">
      <NuxtLink to="/" class="flex hover:translate-x-1 duration-75 h-16">
        <img src="@/assets/images/LOGO-DIME.png" class="ml-5 w-12 peer hover:scale-125 duration-75 hover:drop-shadow invert" />
        <span class="font-extrabold pt-5 text-2xl text-white drop-shadow hover:opacity-100 opacity-75 duration-75 -translate-x-0.5 peer-hover:translate-x-0.5 peer-hover:opacity-100">ime</span>
      </NuxtLink>
      <div
        class="flex sm:hidden cursor-pointer py-2 px-3"
        @click="modal = !modal"
      >
        <SvgIcon class="w-10 fill-white stroke-white" :icon="icons['menu']" />
      </div>

      <div class="menu mt-3 mr-4 sm:flex hidden">
        <NuxtLink
          to="/"
          class="text-gray-300 px-3 pb-2 text-md flex hover:text-white duration-200 transition ease-in-out hover:scale-110"
        >
          <SvgIcon class="w-5 mr-2 fill-none stroke-2" :icon="icons['home']" />
          <span class="pt-2.5">Inicio</span></NuxtLink
        >
        <NuxtLink
          to="/marketplace"
          class="text-gray-300 px-3 pb-2 text-md flex hover:text-white duration-200 transition ease-in-out hover:scale-110"
        >
          <SvgIcon class="w-5 mr-2" :icon="icons['marketplace']" />
          <span class="pt-2.5">Marketplace</span>
          </NuxtLink
        >
        <NuxtLink
          to="/contacto"
          class="text-gray-300 px-3 pb-2 text-md flex hover:text-white duration-200 transition ease-in-out hover:scale-110"
        >
          <SvgIcon class="w-5 mr-2" :icon="icons['contact']" />
          <span class="pt-2.5">Contacto</span>
          </NuxtLink
        >
      </div>
    </div>
  </nav>

  <div
    :class="{ 'opacity-0 invisible translate-y-2': modal }"
    class="bg-gradient-to-b from-blue-900 via-blue-900 h-full fixed to-black duration-300 w-full z-40"
  >
    <div class="w-full flex justify-between p-2">
      <button @click="modal = !modal">
        <SvgIcon
          :icon="icons.flechaizquierda"
          class="w-8 fill-none stroke-white stroke-2"
        />
      </button>

      <div class="m-auto mx-6">
        <form>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <SvgIcon
                :icon="icons.buscar"
                class="fill-none text-white w-6 stroke-2"
              />
            </div>
            <input
              type="search"
              class="w-full p-4 px-10 focus:bg-gray-500 border border-gray-300 rounded-3xl bg-transparent focus:border-blue-500"
              placeholder="Buscar..."
              required
            />
            <div>
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 py-2"
              >
                <SvgIcon
                  :icon="icons.enviar"
                  class="fill-none text-white w-6 stroke-2"
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      <button class="p-2" @click="modal = !modal">
        <SvgIcon :icon="icons.close" class="w-8 fill-white stroke-white" />
      </button>
    </div>

    <div class="mt-8 text-center">
      <p class="text-4xl text-white tracking-tight font-bold">Dime Menú</p>
      <p class="text-xl text-gray-300 tracking-tight font-bold">Menú Digital</p>
    </div>
    <div class="flex justify-center mt-20 pb-16">
      <div class="align-center w-full ml-6">
        <div>
          <NuxtLink
            to="/"
            class="text-white px-3 pb-1 text-2xl flex"
            @click="modal = !modal"
          >
            <SvgIcon
              :icon="icons.home"
              class="w-7 mr-4 drop-shadow-lg fill-none stroke-1"
            />

            Inicio</NuxtLink
          >
        </div>
        <div>
          <NuxtLink
            to="/marketplace"
            class="text-white px-3 pb-1 mt-3 text-2xl flex"
            @click="modal = !modal"
          >
            <SvgIcon :icon="icons.map" class="w-7 mr-4 fill-none stroke-2" />

            Marketplace</NuxtLink
          >
        </div>

        <div>
          <NuxtLink
            to="/contacto"
            class="text-white px-3 pb-1 mt-3 text-2xl flex"
            @click="modal = !modal"
          >
            <SvgIcon
              :icon="icons.contact"
              class="w-7 fill-none stroke-2 mr-4"
            />

            Contacto</NuxtLink
          >
        </div>

        <div>
          <NuxtLink
            @click="modal = !modal"
            to="/ayuda"
            class="text-white px-3 pb-1 mt-3 text-2xl flex drop-shadow-2xl"
          >
            <SvgIcon :icon="icons.ayuda" class="w-7 mr-4 fill-none stroke-2" />

            Ayuda</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="text-center text-white text-3xl font-bold">¡ Síguenos !</div>
    <div class="flex justify-center mt-3">
      <NuxtLink to="https://wa.me/573136592716" target="black">
        <SvgIcon
          :icon="icons.whatsapp"
          class="text-white w-14 mr-2 border-2 rounded-full p-2"
        />
      </NuxtLink>
      <NuxtLink to="https://www.instagram.com/dime.menu/" target="black">
        <SvgIcon
          :icon="icons.instagram"
          class="text-white w-14 mr-2 border-2 rounded-full p-2"
        />
      </NuxtLink>
      <NuxtLink to="https://www.facebook.com/dime.menu" target="black">
        <SvgIcon
          :icon="icons.facebook"
          class="text-white w-14 border-2 rounded-full p-2"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const modal = ref(true);
</script>

<style scoped lang="scss"></style>

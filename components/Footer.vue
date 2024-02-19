<template>
  <div class="flex-none sm:flex">
    <div class="flex-none sm:flex mb-5 md:mb-10 w-full">
      <div class="w-1/3 sm:w-full md:w-1/3  mt-0 sm:mt-5 md:mt-0 text-white m-auto pr-0 sm:pr-20">
        <div class="m-auto text-center ">
          <img src="@/assets/images/LOGO-DIME.png" class="w-20 sm:w-32 m-auto invert" />
          <p
            class="font-bold sm:text-xl  md:text-2xl lg:text-3xl text-2xl mt-0 sm:mt-4 lg:mt-0"
          >
            DIME MENÚ
          </p>
        </div>
      </div>
      <div class="w-full sm:hidden md:block md:w-1/4 mt-8 sm:mt-0 lg:mt-4 text-gray-400 font-light">
        <p class="text-white font-bold text-center sm:text-left text-xl mb-3 md:mb-4">Nosotros</p>
        <div class="flex sm:block justify-center divide-x divide-slate-400 sm:divide-x-0">
          <NuxtLink
            target="black"
            to="https://admin.dime.menu/"
            class="mt-2 md:mt-0 mr-3 md:mr-0 lg:mr-6 hover:text-white duration-300 transition ease-in-out hover:scale-105 flex text-md md:text-lg"
          >
            <SvgIcon :icon="icons.computador" class="fill-none w-5 sm:w-7 mr-2 sm:mr-1"  />
            Dime Admin</NuxtLink
          >
          <NuxtLink
            target="black"
            to="https://app.dime.menu/"
            class="mr-2 sm:mr-0 mt-2 md:mt-4 sm:mt-2 lg:mt-2 lg:mr-6 hover:text-white flex duration-300 transition ease-in-out hover:scale-105 text-md md:text-lg"
          >
            <SvgIcon :icon="icons.celular" class=" w-5 sm:w-7 fill-none ml-2 mr-1 sm:ml-0 sm:mr-2  " />

            Dime App</NuxtLink
          >
          <NuxtLink
            target="black"
            to="https://dime.menu/"
            class="mr-2 sm:mr-0 mt-2 md:mt-4 sm:mt-2 lg:mt-2 lg:mr-6 hover:text-white flex duration-300 transition ease-in-out hover:scale-105 text-md md:text-lg"
          >
            <SvgIcon :icon="icons.web" class=" w-5 sm:w-7 fill-none ml-2 mr-1 sm:ml-0 sm:mr-2  " />

            Dime Web</NuxtLink
          >
        </div>
      </div>
      <div class="w-full md:w-1/4 text-center sm:text-left font-light text-gray-400 mt-4 sm:mt-10 md:mt-4 mb-6 sm:mb-0">
        <p class="text-white font-bold text-center sm:text-left text-xl mt-10 sm:mt-0 mb-3 md:mb-4">Sitio web</p>

        <div>
          <NuxtLink
            to="/"
            class="hover:text-white hover:underline hover:underline-offset-2 duration-200"
          >
            Inicio
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="/marketplace"
            class="hover:text-white hover:underline hover:underline-offset-2 duration-200"
          >
            Marketplace
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="/contacto"
            class="hover:text-white hover:underline hover:underline-offset-2 duration-200"
          >
            Contacto
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="/ayuda"
            class="hover:text-white hover:underline hover:underline-offset-2 duration-200"
          >
            Preguntas Frecuentes
          </NuxtLink>
        </div>
      </div>
      <div class="w-full md:w-1/5 lg:w-1/4 pr-0 mt-0 lg:mt-10 text-white flex text-center mb-8 md:mb-10 lg:mb-0 sm:mb-0">
        <div class="m-auto lg:m-0">
          <div class="text-2xl md:text-xl lg:text-2xl font-bold mb-3 mt-4 sm:mt-0 sm:mb-4">¡ SÍGUENOS !</div>
          <div class="flex justify-center">
            <NuxtLink
              to="https://www.facebook.com/dime.menu"
              target="black"
              class="duration-300 transition ease-in-out hover:scale-110"
            >
              <SvgIcon :icon="icons.facebook" class="w-8 sm:w-7 mr-3" />
            </NuxtLink>

            <NuxtLink
              to="https://www.instagram.com/dime.menu/"
              target="black"
              class="duration-300 transition ease-in-out hover:scale-110"
            >
              <SvgIcon :icon="icons.instagram" class="w-8 sm:w-8 mr-3 stroke-none" />
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/573136592716"
              target="black"
              class="duration-300 transition ease-in-out hover:scale-110"
            >
              <SvgIcon :icon="icons.whatsapp" class="w-8 sm:w-8 mr-3 stroke-none" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-gray-400 pb-2 text-center border-t border-gray-700 divide-y">
    <p class="mt-2 font-bold">Tailors.dev &copy; {{ new Date().getFullYear() }}</p>
  </div>
</template>
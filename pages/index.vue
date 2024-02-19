<template>
  <div class="max-w-7xl m-auto pb-8">
    <div class="flex-none sm:flex px-2">
      <div class="w-full md:w-2/5 sm:w-3/5 backdrop-blur-xl">
        <img
          src="@/assets/images/LOGO-DIME.png"
          class="w-60 animate-[pulse_2s_ease-in-out_infinite] md:w-96 m-auto invert  drop-shadow duration-500 hover:scale-100 transition hover:drop-shadow-2xl"
          alt=""
        />
      </div>
      <div class="w-full md:w-3/5 m-auto">
        <p
          class="text-4xl sm:text-2xl md:text-5xl ml-5 sm:ml-0 text-start sm:text-center text-white mt-0 sm:mt-20 lg:mt-24 font-bold"
        >
          ¡ Lleva tu negocio a otro nivel !
        </p>
        <p
          class="text-xl sm:text-xl md:text-4xl mt-2 mb-10 ml-5 text-start sm:text-center text-gray-300"
        >
          Dinamiza tu negocio con la mejor App <br />
          para la administración de los pedidos.
        </p>
        <NuxtLink
        target="black"
          class="bg-blue-900 ml-5  sm:m-auto border border-white mt-10 px-6 py-2   text-white rounded-xl hover:bg-blue-800 duration-500 transition ease-in-out hover:scale-110"
          to="https://admin.dime.menu/"
        >
          Comenzar

          
        </NuxtLink>
      </div>
    </div>

    <div class="flex-none sm:flex pt-6 mt-5 sm:mt-20 px-3 sm:px-2">
      <div class="w-full sm:w-3/5 mt-12 mx-auto lg:ml-32">
        <div
          class="text-2xl   md:text-3xl text-center text-white  sm:m-auto font-bold flex-none sm:flex  rounded-3xl py-5  sm:py-0"
        >
          <SvgIcon
            :icon="icons.celular"
            class="w-32 sm:w-20 m-auto sm:m-0 fill-none stroke-1"
          />
          <p class="mt-6 sm:mt-2 sm:ml-10 text-center sm:text-start">
            Fácil interacción con <br class="flex sm:hidden"/> tus clientes vía Whatsapp.
          </p>
        </div>

        <hr class=" flex sm:hidden my-8 mx-12">
        <div
          class="text-2xl  sm:m-auto sm:my-10 md:text-3xl    flex-none sm:flex rounded-3xl py-5 sm:py-0 text-white font-bold"
        >
          <SvgIcon
            :icon="icons.shoppingcart"
            class="w-32 sm:w-20 m-auto sm:m-0 fill-none "
          />
          <p class="mt-5 sm:mt-2 mx-4 sm:ml-10 text-center sm:text-start">
            Optimiza el análisis de información <br />
            para envío de pedidos.
          </p>
        </div>
      </div>
      <div class="sm:w-1/3 md:w-60 m-auto mt-32 sm:mt-10 md:mt-0">
        <img
          src="@/assets/images/cards.png"
          class="duration-500 transition m-auto sm:m-0 ease-in-out hover:scale-110 w-80"
          alt=""
        />
      </div>
    </div>

    <div class="flex pt-10 my-20 px-3 sm:px-2">
      <div class="w-1/3 m-auto hidden sm:flex">
        <img
          src="@/assets/images/phonecart.png"
          class="duration-500 transition ease-in-out hover:scale-110 mx-auto sm:w-52 md:w-80"
          alt=""
        />
      </div>
      <div class="w-full sm:w-1/2  sm:mx-10">
        <div
          class="text-2xl md:text-3xl m-auto text-white font-bold flex-none sm:flex  rounded-3xl py-5 sm:py-0 "
        >
        <SvgIcon
            :icon="icons.chartbar"
            class="w-32 sm:w-36 md:w-20 m-auto sm:m-0 fill-none stroke-1"
          />

          <p
            class="mt-5 sm:mt-1 ml-3 mx-3 sm:ml-10 sm:mx-0 text-center sm:text-start"
          >
            Administra tu menú <br> de  forma 
            fácil y sencilla.
          </p>
        </div>

        <hr class=" flex sm:hidden my-8 mx-12"/>
        <div
          class="text-2xl md:text-3xl  flex-none sm:flex  rounded-3xl py-5 sm:py-0  text-white font-bold"
        >
        <SvgIcon
            :icon="icons.qr"
            class="w-28 sm:w-36 md:w-20 m-auto sm:m-0 fill-none stroke-1"
          />
          <p
            class="mt-5 sm:mt-6 text-center sm:text-start mx-2 sm:mx-0 sm:ml-10"
          >
            Comparte tu menú <br> con código QR.
          </p>
        </div>
        <hr class=" flex sm:hidden my-8 mx-12"/>
        <div
          class="text-2xl md:text-3xl  m-auto text-white font-bold flex-none sm:flex  rounded-3xl py-5 sm:py-0 "
        >
          
        <SvgIcon
            :icon="icons.money"
            class="w-28 sm:w-40 md:w-20 m-auto sm:m-0 fill-none stroke-1"
          />
          <p class="mt-4 sm:mt-1 mx-2 sm:ml-10 text-center sm:text-start">
            Lleva un reporte <br> periódico de tus ventas.
          </p>
        </div>
        <div class="w-full mt-32 sm:hidden">
          <img
            src="@/assets/images/phonecart.png"
            class="w-60 hover:scale-110 duration-300 mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

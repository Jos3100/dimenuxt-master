<template>
    <div class="bg-blue-900 h-screen pb-5 pt-2">
      <form action="#">
        <div class="text-center">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            ¡ Contáctanos !
          </h2>
          <p class="mt-2 text-lg text-gray-300">
            Déjanos tu pregunta o sugerencia
          </p>
        </div>
        <div>
          <div class="w-1/1 mx-10 sm:w-3/5 sm:mx-auto lg:w-1/3 md:w-2/5 mt-8">
            <label class="text-gray-300">Nombre y Apellido</label>
            <div class="mt-2.5">
              <input type="text" class="w-full p-2 rounded-lg" />
            </div>
          </div>
          <div class="w-1/1 mx-10 sm:w-3/5 sm:mx-auto lg:w-1/3 md:w-2/5 mt-4">
            <label class="text-gray-300">Correo Electrónico</label>
            <div class="mt-2.5">
              <input type="text" class="w-full p-2 rounded-lg" />
            </div>
          </div>
        </div>
  
        <div class="w-1/1 mx-10 sm:w-3/5 sm:mx-auto lg:w-1/3 md:w-2/5 mt-6">
          <label class="text-gray-300">Pregunta o sugerencia</label>
          <div class="mt-2.5">
            <textarea type="text" class="w-full p-2 rounded-lg" />
          </div>
        </div>
        <div class="text-center ">
          <button class="text-white border py-2 px-4 rounded-xl mt-6 duration-700 transition  ease-in-out hover:scale-110 hover:bg-blue-800">Enviar datos</button>
        </div>
        <div class="text-center text-white mt-6">
          <p class="text-gray-300">¿ Tienes alguna duda ? <a class="text-white underline" href="/ayuda">Resuelvela aquí</a> </p> 
        </div>
      </form>
    </div>
  </template>
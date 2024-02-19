<template>
    <div class="flex sm:hidden inset-x-0 bottom-0 fixed w-full bg-blue-900 shadow-black shadow-2xl  justify-between px-6 py-2 ">
        <div class="text-white">
            <NuxtLink to="/ayuda">
            <SvgIcon :icon="icons.help" class="w-7 m-auto  fill-none stroke-1" />
            <p class="text-xs mt-1" >Ayuda</p>
        </NuxtLink>
        </div>
        <div class="text-white">
            <NuxtLink to="/marketplace">
              <SvgIcon :icon="icons.map" class="w-7 m-auto fill-none stroke-1" />
           <p class="text-xs mt-1" >Marketplace</p>
            </NuxtLink>
            
        </div>
        <div class="text-white">
            <NuxtLink to="/">
            <SvgIcon :icon="icons.home" class="w-7 m-auto fill-none stroke-1 " />
            <p class="text-xs mt-1" >Inicio</p>
          
        </NuxtLink>
        </div>
        
        <div class="text-white">
            <NuxtLink to="/contacto">
            <SvgIcon :icon="icons.chat" class="w-7 m-auto fill-none stroke-1" />
           <p class="text-xs mt-1" >Contacto</p>
            
        </NuxtLink>
        </div>
        <div class="text-white">
            <NuxtLink to="/">
            <SvgIcon :icon="icons.money"  class="w-7 m-auto fill-none stroke-1" />
            <p class="text-xs mt-1" >Membresía</p>
           
        </NuxtLink>
        </div>
    </div>
</template>
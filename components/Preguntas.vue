<template>
    <div @click="open = !open" class="text-white pl-5 bg-blue-900 hover:border-white border rounded-xl hover:bg-blue-800 mt-2 hover:shadow-xl hover:text-white w-full font-bold cursor-pointer hover:font-bold duration-200  justify-between flex p-2" :class="{'font-bold text-white rounded-b-none bg-blue-800 shadow-xl':open}">
          {{ nro }}. {{title}}
          <SvgIcon :icon="icons.flechaarriba" class="w-6 fill-none stroke-2 duration-100" :class="{'rotate-180': !open}"> </SvgIcon>
        </div>
        <transition 
            enter-active-class="duration-300 ease-out"
            enter-from-class="-translate-y-1 opacity-0"
            leave-active-class="duration-200 ease-in"
            leave-to-class="-translate-y-1 opacity-0">
          <div v-html="text" v-if="open" class="bg-white bg-opacity-80 rounded-b-xl px-5 py-2 shadow-xl text-blue-700 ">
            
            </div>
        </transition>
</template>

<script setup>

  
const open = ref(false)
defineProps({title:String, text:String, nro:Number})
</script>
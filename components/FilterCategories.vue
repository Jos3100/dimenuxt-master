<template>
  <div
    class="w-full fixed z-20 py-2 bg-gradient-to-r from-white via-transparent to-white top-14 border-b bg-white bg-opacity-75 text-gray-500"
  >
    <div
      class="flex backdrop-blur bg-gradient-to-l sm:px-4 lg:px-6 xl:px-12 2xl:px-20 from-white via-transparent to-white relative mx-auto"
    >
      <button
        :class="{ 'scale-100 hover:scale-125': scrollLeft > 0 }"
        @click="scrollTo(false)"
        class="py-2 z-10 duration-75 hidden sm:block scale-0 drop-shadow"
      >
        <SvgIcon
          class="w-6 mx-auto fill-none stroke-2"
          :icon="icons['flecha']"
        />
      </button>

      <div
        class="absolute p-6 h-[76px] bg-gradient-to-r sm:left-5 left-0 from-white"
      ></div>
      <div
        class="absolute p-6 h-[76px] bg-gradient-to-l sm:right-5 right-0 from-white"
      ></div>
      <div
        ref="container"
        @scroll="onScroll"
        @wheel.prevent="onWheel"
        class="scroll-smooth grid grid-flow-col py-2 overflow-x-auto sm:overflow-hidden"
      >
        <div
          v-for="(cat, i) in categories"
          :key="i"
          :class="{ 'shadow-inner': index == i }"
          class="min-w-[6rem] mx-1 pt-1 rounded text-center duration-75"
        >
          <button
            @click="selectCategory($event, i)"
            :class="{
              'border-b-black text-black scale-105 -translate-y-0.5':
                index == i,
            }"
            class="hover:scale-105 hover:bg-slate-50 pt-1 rounded w-full ease-in-out duration-100 border-white hover:border-[#CCC] border-b-4 hover:text-black hover:font-semibold"
          >
            <SvgIcon
              class="w-6 mx-auto fill-none stroke-2"
              :class="{ 'drop-shadow': index == i }"
              :icon="icons[cat]"
            />
            <p :class="{ 'font-semibold': index == i }" class="text-xs py-1">
              {{ cat }}
            </p>
          </button>
        </div>
      </div>

      <button
        @click="scrollTo(true)"
        :class="{ 'scale-100 hover:scale-125': right }"
        class="py-2 z-10 duration-75 hidden sm:block scale-0 drop-shadow"
      >
        <SvgIcon
          class="w-6 mx-auto rotate-180 fill-none stroke-2"
          :icon="icons['flecha']"
        />
      </button>
    </div>
  </div>
</template>
<style scoped>
* {
  scrollbar-width: thin;
  scrollbar-color: #fff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  height: 5px;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  height: 5px;
}

*::-webkit-scrollbar-track {
  background: #fff;
}

*::-webkit-scrollbar-thumb {
  background-color: #717171;
  border-radius: 30px;
  border: 3px solid #717171;
}
</style>
<script setup>
const container = ref();
const scrollLeft = ref(0);
const index = ref(0);
const right = ref(true);

const categories = [
  "restaurantes",
  "papelerias",
  "supermercados",
  "librerias",
  "fotografia",
  "cafeterias",
  "bares",
  "ropa",
  "restaurantes",
  "papelerias",
  "supermercados",
  "librerias",
  "fotografia",
  "cafeterias",
  "bares",
  "ropa",
  "restaurantes",
  "papelerias",
  "supermercados",
  "librerias",
  "fotografia",
  "cafeterias",
  "bares",
  "ropa",
];

const selectCategory = ({ target }, i) => {
  const { offsetWidth, scrollWidth } = container.value;
  const left = container.value.getBoundingClientRect().x;
  const { x } = target.getBoundingClientRect();
  index.value = i;
  if (x < left + 100 && scrollLeft.value > 0) scrollLeft.value -= 120;
  if (x > offsetWidth + left - 120 && right.value) scrollLeft.value += 120;
  right.value = scrollLeft.value < scrollWidth - offsetWidth;
  container.value.scrollLeft = scrollLeft.value;
};

const onWheel = ({ wheelDelta }) => {
  wheelDelta < 0
    ? (scrollLeft.value += 112 * 2)
    : (scrollLeft.value -= 112 * 2);
  const { offsetWidth, scrollWidth } = container.value;
  if (scrollLeft.value < 0) scrollLeft.value = 0;
  if (scrollLeft.value > scrollWidth - offsetWidth)
    scrollLeft.value = scrollWidth - offsetWidth;
  right.value = scrollLeft.value < scrollWidth - offsetWidth;
  container.value.scrollLeft = scrollLeft.value;
};
const onScroll = () => {
  scrollLeft.value = container.value.scrollLeft;
};
const scrollTo = (left) => {
  const { offsetWidth, scrollWidth } = container.value;
  left ? (scrollLeft.value += 112 * 3) : (scrollLeft.value -= 112 * 3);
  container.value.scrollLeft = scrollLeft.value;
  right.value = scrollLeft.value < scrollWidth - offsetWidth;
};
</script>

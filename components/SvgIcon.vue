<template>
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="icon"
  ></svg>
</template>
<script setup>
defineProps({ icon: String });
</script>

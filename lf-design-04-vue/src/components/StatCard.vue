<script setup>
defineProps(["title", "value"]);
</script>

<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-xl font-bold">{{ value }}</h3>
    <p class="text-gray-500">{{ title }}</p>
  </div>
</template>

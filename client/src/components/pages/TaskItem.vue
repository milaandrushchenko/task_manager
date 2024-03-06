<template>
  <div class="bg-white rounded p-4 mb-2 shadow-md">
    <h3 class="text-lg font-bold mb-2">{{ task.title }}</h3>
    <p class="text-gray-600">{{ task.description }}</p>
    <div class="flex justify-between items-center mt-2">
      <span class="text-sm text-gray-400">{{ task.created_at }}</span>
      <button class="text-red-600 hover:text-red-700" @click="deleteTask">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  task: { type: Object, required: true },
});
</script>

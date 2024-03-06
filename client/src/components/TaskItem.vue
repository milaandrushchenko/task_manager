<template>
  <div class="bg-white rounded p-4 mb-2 shadow-md">
    <h3 class="text-lg font-bold mb-2">{{ task.title }}</h3>
    <p class="text-gray-600">{{ task.details }}</p>
    <div class="flex justify-between items-center mt-2">
      <button
        class="text-red-600 hover:text-red-700"
        @click="deleteTask(task.id)"
      >
        Delete
      </button>
      <button class="text-blue-600 hover:text-blue-700">Edit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  task: { type: Object, required: true },
  deleteTask: {
    type: Function,
  },
});
</script>

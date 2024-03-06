<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Create New Task</h2>
    <form @submit.prevent="createTask">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="title"
          class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="details" class="block text-sm font-medium text-gray-700"
          >Details</label
        >
        <textarea
          id="details"
          v-model="details"
          class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Task
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, defineProps } from "vue";

const props = defineProps({
  getAllTasks: {
    type: Function,
  },
});

const title = ref("");
const details = ref("");

const createTask = async () => {
  console.log(title.value);
  console.log(details.value);
  try {
    const response = await axios.post(
      "/task",
      { title: title.value, details: details.value },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    console.log("Task created:", response.data);
    title.value = "";
    details.value = "";

    props.getAllTasks();
  } catch (error) {
    console.error("Error creating task:", error);
  }
};
</script>

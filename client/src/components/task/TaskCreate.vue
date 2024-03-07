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
          :class="{ 'border-red-500': validationErrors.title }"
          class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <p v-if="validationErrors.title" class="text-red-500 text-xs italic">
          {{ validationErrors.title }}
        </p>
      </div>
      <div class="mb-4">
        <label for="details" class="block text-sm font-medium text-gray-700"
          >Details</label
        >
        <textarea
          id="details"
          v-model="details"
          :class="{ 'border-red-500': validationErrors.details }"
          class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
        <p v-if="validationErrors.details" class="text-red-500 text-xs italic">
          {{ validationErrors.details }}
        </p>
      </div>
      <p v-if="serverErrors" class="text-red-500 text-xs italic m-2">
        {{ serverErrors }}
      </p>
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
import { validateTaskForm } from "@/utils/validation";
import axios from "axios";
import { ref, defineProps } from "vue";

const serverErrors = ref("");
const validationErrors = ref({ title: "", details: "" });

const props = defineProps({
  getAllTasks: {
    type: Function,
  },
});

const title = ref("");
const details = ref("");

const createTask = async () => {
  serverErrors.value = "";
  if (!validateTaskForm(title.value, details.value, validationErrors)) {
    return;
  }
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

    if (props && props.getAllTasks) {
      props.getAllTasks();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    if (error.response && error.response.data && error.response.data.message) {
      serverErrors.value = error.response.data.message;
    } else {
      serverErrors.value = "Error from server";
    }
  }
};
</script>

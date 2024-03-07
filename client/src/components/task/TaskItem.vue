<template>
  <div>
    <div v-if="!isEditing">
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
          <button
            class="text-blue-600 hover:text-blue-700"
            @click="startEditing"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <form
        class="bg-white rounded p-4 mb-2 shadow-md"
        @submit.prevent="saveChanges"
      >
        <div class="">
          <input
            v-model="editedTask.title"
            type="text"
            :class="{ 'border-red-500': validationErrors.title }"
            class="text-lg font-bold mb-2 w-full rounded-md border border-gray-300 px-4 py-2"
            placeholder="Enter title"
          />
          <p v-if="validationErrors.title" class="text-red-500 text-xs italic">
            {{ validationErrors.title }}
          </p>
          <textarea
            v-model="editedTask.details"
            :class="{ 'border-red-500': validationErrors.details }"
            class="text-gray-600 w-full rounded-md border border-gray-300 px-4 py-2"
            placeholder="Enter details"
          ></textarea>
          <p
            v-if="validationErrors.details"
            class="text-red-500 text-xs italic"
          >
            {{ validationErrors.details }}
          </p>
        </div>
        <p v-if="serverErrors" class="text-red-500 text-xs italic m-2">
          {{ serverErrors }}
        </p>
        <div class="flex justify-between items-center mt-2">
          <button type="submit" class="text-blue-600 hover:text-blue-700">
            Save
          </button>
          <button
            @click="cancelEditing"
            class="text-red-600 hover:text-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Task } from "@/utils/types";
import { validateTaskForm } from "@/utils/validation";
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
  deleteTask: {
    type: Function,
  },
  editTask: {
    type: Function,
  },
});

const isEditing = ref(false);
const editedTask = ref<Task>({ ...props.task });
const serverErrors = ref("");
const validationErrors = ref({ title: "", details: "" });

const startEditing = () => {
  editedTask.value = { ...props.task };
  isEditing.value = true;
};

const cancelEditing = () => {
  editedTask.value = { ...props.task };
  isEditing.value = false;
};

const saveChanges = () => {
  serverErrors.value = "";
  if (
    !validateTaskForm(
      editedTask.value.title,
      editedTask.value.details,
      validationErrors
    )
  ) {
    return;
  }
  console.log(editedTask.value);
  props.editTask(editedTask.value.id, editedTask.value);
  isEditing.value = false;
};
</script>

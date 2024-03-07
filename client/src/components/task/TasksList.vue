<template>
  <div class="container mx-auto px-4 m-8">
    <div v-if="tasks.length > 0" class="grid grid-cols-3 gap-4">
      <div
        v-for="(status, key) in statuses"
        :key="key"
        @drop="onDrop($event, status)"
        class="droppable"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2 class="text-lg font-bold mb-4">{{ status }}</h2>
        <div class="bg-gray-100 p-4 rounded">
          <ul>
            <li
              v-for="task in tasks.filter((x) => x.status === status)"
              @dragstart="onDragStart($event, task)"
              class="draggable"
              draggable="true"
              :key="task.id"
            >
              <TaskItem
                :task="task"
                :deleteTask="deleteTask"
                :editTask="editTask"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="mt-5">
      <p>No tasks available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, ref } from "vue";
import TaskItem from "./TaskItem.vue";
import { defineProps } from "vue";
import { Task } from "../../utils/types";
import { TaskStatus } from "../../utils/variables";

const statuses = ref(Object.values(TaskStatus));

const props = defineProps({
  tasks: { type: Array as () => Task[], required: true },
  getAllTasks: {
    type: Function,
  },
});

const deleteTask = async (taskId: number) => {
  try {
    const response = await axios.delete(`/task/${taskId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (props && props.getAllTasks) {
      props.getAllTasks();
    }

    console.log("Task deleted:", response.data);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
const editTask = async (taskId: number, updatedData) => {
  try {
    const response = await axios.patch(`/task/${taskId}`, updatedData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (props && props.getAllTasks) {
      props.getAllTasks();
    }

    console.log("Task edited:", response.data);
  } catch (error) {
    console.error("Error editing task:", error);
  }
};

function onDragStart(e: DragEvent, task) {
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("taskId", task.id.toString());
}

function onDrop(e: DragEvent, status) {
  const taskId = parseInt(e.dataTransfer.getData("taskId"));
  props.tasks.map(async (x) => {
    if (x.id == taskId) await editTask(taskId, { status });
    return x;
  });
  if (props && props.getAllTasks) {
    props.getAllTasks();
  }
}
</script>

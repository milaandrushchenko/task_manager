<template>
  <div class="container mx-auto px-4 m-8">
    <div v-if="tasks.length > 0" class="grid grid-cols-3 gap-4">
      <div>
        <h2 class="text-lg font-bold mb-4">New</h2>
        <div class="bg-gray-100 p-4 rounded">
          <ul>
            <li v-for="(task, index) in newTasks" :key="index">
              <TaskItem :task="task" :deleteTask="deleteTask" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-bold mb-4">In Process</h2>
        <div class="bg-gray-100 p-4 rounded">
          <ul>
            <li v-for="(task, index) in inProcessTasks" :key="index">
              <TaskItem :task="task" :deleteTask="deleteTask" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-bold mb-4">Done</h2>
        <div class="bg-gray-100 p-4 rounded">
          <ul>
            <li v-for="(task, index) in doneTasks" :key="index">
              <TaskItem :task="task" :deleteTask="deleteTask" />
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
import { computed } from "vue";
import TaskItem from "./TaskItem.vue";
import { defineProps } from "vue";

const props = defineProps({
  tasks: { type: Array, required: true },
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

    props.getAllTasks();

    console.log("Task deleted:", response.data);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

const newTasks = computed(() =>
  props.tasks.filter((task) => task.status === "new")
);
const inProcessTasks = computed(() =>
  props.tasks.filter((task) => task.status === "inProcess")
);
const doneTasks = computed(() =>
  props.tasks.filter((task) => task.status === "isComplited")
);
</script>

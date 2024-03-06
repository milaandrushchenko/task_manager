<template>
  <DashboardPage />
  <div class="grid grid-cols-4 gap-4 p-8">
    <div class="col-span-1">
      <TaskCreate :get-all-tasks="getAllTasks" />
    </div>
    <div class="col-span-3">
      <TaskList :tasks="tasks" :get-all-tasks="getAllTasks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskList from "../TasksList.vue";
import DashboardPage from "./DashboardPage.vue";
import TaskCreate from "../TaskCreate.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  details: string;
  status: string;
  createdAt: Date;
}

const tasks = ref<Task[]>([]);

const getAllTasks = async (): Promise<void> => {
  try {
    const response = await axios.get("/task", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    tasks.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getAllTasks();
});
</script>
../TasksList.vue../TaskCreate.vue../TaskCreate.vue../TasksList.vue

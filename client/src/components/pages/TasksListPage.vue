<template>
  <div>
    <DashboardPage />
    <div class="container mx-auto px-4 m-8">
      <div v-if="tasks.length > 0" class="grid grid-cols-3 gap-4">
        <div>
          <h2 class="text-lg font-bold mb-4">New</h2>
          <div class="bg-gray-100 p-4 rounded">
            <ul>
              <li v-for="(task, index) in tasks" :key="index">
                <TaskItem />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-4">In Process</h2>
          <div class="bg-gray-100 p-4 rounded">
            <!-- Вставте ваш код для списку тасків зі статусом "In Process" тут -->
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-4">Done</h2>
          <div class="bg-gray-100 p-4 rounded">
            <!-- Вставте ваш код для списку тасків зі статусом "Done" тут -->
          </div>
        </div>
      </div>
      <div v-else class="mt-5">
        <p>No tasks available.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import TaskItem from "./TaskItem.vue";
import DashboardPage from "./DashboardPage.vue";

const tasks = ref({});

const getAllTasks = async () => {
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

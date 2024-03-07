<template>
  <div class="">
    <div class="w-full">
      <nav class="flex items-center justify-between bg-gray-100 p-4">
        <a class="text-xl font-bold" href="#">TASK MANAGER</a>
        <ul class="flex">
          <li class="ml-4">
            <router-link to="/tasks" class="text-blue-600"
              >My Tasks</router-link
            >
          </li>
          <li class="ml-4">
            <a @click="logoutAction" class="text-blue-600" href="#">Logout</a>
          </li>
        </ul>
      </nav>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const user = ref<any>({});
const showMyTasks = ref(false);
const router = useRouter();

const getUser = () => {
  axios
    .get("/auth/profile", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((response) => {
      user.value = response.data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};

const logoutAction = () => {
  localStorage.setItem("token", "");
  router.push("/");
};

const navigateToMyTasks = () => {
  router.push("/tasks");
};

onMounted(() => {
  if (!localStorage.getItem("token")) {
    router.push("/");
  } else {
    getUser();
    showMyTasks.value = true;
  }
});
</script>

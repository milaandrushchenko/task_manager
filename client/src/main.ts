import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import DashboardPage from "./components/DashboardPage.vue";
import TasksPage from "./pages/TasksPage.vue";
import "./index.css";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/tasks", component: TasksPage },
    { path: "/dashboard", component: DashboardPage },
  ],
});

createApp(App).use(router).mount("#app");

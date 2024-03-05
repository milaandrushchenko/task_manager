import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/pages/LoginPage.vue";
import RegisterPage from "./components/pages/RegisterPage.vue";
import DashboardPage from "./components/pages/DashboardPage.vue";
import "./index.css";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/dashboard", component: DashboardPage },
  ],
});

createApp(App).use(router).mount("#app");

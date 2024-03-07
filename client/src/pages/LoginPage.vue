<template>
  <div class="flex justify-center mt-5">
    <div class="w-72">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h5 class="text-xl font-bold mb-4">Sign In</h5>
        <form @submit.prevent="loginAction">
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Email address</label
            >
            <input
              v-model="email"
              id="email"
              name="email"
              :class="{ 'border-red-500': validationErrors.email }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <p
              v-if="validationErrors.email"
              class="text-red-500 text-xs italic"
            >
              {{ validationErrors.email }}
            </p>
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              :class="{ 'border-red-500': validationErrors.password }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <p
              v-if="validationErrors.password"
              class="text-red-500 text-xs italic"
            >
              {{ validationErrors.password }}
            </p>
          </div>
          <p v-if="serverErrors" class="text-red-500 text-xs italic m-2">
            {{ serverErrors }}
          </p>
          <div class="items-center justify-center">
            <div class="flex items-center justify-center">
              <button
                :disabled="isSubmitting"
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <div class="flex items-center justify-center">
              <p class="text-sm">
                Don't have an account?
                <router-link to="/register" class="font-bold text-blue-500"
                  >Register here</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const validationErrors = ref({ email: "", password: "" });
const serverErrors = ref("");
const isSubmitting = ref(false);

const validateLoginForm = () => {
  let isValid = true;

  if (!email.value) {
    validationErrors.value.email = "Email is required";
    isValid = false;
  } else {
    validationErrors.value.email = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    validationErrors.value.email = "Invalid email format";
    isValid = false;
  } else {
    validationErrors.value.email = "";
  }

  if (!password.value) {
    validationErrors.value.password = "Password is required";
    isValid = false;
  } else {
    validationErrors.value.password = "";
  }

  if (password.value.length < 6) {
    validationErrors.value.password =
      "Password must be at least 8 characters long";
    isValid = false;
  } else {
    validationErrors.value.password = "";
  }

  return isValid;
};

const loginAction = async () => {
  if (!validateLoginForm()) {
    return;
  }

  const payload = { email: email.value, password: password.value };
  try {
    const response = await axios.post("/auth/login", payload);
    localStorage.setItem("token", response.data.access_token);
    router.push("/dashboard");

    return response;
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

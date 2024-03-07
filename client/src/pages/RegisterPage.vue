<template>
  <div class="flex justify-center mt-5">
    <div class="w-72">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h5 class="text-xl font-bold mb-4">Register</h5>
        <form @submit.prevent="registerAction">
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
              :class="{ 'border-red-500': emailError }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              @focus="emailError = false"
              required
            />
            <div v-if="emailError" class="text-red-500 text-xs italic">
              {{ validationErrors.email }}
            </div>
          </div>
          <div class="mb-4">
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
              :class="{ 'border-red-500': passwordError }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              @focus="passwordError = false"
              required
            />
            <div v-if="passwordError" class="text-red-500 text-xs italic">
              {{ validationErrors.password }}
            </div>
          </div>
          <div class="mb-4">
            <label
              for="confirm_password"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Confirm Password</label
            >
            <input
              v-model="confirmPassword"
              type="password"
              id="confirm_password"
              name="confirm_password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <div v-if="passwordMismatch" class="text-red-500 text-xs italic">
              Passwords do not match
            </div>
          </div>
          <p v-if="serverErrors" class="text-red-500 text-xs italic m-2">
            {{ serverErrors }}
          </p>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register Now
            </button>
          </div>
          <div class="text-center mt-4">
            <p class="text-sm">
              Have already an account?
              <router-link to="/" class="font-bold text-blue-500"
                >Login here</router-link
              >
            </p>
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
const confirmPassword = ref("");

const serverErrors = ref("");
const validationErrors = ref({ email: "", password: "" });
const emailError = ref(false);
const passwordError = ref(false);
const passwordMismatch = ref(false);

const validateRegistrationForm = () => {
  let isValid = true;

  if (!email.value) {
    validationErrors.value.email = "Email is required";
    emailError.value = true;
    isValid = false;
  } else {
    validationErrors.value.email = "";
    emailError.value = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    validationErrors.value.email = "Invalid email format";
    emailError.value = true;
    isValid = false;
  } else {
    validationErrors.value.email = "";
    emailError.value = false;
  }

  if (!password.value) {
    validationErrors.value.password = "Password is required";
    passwordError.value = true;
    isValid = false;
  } else {
    validationErrors.value.password = "";
    passwordError.value = false;
  }

  if (password.value.length < 6) {
    validationErrors.value.password =
      "Password must be at least 6 characters long";
    passwordError.value = true;
    isValid = false;
  } else {
    validationErrors.value.password = "";
    passwordError.value = false;
  }

  if (password.value !== confirmPassword.value) {
    passwordMismatch.value = true;
    isValid = false;
  } else {
    passwordMismatch.value = false;
  }

  return isValid;
};

const registerAction = async () => {
  if (!validateRegistrationForm()) {
    return;
  }

  const payload = {
    email: email.value,
    password: password.value,
    password_confirmation: confirmPassword.value,
  };
  try {
    const response = await axios.post("/user", payload);
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

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
              type="email"
              id="email"
              name="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div v-if="validationErrors.email" class="flex flex-col">
              <small class="text-red-500">{{
                validationErrors.email[0]
              }}</small>
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
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div v-if="validationErrors.password" class="flex flex-col">
              <small class="text-red-500">{{
                validationErrors.password[0]
              }}</small>
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
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              :disabled="isSubmitting"
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

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "RegisterPage",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      validationErrors: {} as Record<string, string[]>,
      isSubmitting: false,
    };
  },
  methods: {
    registerAction() {
      this.isSubmitting = true;
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      };
      axios
        .post("/user", payload)
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.$router.push("/dashboard");
          return response;
        })
        .catch((error) => {
          this.isSubmitting = false;
          if (error.response.data.errors !== undefined) {
            this.validationErrors = error.response.data.errors;
          }
          return error;
        });
    },
  },
});
</script>

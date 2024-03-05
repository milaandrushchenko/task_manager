<template>
  <layout-div>
    <div class="flex justify-center mt-5">
      <div class="w-72">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h5 class="text-xl font-bold mb-4">Sign In</h5>
          <form @submit.prevent="loginAction">
            <p
              v-if="Object.keys(validationErrors).length !== 0"
              class="text-center"
            >
              <small class="text-red-500">Incorrect Email or Password</small>
            </p>
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
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
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
  </layout-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import LayoutDiv from "../LayoutDiv.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      email: "",
      password: "",
      validationErrors: {} as Record<string, string>,
      isSubmitting: false,
    };
  },
  created() {
    if (
      localStorage.getItem("token") !== "" &&
      localStorage.getItem("token") !== null
    ) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    loginAction() {
      this.isSubmitting = true;
      const payload = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/auth/login", payload)
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
          if (error.response.data.error !== undefined) {
            this.validationErrors = error.response.data.error;
          }
          return error;
        });
    },
  },
});
</script>

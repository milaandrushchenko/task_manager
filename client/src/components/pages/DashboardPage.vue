<template>
  <LayoutDiv>
    <div class="flex justify-center">
      <div class="w-full">
        <nav class="flex items-center justify-between bg-gray-100 p-4">
          <a class="text-xl font-bold" href="#">TASK MANAGER</a>
          <ul class="flex">
            <li class="ml-4">
              <a @click="logoutAction()" class="text-blue-600" href="#"
                >Logout</a
              >
            </li>
          </ul>
        </nav>
        <h2 class="text-center mt-5">Welcome, {{ user?.email }}!</h2>
      </div>
    </div>
  </LayoutDiv>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import LayoutDiv from "../LayoutDiv.vue";

export default defineComponent({
  name: "DashboardPage",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      user: {} as any,
    };
  },
  created() {
    this.getUser();
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    } else {
      this.getUser();
    }
  },
  methods: {
    getUser() {
      axios
        .get("/auth/profile", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((r) => {
          this.user = r.data;
          return r;
        })
        .catch((e) => {
          return e;
        });
    },

    logoutAction() {
      localStorage.setItem("token", "");
      this.$router.push("/");
    },
  },
});
</script>

<template>
  <v-container>
    <page3 :user="state.user"></page3>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import page1 from "@/components/component1.vue";

import User from "@/class/User";
import Admin from "@/class/Admin";
import UserServices from "@/services/userService";
export default defineComponent({
  components: {
    page3: page1,
  },
  setup() {
    const state = reactive({
      user: new User(),
      admin: new Admin(),
    });

    state.user = UserServices.createUser(
      1,
      "Jean",
      "Lafitte",
      "jLaffite@gmail.com"
    );

    state.admin = UserServices.createAdmin(
      2,
      "Jean",
      "Lassale",
      "jLassale@gmail.com"
    );
    state.admin.permission = UserServices.addAdminPermnission();

    return { state };
  },
});
</script>

<style></style>

<template>
  <v-app>
    <router-link to="/page1">Page 1</router-link>
    <router-link to="/page2">Page 2</router-link>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>

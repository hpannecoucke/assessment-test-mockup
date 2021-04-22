<template>
  <v-container
    >page2

    <page4 :user="state.admin"></page4>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import page2 from "@/components/component2.vue";
export default defineComponent({
  components: {
    page4: page2,
  },
});
</script>

<style></style>

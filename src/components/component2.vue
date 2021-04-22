<template>
  <div>
    Component 2

    <v-form>
      <v-text-field disabled :value="state.form.id" />
      <v-text-field v-model="state.form.firstname" placeholder="firstname" />
      <v-text-field v-model="state.form.lastname" placeholder="lastname" />
      <v-text-field v-model="state.form.email" placeholder="email" />
      <v-btn @click="valid">Update</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  props: ["user"],
  setup(props) {
    const state = reactive({
      form: props.user,
    });
    const validate = () => {
      return false;
    };
    return { state, props, validate };
  },
});
</script>

<style></style>

<template>
  <div>
    Component 1
    <v-form>
      <v-text-field disabled :value="state.form.id" />
      <v-text-field v-model="state.form.firstname" placeholder="firstname" />
      <v-text-field v-model="state.form.lastname" placeholder="lastname" />
      <v-text-field v-model="state.form.email" placeholder="email" />
      <v-btn @click="validate">Update</v-btn>
    </v-form>

    <v-card class="mt-10">
      Data saved in store:
      <hr />
      id: {{ getUser.id }}<br />
      firstname: {{ getUser.firstname }}<br />
      lastname: {{ getUser.lastname }}<br />
      email: {{ getUser.email }}<br />
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import { useActions, useGetters } from "vuex-composition-helpers";
export default defineComponent({
  props: ["user"],
  setup(props) {
    const { SET_USER } = useActions(["SET_USER"]);
    const { getUser } = useGetters(["getUser"]);
    const state = reactive({
      form: props.user,
    });
    const validate = () => {
      console.log("update");
      SET_USER(state.form);
      return true;
    };
    return { state, props, validate, getUser };
  },
});
</script>

<style></style>

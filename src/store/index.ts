import Admin from "@/class/Admin";
import User from "@/class/User";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: new User(),
    admin: new Admin(),
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    MUTATE_USER: (state, user: User): void => {
      state.user = user;
    },
  },
  actions: {
    SET_USER: ({ commit }, user: User): void => {
      commit("MUTATE_USER", user);
    },
  },
  modules: {},
});

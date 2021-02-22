import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    informationUser(state, information) {
      if (information) {
        this.state.user = information;
      }
    },
  },
  actions: {
  },
});

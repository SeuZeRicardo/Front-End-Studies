import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/** VueX is a state mamagement pattern library */
export default new Vuex.Store({
  /** State ->  */
  state: {
    flavor: '',
  },
  /** Mutations -> It´s to manipulate state */
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    },
  },
  /** Getters -> It´s to watch the state */
  getters: {
    flavor: state => state.flavor,
  },
  /** Notice how getters is an object.
   * flavor is a property of this object,
   * which accepts the state as the parameter,
   * and returns the flavor property of the state.
   * */
  actions: {

  },
});

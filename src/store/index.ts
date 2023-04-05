import Vue from "vue";
import Vuex from "vuex";
import { Module, createStore } from "vuex-smart-module";
import posts from "./modules/postsModule";

Vue.use(Vuex);

const root = new Module({
  modules: {
    posts,
  },
});

const store = createStore(root);

export default store;

export const postsModule = posts.context(store);

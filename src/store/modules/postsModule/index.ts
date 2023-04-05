import { Module } from "vuex-smart-module";
import getters from "./getters";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

const posts = new Module({
  state,
  getters,
  actions,
  mutations,
});

export default posts;

import { Posts } from "@/api/posts";
import { Actions } from "vuex-smart-module";
import PostsGetters from "./getters";
import PostsMutations from "./mutations";
import PostsState from "./state";

export default class PostsActions extends Actions<
  PostsState,
  PostsGetters,
  PostsMutations,
  PostsActions
> {
  async getPosts() {
    try {
      const response = await Posts.getPosts();
      this.commit("SET_POSTS", response.data);
    } catch (err) {
      console.log(err);
    }
  }
}

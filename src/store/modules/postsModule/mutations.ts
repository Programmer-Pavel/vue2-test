import { Post } from "@/types/post";
import { Mutations } from "vuex-smart-module";
import PostsState from "./state";

export default class PostsMutations extends Mutations<PostsState> {
  SET_POSTS(payload: Post[]) {
    this.state.posts = payload;
  }
}

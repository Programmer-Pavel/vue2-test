import { Post } from "@/types/post";
import { Getters } from "vuex-smart-module";
import PostsState from "./state";

export default class PostsGetters extends Getters<PostsState> {
  get posts(): Post[] {
    return this.state.posts;
  }
}

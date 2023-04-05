<template>
  <div class="posts_container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { postsModule } from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Posts extends Vue {
  get posts() {
    return postsModule.getters.posts;
  }

  mounted() {
    postsModule.actions.getPosts();
  }
}
</script>

<style scoped>
.posts_container {
  display: flex;
  justify-content: center;
}

ul {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

<template>
  <Posts />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Posts from "@/components/Posts.vue"; // @ is an alias to /src

@Component({
  components: {
    Posts,
  },
})
export default class PostsView extends Vue {}
</script>

<template>
  <div class="form_container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <div class="input_container">
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" />
        <div v-if="titleError" class="error">Поле не может быть пустым!</div>
      </div>

      <div class="input_container">
        <label for="body">Body:</label>
        <input id="body" v-model="body" type="text" />
        <div v-if="bodyError" class="error">Поле не может быть пустым!</div>
      </div>

      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  title = "";
  body = "";
  titleError = false;
  bodyError = false;

  onSubmit() {
    if (!this.title) {
      this.titleError = true;
    }

    if (!this.body) {
      this.bodyError = true;
    }
  }

  @Watch("title")
  onTitleChanged() {
    if (!this.title) {
      this.titleError = true;
    } else {
      this.titleError = false;
    }
  }

  @Watch("body")
  onBodyChanged() {
    if (!this.body) {
      this.bodyError = true;
    } else {
      this.bodyError = false;
    }
  }
}
</script>

<style scoped>
.form_container {
  display: flex;
  justify-content: center;
}
.form {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.input_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.error {
  margin-top: 5px;
  color: red;
}
</style>

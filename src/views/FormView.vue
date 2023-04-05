<template>
  <Form />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue";

@Component({
  components: {
    Form,
  },
})
export default class FormView extends Vue {}
</script>

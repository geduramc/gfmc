<template>
  <h1>New Post</h1>
  <div class="row">
    <div class="col-md-12 mt-4">
      <TextEditorComponent />
    </div>
  </div>
</template>
<script lang="ts">
import TextEditorComponent from '@/components/shared/TextEditorComponent.vue'

export default {
  setup() {
    return {
    }
  },
  components: {
    TextEditorComponent
  }
}
</script>
<style scoped></style>

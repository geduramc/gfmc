<script>
import TextEditorComponent from '@/components/shared/TextEditorComponent.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    TextEditorComponent
  }
}
</script>

<template>
  <h1>New Post</h1>
  <div class="row">
    <div class="col-md-12 mt-4">
      <TextEditorComponent />
    </div>
  </div>
</template>
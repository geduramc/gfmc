<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <img
        src="https://uploads-ssl.webflow.com/5ecd294d76ebd3e12932a91f/5f2bfc694c1f43392e10a612_building-blocks-edit.gif"
        class="img img-fluid mx-auto rotate" role="img">
    </div>
    <div class="col-md-12 gpost">{{ loadPost }}</div>
    <div class="col-md-12 gpost">{{ loadPost }}</div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'HomeComponent',
  setup() {
    const loadPost = ref('')

    setInterval(() => {
      loadPost.value = (loadPost.value.length == 3) ? '.' : loadPost.value + '.'
    }, 1000)

    return {
      loadPost
    }
  }
}
</script>
<style scoped>
.img {
  width: 50%;
  margin-bottom: 4rem;
}
.gpost {
  border: 1px solid var(--border-primary);
  padding: 1rem;
  margin-bottom: 2rem;
}
.rotate {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>

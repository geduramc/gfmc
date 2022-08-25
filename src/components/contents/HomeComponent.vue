<script>
let repeatPost = 4;

export default {
  data() {
    return {
      repeatPost
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
  padding: 2rem;
  margin-bottom: 2rem;
}

@media only screen and (max-device-width: 640px) {}
</style>

<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <img
        src="https://uploads-ssl.webflow.com/5ecd294d76ebd3e12932a91f/5f2bfc694c1f43392e10a612_building-blocks-edit.gif"
        class="img img-fluid mx-auto" role="img">
    </div>
    <div v-for="item in repeatPost" class="col-md-12 gpost">...</div>
  </div>
</template>
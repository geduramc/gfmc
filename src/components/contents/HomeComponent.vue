<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style>
.contenedor{
  position: relative;
}

.img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
  width: 50%;
}
@media only screen and (max-device-width: 640px) {
    .img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 40%);
      width: 100%;
    }
}
</style>

<template>
  <div class="row">
    <div class="col-md-12 contenedor text-center">
      <img src="https://uploads-ssl.webflow.com/5ecd294d76ebd3e12932a91f/5f2bfc694c1f43392e10a612_building-blocks-edit.gif"
      class="img img-fluid mx-auto" role="img">
    </div>
  </div>
</template>
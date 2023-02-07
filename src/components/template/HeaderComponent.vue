<template>
  <header>
  <nav class="navbar">
    <a class="header-icon" href="#">
      <img src="@/assets/icons/geduramc_circle.png" width="30" height="30" alt="geduramc_icon">
    </a>
  </nav>
</header>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()

    return {
      routes,
    }
  }
}
</script>
<style lang="css" scoped>
a.header-icon {
  cursor: initial;
}
img{
  margin: .5rem .5rem 0rem;
}
</style>

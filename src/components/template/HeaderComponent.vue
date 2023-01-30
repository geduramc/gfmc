<template>
  <nav class="navbar bg-dark fixed-top navbar-expand-lg">
    <a class="navbar-brand header-icon" href="#">
      <img src="@public/icons/geduramc_circle.png" width="30" height="30" alt="geduramc_icon">
    </a>
  </nav>
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
.bg-dark {
  background-color: var(--background-primary) !important;
}
</style>

<script>
import router from '@/router'

let routes = router.getRoutes();

export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
      aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img src="@/assets/icons/geduramc_circle.png" width="30" height="30" alt="">
    </a>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li v-for="route in routes" class="nav-item active">
          <router-link v-if="route.meta.active && !route.meta.admin" class="nav-link" :to="route.path"
            data-toggle="collapse" data-target="#navbarToggler">{{ route.name }}</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0"></form>
    </div>
  </nav>
</template>
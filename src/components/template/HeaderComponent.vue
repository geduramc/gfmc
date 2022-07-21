<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img src="@/assets/icons/geduramc_circle.png" width="30" height="30" alt="">
    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/Portfolio">Portfolio</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0"></form>
    </div>
  </nav>
</template>
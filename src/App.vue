<template>
  <HeaderComponent />
  <main>
    <div class="container general-container">
      <div class="row pt-4">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <aside class="col-md-4">
          <AsideComponent />
        </aside>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
<script lang="ts">
import HeaderComponent from './components/template/HeaderComponent.vue'
import AsideComponent from './components/template/AsideComponent.vue'
import FooterComponent from './components/template/FooterComponent.vue'

export default {
  name: "App",
  components: {
    HeaderComponent,
    AsideComponent,
    FooterComponent
  }
}

</script>
<style>
@import '@/assets/base.css';
</style>

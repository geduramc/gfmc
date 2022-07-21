<script setup>
  import HeaderComponent from '@/components/template/HeaderComponent.vue'
  import AsideComponent from '@/components/template/AsideComponent.vue'
  import FooterComponent from '@/components/template/FooterComponent.vue'
</script>

<template>
  <HeaderComponent/>
  <main>
    <div class="container general-container">
      <div class="row pt-4">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <aside class="col-md-4 blog-sidebar">
          <AsideComponent/>
        </aside>
      </div>
    </div>
  </main>
  <FooterComponent/>
</template>

<style>
@import '@/assets/base.css';
</style>

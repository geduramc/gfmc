<script setup>
  import HeaderComponent from './components/template/HeaderComponent.vue';
  import ContentComponent from './components/template/ContentComponent.vue';
  import FooterComponent from './components/template/FooterComponent.vue';
</script>

<template>
  <HeaderComponent/>
  <main>
    <div class="container general-container">
      <ContentComponent/>
    </div>
  </main>
  <FooterComponent/>
</template>

<style>
@import './assets/base.css';
</style>

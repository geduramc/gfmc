<template>
  <div class="p-4 mb-3 rounded">
    <h4 class="font-italic">About</h4>
    <p class="mb-0">{{ aboutText }}</p>
  </div>

  <div class="p-4">
    <h4 class="font-italic">Archives</h4>
    <ol class="list-unstyled mb-0">
      <li v-for="item in archives"><a href="#">{{ item }}</a></li>
    </ol>
  </div>

  <div class="p-4">
    <h4 class="font-italic">Elsewhere</h4>
    <ol class="list-unstyled">
      <li v-for="item in social"><a href="#">{{ item }}</a></li>
    </ol>
  </div>
</template>
<script lang="ts">
const archives = ["Enero 2022", "Febrero 2022", "Marzo 2022", "Abril 2022", "Mayo 2022", "Junio 2022", "Agosto 2022", "Septiembre 2022", "Octubre 2022", "Noviembre 2022", "Diciembre 2022"];
const social = ["Gitlab", "GitHub", "Twitter", "LinkedIn"];
const aboutText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default {
  setup() {
    return {
      archives,
      social,
      aboutText
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}
</style>

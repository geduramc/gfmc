<template>
  <div class="p-4">
    <h3 class="font-italic">About</h3>
    <p class="mb-0">{{ aboutText }}</p>
  </div>

  <div class="p-4">
    <h3 class="font-italic">Archives</h3>
    <ul>
      <li v-for="item in archives"><a href="#">{{ item }}</a></li>
    </ul>
  </div>

  <div class="p-4">
    <h3 class="font-italic">Elsewhere</h3>
    <ul>
      <li v-for="item in social"><a href="#">{{ item }}</a></li>
    </ul>
  </div>
</template>
<script lang="ts">
const archives = ["Agosto 2022", "Septiembre 2022", "Octubre 2022", "Noviembre 2022", "Diciembre 2022"];
const social = ["GitHub", "Twitter", "LinkedIn"];
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

ul {
  font-size: 14px;
}
</style>

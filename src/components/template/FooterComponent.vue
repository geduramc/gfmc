<script>
export default {
  data() {
    let year = new Date().getFullYear();
    return {
      year
    }
  }
}
</script>

<template>
    <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
            © {{ year }} Copyright geduramc
        </div>
    </footer>
</template>
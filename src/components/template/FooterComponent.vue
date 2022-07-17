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
    <!-- Footer -->
    <footer class="page-footer font-small blue fixed-bottom">
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">
            © {{ year }} Copyright geduramc
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
</template>
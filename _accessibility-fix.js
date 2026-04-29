<script>
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('button.aa-DetachedSearchButton');
  if (searchBtn && !searchBtn.getAttribute('aria-label')) {
    searchBtn.setAttribute('aria-label', 'Open search');
  }
});
</script>
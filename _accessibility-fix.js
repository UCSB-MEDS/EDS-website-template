<script>
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('button.aa-DetachedSearchButton');
  if (searchBtn && !searchBtn.getAttribute('aria-label')) {
    searchBtn.setAttribute('aria-label', 'Open search');
  }
});

const autocomplete = document.querySelector('div.aa-Autocomplete');
  if (autocomplete && !autocomplete.getAttribute('role')) {
    autocomplete.setAttribute('role', 'combobox');
    autocomplete.setAttribute('aria-label', 'Search');
  }
});

const githubLink = document.querySelector('a#nav-menu-bi-github.nav-link.dropdown-toggle');
  if (githubLink && !githubLink.getAttribute('aria-label')) {
    githubLink.setAttribute('aria-label', 'GitHub');
  }
});
</script>
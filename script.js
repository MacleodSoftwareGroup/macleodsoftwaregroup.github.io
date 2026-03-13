// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check for saved theme or system preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    html.classList.remove('dark');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  toggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
});

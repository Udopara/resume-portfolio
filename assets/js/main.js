const root = document.documentElement;
const toggleTheme = document.getElementById('toggle-theme');
const themeIcon = toggleTheme.querySelector('img');
const logo = document.getElementById('logo');

if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('theme-dark');
  logo.src = 'assets/img/logo-dark.svg';
}

toggleTheme.addEventListener('click', () => {
  root.classList.toggle('theme-dark');
  const theme = root.classList.contains('theme-dark') ? 'dark' : 'light';
  themeIcon.src = `assets/img/icon-${theme}.svg`;
  logo.src = `assets/img/logo-${theme}.svg`;
  localStorage.setItem('theme', theme);
});

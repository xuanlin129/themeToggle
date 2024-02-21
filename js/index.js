const themeToggle = document.querySelector('#theme')
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode')
})
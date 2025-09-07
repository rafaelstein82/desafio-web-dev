(function() {
  let mode = localStorage.getItem('mode');

  // Caso não haja preferência salva, pega a do sistema
  if (!mode) {
    mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
  }

  const body = document.body || document.getElementsByTagName('body')[0];

  if (body) {
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(mode + '-mode');
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.remove('dark-mode', 'light-mode');
      document.body.classList.add(mode + '-mode');
    });
  }

  // Mostrar o body depois que o tema for aplicado
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
  });
})();

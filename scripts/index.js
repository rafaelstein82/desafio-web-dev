(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const switchInput = document.getElementById('mode-switch');

    // Define o estado inicial do switch baseado no modo salvo
    const currentMode = localStorage.getItem('mode') || 'light';
    switchInput.checked = currentMode === 'dark';

    // Evento de troca de tema
    switchInput.addEventListener('change', () => {
      const newMode = switchInput.checked ? 'dark' : 'light';

      body.classList.remove('dark-mode', 'light-mode');
      body.classList.add(newMode + '-mode');

      localStorage.setItem('mode', newMode);
    });
  });
})();


   
//Página Equipe - Elemento Sanfona
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;

      // Fecha outros itens antes de abrir o novo
      document.querySelectorAll('.accordion-item').forEach(el => {
        if (el !== item) {
          el.classList.remove('active');
        }
      });

      // Alterna o item clicado
      item.classList.toggle('active');
    });
  });
});
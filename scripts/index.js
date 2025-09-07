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


/* if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('change', function() {
        if (modeSwitch.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
}
// On page load, set the mode based on localStorage
window.onload = function() {
    var mode = localStorage.getItem('mode');
    var modeSwitch = document.getElementById('mode-switch');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        modeSwitch.checked = true;
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        modeSwitch.checked = false;
    }
}
// Optional: If you want to set a default mode based on system preference
if (!localStorage.getItem('mode')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('mode-switch').checked = false;
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('mode-switch').checked = true;
    }
}    */
   
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
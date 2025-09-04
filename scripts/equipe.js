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
// Slider Captcha JS
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('captcha-slider');
    const status = document.getElementById('slider-status');
    const btn = document.getElementById('enviar-btn');
    const form = document.querySelector('form');

    if (slider && status && btn) {
        // Garante que o botão já começa desabilitado
        btn.disabled = true;

        slider.addEventListener('input', function () {
            if (slider.value >= 100) {
                status.textContent = 'Verificado!';
                status.style.color = 'green';
                btn.disabled = false;
            } else {
                status.textContent = 'Desbloqueie o envio';
                status.style.color = '#888';
                btn.disabled = true;
            }
        });
    }

    // Validação dos campos obrigatórios ao enviar
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // impede envio real

            // Mensagem personalizada
            const nome = document.getElementById('nome').value.trim().split(' ')[0];
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            alert(
                `A equipe da Clínica Vitalis agradece seu contato, ${nome}. Fique atento em seu e-mail ou telefone.\n\nE-mail: ${email}\nTelefone: ${telefone}`
            );

            // Limpar todos os campos do formulário
            Array.from(form.elements).forEach(function(element) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = false;
                    } else {
                        element.value = '';
                    }
                }
            });

            // Resetar captcha slider
            if (slider && status && btn) {
                slider.value = 0;
                slider.dispatchEvent(new Event('input'));
            }
        });
    }
});
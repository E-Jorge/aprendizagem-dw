document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mainNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Ano no rodapé
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Formulário de contacto (apenas front-end, sem envio real)
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form && feedback) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const nome = form.nome.value.trim();

            if (!form.checkValidity()) {
                feedback.textContent = 'Por favor, preencha os campos obrigatórios corretamente.';
                feedback.style.color = '#cc4f19';
                return;
            }

            feedback.textContent = `Obrigado, ${nome}! Recebemos o seu pedido e entraremos em contacto em breve.`;
            feedback.style.color = '#2b3540';
            form.reset();
        });
    }
});

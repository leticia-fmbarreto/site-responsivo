document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Menu Responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Abre/fecha o menu ao clicar no ícone
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (para navegação interna em mobile)
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. Lógica do Formulário com Validação
    const formEncomenda = document.getElementById('form-encomenda');

    formEncomenda.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault(); 

        // Executa a função de validação
        if (validarFormulario()) {
            // Se a validação for TRUE (passou):
            
            // SIMULAÇÃO: Exibe uma mensagem de sucesso
            alert('✅ Pedido de orçamento enviado com sucesso! Agradecemos o contato. Entraremos em contato por e-mail ou WhatsApp.');

            // Opcional: Limpa o formulário após o envio
            formEncomenda.reset(); 
            
            // Em um site real, a linha de código para enviar os dados para o backend (servidor) viria aqui.
        }
    });

    /**
     * Função para validar os campos do formulário antes do envio.
     * @returns {boolean} Retorna true se a validação for bem-sucedida, false caso contrário.
     */
    function validarFormulario() {
        const telefoneInput = document.getElementById('telefone');
        const telefone = telefoneInput.value.trim();

        // 2.1. Validação de Telefone (Obrigatório e Formato Básico)
        if (telefone === "") {
            alert('Por favor, preencha o campo Telefone (WhatsApp).');
            telefoneInput.focus();
            return false;
        }

        // 2.2. Validação de Formato Básico (Ex: 8 a 15 dígitos)
        // Esta é uma REGEX (Expressão Regular) simples para o Brasil:
        // Verifica se há pelo menos 8 a 15 números, permitindo espaços, hífens e parênteses.
        const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/; 

        if (!regexTelefone.test(telefone)) {
            alert('Por favor, insira um número de telefone válido (ex: (XX) XXXXX-XXXX).');
            telefoneInput.focus();
            return false;
        }
        
        // Se todas as validações passarem
        return true;
    }
});
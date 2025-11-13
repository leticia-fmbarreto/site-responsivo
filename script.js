document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsapp-form');
    // Número de WhatsApp da Nilma (Sem formatação, apenas dígitos)
    const numeroWhatsApp = '5574988391514'; // +55 (código do Brasil) 74 (DDD) 988391514 (Número)

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // 1. Coleta dos dados do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        const detalhes = document.getElementById('detalhes').value;

        // 2. Formatação da mensagem
        const mensagem = 
            `Olá, Delícias da Nyh! Gostaria de fazer uma encomenda. 🎂%0A%0A` +
            `*Nome do Cliente:* ${nome}%0A` +
            `*Telefone:* ${telefone}%0A` +
            `*Data Prevista:* ${data}%0A%0A` +
            `*Detalhes do Pedido:*%0A` +
            `${detalhes}%0A%0A` +
            `*Aguardando a confirmação!*`;

        // 3. Criação do link do WhatsApp
        // O `encodeURIComponent` garante que o texto especial (espaços, quebras de linha) seja formatado corretamente.
        const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

        // 4. Redirecionamento
        window.open(whatsappLink, '_blank');
    });
});
// Limpa service workers, se houver
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
            
    // Captura os dados do formulário
    var formData = new FormData(this);

    // Envia os dados para o Google Forms via AJAX
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSendNYDYNBOKsOMTcekEGzbnkFKXfqauWdAqg8Z5FRiLj7jBg/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'  
    }).then(function(response) {
        // Exibe a mensagem de sucesso e limpa o formulário
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('registrationForm').reset();
    }).catch(function(error) {
        console.error('Erro ao enviar o formulário:', error);
    });
});

//menu de navegação
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    console.log("Script carregado!"); // Confirmação que o script está rodando
    console.log(menuIcon); // Deve retornar o elemento
    console.log(sidebar); // Deve retornar o elemento

    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    } else {
        console.error("Elementos do menu não encontrados");
    }
});

//redirecionamento para whatsapp, caso os pagamentos fossems automatizados
/*document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    const pagamento = document.querySelector('input[name="entry.291555730"]:checked').value;

    if (pagamento === 'Cartão de Crédito') {
        // Substitua o número e a mensagem pelo que você deseja enviar pelo WhatsApp
        const numeroWhatsApp = '5511962305130'; // número com DDD
        const mensagem = 'Olá, gostaria de realizar o pagamento do encontro de casais, com cartão de crédito!';
        const urlWhatsApp = `https://wa.me/${5511962305130}?text=${encodeURIComponent(mensagem)}`;
        window.location.href = urlWhatsApp; // Redireciona para o WhatsApp
    } else if (pagamento === 'Pix Parcelado') {
        // Substitua pela URL da sua página de chave Pix
        window.location.href = 'Pagamento.html'; // Redireciona para a página Pix
    }
});*/
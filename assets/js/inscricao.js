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


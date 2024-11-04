// Limpa service workers, se houver
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

document.getElementById('copiar-chave').addEventListener('click', function() {
    const chavePix = document.getElementById('chave-pix').innerText;
    
    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement('input');
    tempInput.value = chavePix;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // Copia o texto
    document.body.removeChild(tempInput); // Remove o elemento temporário

    alert('Chave Pix copiada para a área de transferência!'); // Mensagem de confirmação
});

document.getElementById('enviar-comprovante').addEventListener('click', function() {
    
    const numeroWhatsApp = '5511962305130'; 
    const mensagem = 'Olá, gostaria de realizar o pagamento do encontro de casais, com Pix!';

    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank'); 
});

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

// Função para preencher as opções de 1 a 12 no seletor de parcelas
function calcularParcelas() {
    const valorTotal = 2210.00;  // valor fixo de R$ 2210,00
    const numeroParcelas = document.getElementById("parcelas").value;

    // Verifica se o valor de numeroParcelas é válido
    if (numeroParcelas > 0) {
        const valorParcela = (valorTotal / numeroParcelas).toFixed(2);

        document.getElementById("resultado").textContent = 
            `Valor das parcelas em ${numeroParcelas}x sem juros: R$ ${valorParcela}`;
    } else {
        document.getElementById("resultado").textContent = "Selecione o número de parcelas.";
    }
}
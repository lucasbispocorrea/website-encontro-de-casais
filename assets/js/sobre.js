// Limpa service workers, se houver
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

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

function toggleMenu() {
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = mensagem.style.display === "none" ? "block" : "none";
}

function fecharMensagem() {
    document.getElementById("mensagem").style.display = "none";
}

function abrirWaze() {
    const endereco = encodeURIComponent(document.getElementById("endereco").textContent);
    const url = `https://waze.com/ul?q=${endereco}`;
    window.open(url, '_blank');
}

function abrirMaps() {
    const endereco = encodeURIComponent(document.getElementById("endereco").textContent);
    const url = `https://www.google.com/maps/search/?api=1&query=${endereco}`;
    window.open(url, '_blank');
}

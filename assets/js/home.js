// Limpa service workers, se houver
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

// Alternar visibilidade do menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // Esconde o menu
    } else {
        sidebar.style.left = '0'; // Mostra o menu
    }
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !sidebar.contains(event.target) && sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // Esconde o menu
    }
});


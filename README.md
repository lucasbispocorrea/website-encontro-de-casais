<h1 align="center">SITE EVENTO DE CASAIS</h1>

<h2 align="center">Site criado para inscrição de evento para casais da igreja Metodista Wesleyana</h2>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
<p align="center">A página foi desenvolvida, para conter infroamç~eos referente ao evento e para que as pessoas pudessem se inscrever e verificar sobre as formas de pagamento direto pelo smartphone.</p>

<p align="center">
    <a href="https://encontrodecasais.lovestoblog.com/" target="_blanc">
        <img src=https://img.shields.io/badge/📱Visite_o_Site-000?style=for-the-badge&logo=project />
    </a>
</p>

<p align="center">
    <img src="./assets/img/Captura de tela 2025-02-18 145621.png"></img>
</p>

Utilizei HTML e CSS em todas as funcionalidades e páginas, mas, a principio, como precisava de uma solução rápida e mais elegante que apenas um Google Forms, a página foi desenvoldida focando apenas no mobile, portanto, se você estiver visualizando em um computador, utilize DevTools para uma melhor experiência 😅

<p align="center">
    <img src="./assets/img/gif.gif"></img>
</p>

Utilizei JavaScript em todas as telas, no menu lateral, mas tiveram outras funções particulares de cada uma.
Por exemplo, na página Sobre: O JS foi utilizado no endereço do Hotel, para redirecionar diretamete para o app Google Maps ou Waze

```bash
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
```

Utilizei o JS para calcular os valores das parcelas antes de concluir a inscrição na página Pagamento

Na página Incrição, como não havia tempo para desenvolver o backend, por conta da demanda, utilizei o Google Sheets apenas para armazenamento dos dados dos inscritos
Como não contém dados pessoais, apenas nome e contato, não me preocupei tanto com a segurança dos dados, pois só serviria mesmo para controle interno da quantidade de inscritos e atualizações de pagamentos:

```bash
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
```


Na hospedagem, por ora, utilizo a plataforma [InfinityFree](https://dash.infinityfree.com/), que permite hospedagm gratuita, com certificado SSL como segurança
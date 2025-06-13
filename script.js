// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de download pela classe 'header-button'
    const downloadButton = document.querySelector('.header-button');

    // Adiciona um evento de clique ao botão de download
    downloadButton.addEventListener('click', function(e) {
        // Previne o comportamento padrão do clique
        e.preventDefault();

        // Define o caminho do arquivo do currículo no Google Drive
        const curriculoPath = 'https://drive.usercontent.google.com/download?id=1ivS5oncxIUi_ZYMoGKHUaNk2zaMOHC_t&export=download&authuser=0&confirm=t&uuid=1e23267a-2a6a-4cf6-bd32-6cd4e39f91be&at=ALoNOgnW-pc6NCIUt45-NL-YHN8L:1746882911152';

        // Cria um elemento de link temporário
        const link = document.createElement('a');
        // Define o href do link com o caminho do arquivo
        link.href = curriculoPath;
        // Define o nome do arquivo para download
        link.download = 'Currículo.pdf';

        // Adiciona o link temporário ao corpo do documento
        document.body.appendChild(link);
        // Simula o clique no link para iniciar o download
        link.click();
        // Remove o link temporário do documento
        document.body.removeChild(link);
    });

    // aplicando o direcionamento para as redes sociais
    document.getElementById("instagram-link").href = "https://www.instagram.com/mirandaa_joel/";
    document.getElementById("facebook-link").href = "https://www.facebook.com/seuperfil";
    document.getElementById("whatsapp-link").href = "https://wa.me/qr/JBMHKDWYGTN2C1";
});
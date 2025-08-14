fetch('../componentes/menu.html')
    .then(r => r.text())
    .then(html => document.getElementById('menu').innerHTML = html);

document.addEventListener("DOMContentLoaded", function() {
    // Espera a página carregar o HTML básico
    fetch('../componentes/bgvideo.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('video').innerHTML = html;
        })
        .catch(err => console.error("Erro ao carregar o vídeo:", err));
});

fetch('../componentes/quemsomos.html')
    .then(r => r.text())
    .then(html => document.getElementById('quemsomos').innerHTML = html);

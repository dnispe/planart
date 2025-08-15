// Lista de componentes e IDs
const componentes = [
    { arquivo: '../componentes/menu.html', id: 'menu' },
    { arquivo: '../componentes/quemsomos.html', id: 'quemsomos' },
    { arquivo: '../componentes/hero.html', id: 'hero' }
];

// Função para carregar todos os componentes
componentes.forEach(c => {
    fetch(c.arquivo)
        .then(r => r.text())
        .then(html => {
            const el = document.getElementById(c.id);
            if (el) el.innerHTML = html;
        })
        .catch(err => console.error(`Erro ao carregar ${c.arquivo}:`, err));
});

// Função para carregar o vídeo somente após a carga dos componentes
document.addEventListener("DOMContentLoaded", function() {
    // Espera a página carregar o HTML básico
    fetch('../componentes/bgvideo.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('video').innerHTML = html;
        })
        .catch(err => console.error("Erro ao carregar o vídeo:", err));
});

// Hero typed effect
document.addEventListener("DOMContentLoaded", function() {
    fetch('../componentes/hero.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('hero').innerHTML = html;

            // Inicializa Typed.js depois de injetar o HTML
            new Typed('#typed-text', {
                strings: [
                    "EVENTOS DE SUCESSO COMEÇAM COM A <STRONG>PLANART</STRONG>.",
                    "PALCO, SOM E ILUMINAÇÃO DE ALTO PADRÃO",
                    "EXPERIÊNCIA QUE TRANSFORMA MOMENTOS EM MEMÓRIAS"
                ],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 1500,
                loop: true
            });
        })
        .catch(err => console.error("Erro ao carregar hero:", err));
});




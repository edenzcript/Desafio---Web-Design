let currentSlide1 = 0; // Indice do slide atual do primeiro carrossel
let currentSlide2 = 0; // Indice do slide atual do segundo carrossel

// Função para mudar o slide no carrossel
function changeSlide(direction, carouselId) {
    const carouselItems = document.querySelectorAll(`#${carouselId} .carousel-item`); // Seleciona todos os itens do carrossel
    const totalSlides = carouselItems.length; // Total de slides

    if (carouselId === 'carousel1') {
        currentSlide1 = (currentSlide1 + direction + totalSlides) % totalSlides; // Calcula o próximo slide
        carouselItems.forEach((item, index) => {
            item.classList.remove('active'); // Remove classe 'active' de todos os itens
            if (index === currentSlide1) {
                item.classList.add('active'); // Adiciona classe 'active' ao slide atual
            }
        });
    } else if (carouselId === 'carousel2') {
        currentSlide2 = (currentSlide2 + direction + totalSlides) % totalSlides; // Calcula o próximo slide
        carouselItems.forEach((item, index) => {
            item.classList.remove('active'); // Remove classe 'active' de todos os itens
            if (index === currentSlide2) {
                item.classList.add('active'); // Adiciona classe 'active' ao slide atual
            }
        });
    }
}

// Função para alternar a exibição do texto no banner
function toggleBanner() {
    const bannerText = document.getElementById("banner-text"); // Seleciona o texto do banner
    bannerText.style.display = bannerText.style.display === "none" ? "block" : "none"; // Alterna a exibição
}

// Adiciona evento para o formulário da newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    document.getElementById('success-message').style.display = 'block'; // Mostra a mensagem de sucesso
});
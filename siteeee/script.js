// Função para alternar o menu de navegação entre visível e oculto
function toggleMenu() {
  const navLinks = document.getElementById('nav-links'); // Obtém o elemento da lista de navegação pelo ID 'nav-links'
  navLinks.classList.toggle('show'); // Adiciona ou remove a classe 'show' para mostrar ou ocultar o menu
}

// Variável que mantém o índice do slide atual, iniciado em 1
let slideIndex = 1;

// Chama a função para mostrar os slides automaticamente
showSlides(slideIndex);

// Função para mostrar os slides
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides"); // Obtém todos os elementos com a classe 'mySlides' (os slides)
  const dots = document.getElementsByClassName("dot"); // Obtém todos os elementos com a classe 'dot' (os indicadores de slide)

  // Verifica se o índice 'n' é maior que o número de slides; se for, volta ao primeiro slide
  if (n > slides.length) { slideIndex = 1; }
  // Verifica se o índice 'n' é menor que 1; se for, vai para o último slide
  if (n < 1) { slideIndex = slides.length; }

  // Oculta todos os slides definindo seu estilo de exibição para 'none'
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os indicadores de slide
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibe o slide atual, ajustando o índice para começar de 0 e acessando seu estilo de exibição para 'block'
  slides[slideIndex - 1].style.display = "block";

  // Adiciona a classe 'active' ao indicador de slide correspondente ao slide atual
  dots[slideIndex - 1].className += " active";
}

// Função para avançar ou retroceder nos slides
function plusSlides(n) {
  showSlides(slideIndex += n); // Chama showSlides() com o novo índice de slide
}

// Função para ir diretamente para um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n); // Define o slide atual para o índice fornecido e chama showSlides()
}

// Função para avançar automaticamente os slides a cada 3 segundos
function autoShowSlides() {
  slideIndex++; // Incrementa o índice do slide atual
  showSlides(slideIndex); // Mostra o slide atualizado
  setTimeout(autoShowSlides, 3000); // Configura a função para ser chamada novamente após 3 segundos
}

autoShowSlides(); // Inicia a função para mostrar os slides automaticamente

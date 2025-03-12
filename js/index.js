document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a ellipse1 e adiciona a classe 'selected'
    const ellipse1 = document.getElementById('ellipse1');
    ellipse1.classList.add('selected');

    const ellipses = document.querySelectorAll('.ellipse');

    ellipses.forEach(ellipse => {
        ellipse.addEventListener('click', function() {
            // Remove a classe 'selected' de todas as elipses
            ellipses.forEach(el => el.classList.remove('selected'));

            // Adiciona a classe 'selected' à elipse clicada
            this.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ellipses = document.querySelectorAll('.ellipse');
    const leftBoxes = document.querySelectorAll('.left-box');
    const rightBoxes = document.querySelectorAll('.right-box');

    // Garante que o conteúdo da Elipse 1 comece visível
    document.querySelector('.left-box[data-ellipse="ellipse1"]').style.display = 'block';
    document.querySelector('.right-box[data-ellipse="ellipse1"]').style.display = 'block';

    ellipses.forEach(ellipse => {
        ellipse.addEventListener('click', function() {
            const ellipseId = this.id; // Pega o ID da elipse clicada

            // Oculta todos os conteúdos
            leftBoxes.forEach(box => box.style.display = 'none');
            rightBoxes.forEach(box => box.style.display = 'none');

            // Exibe o conteúdo correspondente à elipse clicada
            const leftBox = document.querySelector(`.left-box[data-ellipse="${ellipseId}"]`);
            const rightBox = document.querySelector(`.right-box[data-ellipse="${ellipseId}"]`);

            if (leftBox && rightBox) {
                leftBox.style.display = 'block';
                rightBox.style.display = 'block';

                // Seleciona a primeira experiência do left-box exibido
                const firstExperience = leftBox.querySelector('.experience');
                if (firstExperience) {
                    // Remove a classe 'selected' de todas as experiências
                    const allExperiences = document.querySelectorAll('.experience');
                    allExperiences.forEach(exp => exp.classList.remove('selected'));

                    // Adiciona a classe 'selected' à primeira experiência
                    firstExperience.classList.add('selected');

                    // Exibe o parágrafo correspondente à primeira experiência
                    const experienceId = firstExperience.id;
                    const selectedParagraph = rightBox.querySelector(`p[data-experience="${experienceId}"]`);
                    if (selectedParagraph) {
                        // Oculta todos os parágrafos
                        rightBox.querySelectorAll('p').forEach(p => p.style.display = 'none');

                        // Exibe o parágrafo correspondente
                        selectedParagraph.style.display = 'block';
                    }
                }
            } else {
                console.error(`Elementos não encontrados para a elipse: ${ellipseId}`);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as experiências
    const experiences = document.querySelectorAll('.experience');

    // Garante que a experiência "Game Designer" comece selecionada
    const gameDesigner = document.getElementById('game-designer');
    gameDesigner.classList.add('selected');

    // Adiciona um event listener para cada experiência
    experiences.forEach(experience => {
        experience.addEventListener('click', function() {
            // Remove a classe 'selected' de todas as experiências
            experiences.forEach(exp => exp.classList.remove('selected'));

            // Adiciona a classe 'selected' à experiência clicada
            this.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const experiences = document.querySelectorAll('.experience');
    const paragraphs = document.querySelectorAll('.career-text p'); // Seleciona todos os parágrafos

    // Garante que a experiência "Game Designer" comece selecionada
    const gameDesigner = document.getElementById('game-designer');
    gameDesigner.classList.add('selected');

    // Oculta todos os parágrafos, exceto o do Game Designer
    paragraphs.forEach(p => {
        if (p.getAttribute('data-experience') !== 'game-designer') {
            p.style.display = 'none';
        }
    });

    experiences.forEach(experience => {
        experience.addEventListener('click', function() {
            // Remove a classe 'selected' de todas as experiências
            experiences.forEach(exp => exp.classList.remove('selected'));

            // Adiciona a classe 'selected' à experiência clicada
            this.classList.add('selected');

            // Oculta todos os parágrafos
            paragraphs.forEach(p => p.style.display = 'none');

            // Exibe o parágrafo correspondente à experiência selecionada
            const experienceId = this.id; // Pega o ID da experiência clicada
            const selectedParagraph = document.querySelector(`.career-text p[data-experience="${experienceId}"]`);
            if (selectedParagraph) {
                selectedParagraph.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gamesButton = document.getElementById('games-button');
    const designButton = document.getElementById('design-button');
    const gamesSlides = document.getElementById('games-slides');
    const designSlides = document.getElementById('design-slides');

    // Função para alternar os slides
    function toggleSlides(showGames) {
        if (showGames) {
            gamesSlides.style.display = 'block';
            designSlides.style.display = 'none';
            gamesButton.classList.add('selected');
            designButton.classList.remove('selected');
        } else {
            gamesSlides.style.display = 'none';
            designSlides.style.display = 'block';
            gamesButton.classList.remove('selected');
            designButton.classList.add('selected');
        }
    }

    // Event listeners para os botões
    gamesButton.addEventListener('click', function() {
        toggleSlides(true);
    });

    designButton.addEventListener('click', function() {
        toggleSlides(false);
    });

    // Inicializar com os slides de Games visíveis
    toggleSlides(true);
});

document.addEventListener('DOMContentLoaded', function() {
    const gamesButton = document.getElementById('games-button');
    const designButton = document.getElementById('design-button');
    const gamesSlides = document.getElementById('games-slides');
    const designSlides = document.getElementById('design-slides');
    const bulletsContainer = document.getElementById('bullets');

    let currentFilter = 'games'; // Armazena o filtro atual

    // Função para gerar bullets
    function generateBullets(slidesContainer) {
        bulletsContainer.innerHTML = '';
        const slides = slidesContainer.querySelectorAll('.slide');
        const slideCount = slides.length;

        for (let i = 0; i < slideCount; i++) {
            const bullet = document.createElement('label');
            bullet.setAttribute('for', `slide${i + 1}`);
            bulletsContainer.appendChild(bullet);
        }
    }

    // Função para alternar os slides e atualizar os bullets
    function toggleSlides(showGames) {
        if (showGames) {
            gamesSlides.style.display = 'block';
            designSlides.style.display = 'none';
            gamesButton.classList.add('selected');
            designButton.classList.remove('selected');
            generateBullets(gamesSlides);
            currentFilter = 'games';
            // Seleciona o primeiro slide de Games
            document.getElementById('slide1').checked = true;
        } else {
            gamesSlides.style.display = 'none';
            designSlides.style.display = 'block';
            gamesButton.classList.remove('selected');
            designButton.classList.add('selected');
            generateBullets(designSlides);
            currentFilter = 'design';
            // Seleciona o primeiro slide de Design
            document.getElementById('slide1').checked = true;
        }
    }

    // Event listeners para os botões
    gamesButton.addEventListener('click', function() {
        if (currentFilter !== 'games') {
            toggleSlides(true);
        }
    });

    designButton.addEventListener('click', function() {
        if (currentFilter !== 'design') {
            toggleSlides(false);
        }
    });

    // Inicializar com os slides de Games visíveis
    toggleSlides(true);
});
//Adicionando o Scroll Reveal no Linktree

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-linktree', {
        origin: 'left',
        duration: '3000',
        distance: '40%'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-icons', {
        origin: 'right',
        duration: '5000',
        distance: '50%'
    })
});


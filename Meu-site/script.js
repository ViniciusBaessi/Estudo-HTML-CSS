const botao = document.getElementById('botao');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggleMenu('active');
}

botao.addEventListener('click', toggleMenu)
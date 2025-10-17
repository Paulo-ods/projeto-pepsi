let show = true;
const menuContent = document.querySelector('.main-header-container');
const menuToggle = menuContent.querySelector('.menu-toggle');
const menuNav = menuContent.querySelector('.header-navigation-container');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    menuNav.classList.toggle('on', show);
    show = !show;
})

const header = document.querySelector('.main-header-container');
const mainSection = document.querySelector('.main-section');

function ajustarEspacamento() {
  const alturaHeader = header.offsetHeight;
  mainSection.style.marginTop = `${alturaHeader}px`;
}

// Executa ao carregar e ao redimensionar
window.addEventListener('load', ajustarEspacamento);
window.addEventListener('resize', ajustarEspacamento);
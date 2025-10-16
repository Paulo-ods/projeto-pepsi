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
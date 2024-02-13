/**primero crea una variable seleccioando la clase */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/**luego usa el evento toggle para que aparesca y desaparesca el menu */
menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

/**luego crea la funcion con el nombre del metodo toggleDesktopMenu */
/**La funcion que quita o muestra el menu */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
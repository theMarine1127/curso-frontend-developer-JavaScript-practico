/**primero crea una variable seleccioando la clase */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/**luego usa el evento toggle para que aparesca y desaparesca el menu */
menuEmail.addEventListener('click',toggleDesktopMenu);

/**luego crea la funcion con el nombre del metodo toggleDesktopMenu */
/**La funcion que quita o muestra el menu */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
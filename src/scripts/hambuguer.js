const hamburguer = document.querySelector('.burguer-button')
const navbar = document.querySelector('.navbar-links')
const link = document.querySelectorAll('.navbar-link')
const menu = document.querySelector('#menu')
const close = document.querySelector('#close')
const changeMenu = () => {
    if (!navbar.classList.contains('menu-burguer-navbar')) {
        navbar.classList.add('menu-burguer-navbar')
        link[0].classList.add('menu-burguer-link')
        link[1].classList.add('menu-burguer-link')
        link[2].classList.add('menu-burguer-link')
        menu.classList.add('display-none')
        close.classList.remove('display-none')
        document.documentElement.style.overflow = 'hidden'
    } else {
        navbar.classList.remove('menu-burguer-navbar')
        link[0].classList.remove('menu-burguer-link')
        link[1].classList.remove('menu-burguer-link')
        link[2].classList.remove('menu-burguer-link')
        menu.classList.remove('display-none')
        close.classList.add('display-none')
        document.documentElement.style.overflow = 'visible'
    }
}
hamburguer.addEventListener('click', changeMenu)

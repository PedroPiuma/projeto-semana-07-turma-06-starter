const hamburguer = document.querySelector('.burguer-button')
const changeMenu = () => {
    const navbar = document.querySelector('.navbar-links')
    const link = document.querySelectorAll('.navbar-link')
    const menu = document.querySelector('#menu')
    const close = document.querySelector('#close')
    navbar.classList.toggle('menu-burguer-navbar')
    link.forEach(e => e.classList.toggle('menu-burguer-link'))
    menu.classList.toggle('display-none')
    close.classList.toggle('display-none')

    if (!navbar.classList.contains('menu-burguer-navbar')) {
        document.documentElement.style.overflow = 'visible'
    } else {
        document.documentElement.style.overflow = 'hidden'
    }
}
hamburguer.addEventListener('click', changeMenu)

// link[0].classList.toggle('menu-burguer-link')
// link[1].classList.toggle('menu-burguer-link')
// link[2].classList.toggle('menu-burguer-link')
// else {
//     navbar.classList.remove('menu-burguer-navbar')
//     link[0].classList.remove('menu-burguer-link')
//     link[1].classList.remove('menu-burguer-link')
//     link[2].classList.remove('menu-burguer-link')
//     menu.classList.remove('display-none')
//     close.classList.add('display-none')
//     document.documentElement.style.overflow = 'visible'
// }
window.onload = () => {
    const hamburguer = document.querySelector('.burguer-button')
    const navbar = document.querySelector('.navbar-links')
    const link = document.querySelectorAll('.navbar-link')
    hamburguer.addEventListener('click', event => {
        // hamburguer.remove('svg')
        link[0].style.paddingBottom = '40px'
        link[1].style.paddingBottom = '40px'
        navbar.style.display = 'flex'
        navbar.style['flex-direction'] = 'column'
        navbar.style.position = 'fixed'
        navbar.style.top = '57px'
        navbar.style.left = 0
        navbar.style.bottom = 0
        navbar.style.width = '100vh'
        navbar.style.backgroundColor = '#171718'
        navbar.style.paddingLeft = '16px'
        navbar.style.paddingTop = '28.5px'
        document.documentElement.style.overflow = 'hidden'
    })
}
window.onload = () => {
    const name = document.getElementsByName('name')[0]
    console.log(name)
    const email = document.getElementsByName('email')[0]
    console.log(email)
    const mensage = document.getElementsByName('mensage')[0]
    console.log(mensage)
    const button = document.querySelector('.section-contact-form-button')
    console.log(button)
    button.addEventListener('click', event => {
        event.preventDefault()
        const data = {
            name: name.value,
            email: email.value,
            mensage: mensage.value
        }
        console.log(data)
    })

}
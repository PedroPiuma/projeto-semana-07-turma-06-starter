window.onload = () => {
    const name = document.getElementsByName('name')[0]
    console.log(name)
    const email = document.getElementsByName('email')[0]
    console.log(email)
    const mesage = document.getElementsByName('mesage')[0]
    console.log(mesage)
    const button = document.querySelector('.section-contact-form-button')
    console.log(button)
    const form = document.querySelector('.section-contact-form')
    button.addEventListener('click', event => {
        event.preventDefault()
        const data = {
            name: name.value,
            email: email.value,
            mesage: mesage.value
        }
        console.log(data)
        alert('Formulário enviado com sucesso!')
        form.reset()
    })
}

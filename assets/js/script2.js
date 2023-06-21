
color = ''

const changeColor = (id) => {
    const element = document.getElementById(id)
    element.style.background = color
}
const alert = document.querySelector('#alert')


document.addEventListener('keydown', function (event) {
    console.log(event.key)
    console.log(color)

    if (event.key === 'a' || event.key === 'A') {
        color = 'red'
        alert.innerHTML = "SELECCIONASTE EL COLOR ROJO"
    } else if (event.key === 's' || event.key === 'S') {
        color = 'blue'
        alert.innerHTML = "SELECCIONASTE EL COLOR AZUL"
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'black'
        alert.innerHTML = "SELECCIONASTE EL COLOR NEGRO"
    } else {
        color = 'white'
        alert.innerHTML = "DEBES INGRESAR CARÁCTERES VÁLIDOS"
    }
})
import { Modal} from './modal.js'  //importa do modal

//variables
const form = document.querySelector('form') 
// faça uma pesquisa pelo seletor
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
} 

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
//capturar dois números e fazer as operações matemáticas e o resto da divisão / para cada operação mostrar um alerta com o resultado 
alert('Digite dois números para as operações')
let firsNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firsNumber = Number(firsNumber)//lê da direta pra esquerda .pega o firsNumber que está dentro, que vai gerar o resultado que é colocado de volta na variável
secondNumber = Number(secondNumber)

const sum = firsNumber +  secondNumber
const sub = firsNumber - secondNumber
const multi = firsNumber * secondNumber
const div  = firsNumber / secondNumber
const restDiv = firsNumber % secondNumber

alert('soma: ' + sum)
alert('subtração: ' + sub)
alert('multiplicação: ' + multi)
alert('divisão: ' + div)
alert('resto da divisão: ' + restDiv)
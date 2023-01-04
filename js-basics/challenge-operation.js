 /*solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
 -  A soma .
 -  A subtração .
 -  A multiplicação .
 -  A divisão .
 -  O resto da divisão .
Verifique se a soma dos dois números é par
Verifique se os dois números inseridos são iguais
*/

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = (numberOne / numberTwo).toFixed(2)
const restDiv = numberOne % numberTwo
const sum = numberOne + numberTwo

alert(`A subtração de ${numberOne} e ${numberTwo} é : ` + subtraction)
alert(`A multiplicação de ${numberOne} e ${numberTwo} é : ` + multiplication)
alert(`A divisão de ${numberOne} e ${numberTwo} é : `  + division)
alert(`O resto da divisão de ${numberOne} e ${numberTwo} é : ` + restDiv)
alert(`A soma de ${numberOne} e ${numberTwo} é : ` + sum)

if(sum % 2 == 0 ) {
    alert(`A soma de ${numberOne} + ${numberTwo} é par`)
} else {
    alert(`A soma de ${numberOne} + ${numberTwo} é impar`)
}

let result = numberOne === numberTwo

if (result) {
    alert(`Os números ${numberOne} e ${numberTwo} são iguais `)
} else {
    alert(`Os números ${numberOne} e ${numberTwo} são diferentes `)
}
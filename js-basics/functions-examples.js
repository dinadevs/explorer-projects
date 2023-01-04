//return 
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

//function scope 
let subject = 'create video'

function createThink(subject) {// esse subject nesse escopo tem um outro significado,caso esteje vazio () ele busca o do escopo anterior
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

//function hoisting
sayName()

function sayName() {
  console.log('Edna')
}

//const recebendo uma função anônima 
sayName()

const sayMyName = function () {
  console.log('Edna') // erro de referência, não sofre elevação
}


//Arrow function

const sayMyName = (name) => { //escrever funções expression de uma maneira mais compacta =>
  console.log(name)
}

sayMyName('Edna')


//callback function
function sayMyName(name) { //função que está sendo passada para outra função como parâmetro
  console.log(name)
}

sayMyName('Edna') // posso passar qualquer tipo de dado


 //Function () constructor 
 /* * expressão new , automaticamente retorna o objeto 
  * criar um novo objeto 
  * this keyword */
function Person(name) {// parametro da funçãó
	this.name = name
	this.walk() = function() {
		return this.name + "está andando"
	}
}
const mayk = new Person("Mayk")// argumento , o mayk tem uma propriedade chamada name
const joao = new Person("João")
// console.log(mayk.walk()) retorna Mayk está andando


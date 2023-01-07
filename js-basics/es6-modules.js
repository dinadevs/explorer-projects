/*import e export simples
utils.js*/
const message = "mensagem" //essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
alert(message)
// main.js
import './utils.js' // nessa linha ele importa e já executa o arquivo
//_________________________________________________________________________________________________________________

/*default(padrão) import e export 
 utils.js*/
export default 'algum dado'
// ou, para um dado já existente
const text = 'alguma coisa'
export default text
// main.js
import qualquerNome from './utils.js'
//somente um default por arquivo
//_________________________________________________________________________________________________________________

/*Named export
utils.js*/
export const today = Date.now()
// exportando um valor já existente
const double = number => number * 2
export { double }
// exportando diversos
// export { today, double }
// main.js
import { today } from './utils.js'
//É possível ter múltiplos exports
//_________________________________________________________________________________________________________________

//Podemos usar um default export por arquivo em um (ou mais) named export.
const date = new Date()
const greeting = name =>hello`${name}`

export default function (argument) {
console.log(date, greeting(argument))
}

export { date, greeting }
// main.js
import funcaoPadrao, { date, greeting } from './utils.js'
//_________________________________________________________________________________________________________________

/*Import as
utils.js*/
export function sum(a, b) {
    return a + b
    }
    // main.js
    import { sum as soma } from './utils.js'
//_________________________________________________________________________________________________________________

/*Import * as
utils.js*/
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b
// ou
// export { sum, multiply, subtract, divide }

//main.js

import * as calculator from './utils.js'



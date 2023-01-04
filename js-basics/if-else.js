/*
Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.
A média positiva deverá ser maior que 6.
Se o aluno passou no bimestre, dar os parabéns.
Se o aluno não passou, motivar o aluno a dar seu melhor na prova de recuperação.
Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Nome do(a) aluno(a)? ')
let n1 = prompt('Nota da primeira prova? ')
let n2 = prompt('Nota da segunda prova? ')
let n3 = prompt('Nota da terceira prova? ')
//media 
let average = (Number(n1) + Number(n2) + Number(n3)) / 3  

let result = average > 6

average = average.toFixed(2) // boas praticas, não repetir código

if (result) {
  alert('Parabéns, ' + student + '! Sua nota é: ' + average)
} else if (average < 3) {
  alert('Reprovado')
}
else {
  alert(student + ' Não foi dessa vez , mas estude para sua prova de recuperação! Sua nota é: ' + average)
}